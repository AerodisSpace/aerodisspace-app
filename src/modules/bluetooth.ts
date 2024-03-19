import { useToast } from "vue-toastification";

export default class BluetoothAerodisSpaceApp {
    private _bt: Bluetooth | undefined | null = null;
    public bt_connected: boolean = false;

    constructor() {

        let bt = navigator.bluetooth
        if (!bt) {
            this._error_msg()
            return
        }
        this._bt = bt

    }

    private _error_msg() {
        useToast().error("Bluetooth is not supported|available on this device. To use this app to connect to the embedded devices, please use a device that supports Bluetooth.");
    }

    public async requestBT(filter: { name: string } | null | undefined): Promise<void> {
        let bt_req_options: RequestDeviceOptions
        if (filter)
            bt_req_options = { filters: [filter] }
        else
            bt_req_options = { acceptAllDevices: true }
        const doc = document.getElementById("bluetooth_start_btn")!

        let bt = this._bt


        doc.addEventListener('click', (event) => {
            event.stopPropagation()
            event.preventDefault()
            if (bt) {
                bt.requestDevice(bt_req_options).then((device: any) => {
                    console.log(device);
                    this.bt_connected = true;
                    useToast().success("Bluetooth device connected successfully.");
                })
            }
        })

    }

    public async getDevices(): Promise<BluetoothDevice[]> {
        if (this._bt) {
            const devices: BluetoothDevice[] | undefined = await this._bt?.getDevices()
            if (devices) {
                return devices;
            } else {
                return [];
            }
        } else {
            this._error_msg();
            return [];
        }
    }

}