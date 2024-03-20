<template>
    <!-- @vue-skip -->
    <div>

        <!-- Bluetooth Settings -->
        <div class="w-full h-fit grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

            <!-- To Connect -->
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">


                <div class="w-full h-[220px] flex flex-col gap-1 overflow-y-auto">
                    <template v-if="devices.length == 0">
                        <div
                            class="w-full h-full p-2 flex items-center justify-center font-bold skeleton bg-neutral text-neutral-content rounded-box">
                            Scanning for devices...
                        </div>
                    </template>

                    <template v-else>
                        <div v-for="device in devices" :key="device"
                            class="w-full flex items-center justify-between bg-neutral text-neutral-content text-xs p-2">
                            <div class="flex flex-col">
                                <span>
                                    {{ device.name }}
                                </span>
                                <span>
                                    {{ device.address }}
                                </span>
                            </div>
                            <div class="btn btn-outline btn-info">Connect</div>
                        </div>
                    </template>


                </div>
                <div @click="scan" class="lg:w-2/4 btn btn-outline btn-neutral lg:col-span-2">
                    Scan
                </div>

            </div>

            <!-- Device Info Connected -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div class="lg:col-span-2 lg:w-2/4" :class="{
                        ' outline-error text-error': !bluetooth?.connected,
                        ' outline-success text-success': bluetooth?.connected
                    }">
                    {{ bluetooth?.connected ? 'Connected' : 'Not Connected' }}
                </div>

                <template v-if="!bluetooth?.connected">

                    <div
                        class="lg:col-span-2 bg-base-200 skeleton w-full h-full flex items-center text-xs justify-center text-base-content">
                        Wait for Connection<br>
                        Bluetooth device... </div>
                    <div class="bg-base-200 skeleton w-5/6 h-3/4 p-2"></div>
                    <div class="bg-base-200 skeleton w-full h-2/4 p-4"></div>
                    <div class="lg:col-span-2 bg-base-200 skeleton w-full h-2/4 p-3"></div>
                </template>

                <template v-else>
                    <div>

                    </div>
                </template>

                <div class="lg:col-span-2">
                    While you are connected to the device, you can control the device from the app, manage the
                    device(embedded) settings, and view the device status.
                    <div class="badge badge-info">Check Embedded Settings</div>
                </div>
            </div>

        </div>

        <div class="w-full flex flex-col gap-4 h-full mt-10">
            <div class="w-full text-center p-2 text-xl font-bold">
                Controller And Aircraft Settings
            </div>
            <div class="w-full bg-neutral rounded-box text-neutral-content bg-opacity-50">
                <div class="my-2">
                    This section, is for the connected device. The controller device is the microcontroller that will
                    send radio
                    signals to the aircraft and receive sensor data from aircraft that will be send to the server and
                    displayed
                    on the app.
                </div>
                <div class="my-2">
                    Configure the wifi network that the controller will connect to, the api-token (for data
                    transmission), and
                    the aircraft settings (motor and sensor pins).
                </div>
            </div>
            <!-- Controller Settings -->
            <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2">
                <div class="text-xl font-bold lg:col-span-2">Controller</div>
            </div>
            <!-- Aircraft Settings -->
            <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2">
                <div class="text-xl font-bold lg:col-span-2">Aircraft</div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import BluetoothAerodisSpaceApp from '../../modules/bluetooth'
import store from '../../store/store'

@Component({})
class Controller extends Vue {
    public devices: { name: string, address: string }[] = []
    public bluetooth: BluetoothAerodisSpaceApp | null = null

    async mounted() {
        this.bluetooth = store.state.bluetooth
        await this.scan()
    }

    async scan() {
        this.devices = []
        this.devices = await this.bluetooth?.scan_devices() as { name: string, address: string }[]
    }
}
export default toNative(Controller)
</script>
