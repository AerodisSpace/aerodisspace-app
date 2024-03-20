use ble::BleApp;
use tauri::async_runtime::Mutex;

pub mod ble;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        //State
        .manage(Mutex::new(BleApp::new()))
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![ble::ble_init, ble::ble_scan,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
