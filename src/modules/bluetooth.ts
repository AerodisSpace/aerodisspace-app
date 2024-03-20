import { invoke } from "@tauri-apps/api/core";
import { useToast } from "vue-toastification";

export default class BluetoothAerodisSpaceApp {
    public connected: boolean = false;

    constructor() {

        invoke('ble_init').then((_) => { })
        setInterval(() => {
            this._update()
        }, 500)
    }

    private async _update() {

    }


    public async connect(device_name: { name: string, address: string } | null | undefined) {
        if (!device_name) {
            useToast().error("No device name provided")
            return
        }
    }

    public async scan_devices() {
        try {
            const devices = await invoke('ble_scan')
            console.log(devices);

            return devices
        } catch (_err) {
            useToast().error("Error scanning for devices")
        }
    }


}