use std::thread::sleep;
use std::time::Duration;

use serde::{Deserialize, Serialize};

use btleplug::api::{
    bleuuid::uuid_from_u16, Central, Manager as _, Peripheral as _, ScanFilter, WriteType,
};
use btleplug::platform::{Adapter, Manager, Peripheral};
use tauri::async_runtime::Mutex;
use tauri::State;

const DEVICE_DEFAULT: &str = "AERODISSPACE-CONTROLLER";

#[derive(Debug)]
pub enum ErrorBleAPP {
    Manager(String),
    Adapter(String),
    Unknown(String),
}

impl std::fmt::Display for ErrorBleAPP {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            ErrorBleAPP::Manager(err) => write!(f, "Manager error: {}", err),
            ErrorBleAPP::Adapter(err) => write!(f, "Adapter error: {}", err),
            ErrorBleAPP::Unknown(err) => write!(f, "Unknown error: {}", err),
        }
    }
}
impl std::error::Error for ErrorBleAPP {}

#[derive(Debug)]
pub struct BleApp {
    pub connected: bool,
    pub adapter: Option<Adapter>,
}

impl BleApp {
    pub fn new() -> Self {
        BleApp {
            connected: false,
            adapter: None,
        }
    }
    async fn init(&mut self) -> Result<(), ErrorBleAPP> {
        let manager = Manager::new()
            .await
            .map_err(|_err| ErrorBleAPP::Manager(_err.to_string()))?;
        let adapters = manager
            .adapters()
            .await
            .map_err(|_err| ErrorBleAPP::Adapter(_err.to_string()))?;

        self.adapter = adapters.into_iter().nth(0);

        if self.adapter.is_none() {
            return Err(ErrorBleAPP::Adapter("No adapter found".to_string()));
        }

        Ok(())
    }

    async fn scan(&mut self) -> Result<Vec<Peripheral>, ErrorBleAPP> {
        if let Some(adapter) = &self.adapter {
            adapter
                .start_scan(ScanFilter::default())
                .await
                .map_err(|_err| ErrorBleAPP::Adapter(_err.to_string()))?;
            sleep(Duration::from_secs(10));
            if let Ok(devices) = adapter.peripherals().await {
                Ok(devices)
            } else {
                Ok(vec![])
            }
        } else {
            return Err(ErrorBleAPP::Adapter("No adapter found".to_string()));
        }
    }
}

#[tauri::command(rename_all = "snake_case")]
pub async fn ble_init(ble: State<'_, Mutex<BleApp>>) -> Result<(), String> {
    let mut ble = ble.lock().await;
    ble.init().await.map_err(|_err| _err.to_string())?;
    Ok(())
}

#[derive(Serialize, Deserialize, Default, Debug, Clone)]
pub struct DeviceInfo {
    pub name: String,
    pub address: String,
}

#[tauri::command(rename_all = "snake_case")]
pub async fn ble_scan(ble: State<'_, Mutex<BleApp>>) -> Result<Vec<DeviceInfo>, String> {
    let mut ble = ble.lock().await;
    let devices = ble.scan().await.map_err(|_err| _err.to_string())?;
    let mut devices_info: Vec<DeviceInfo> = vec![];

    for device in devices {
        if let Ok(properties) = device.properties().await {
            if let Some(properties) = properties {
                devices_info.push(DeviceInfo {
                    name: properties.local_name.unwrap_or_default(),
                    address: properties.address.to_string(),
                })
            }
        }
    }

    Ok(devices_info)
}
