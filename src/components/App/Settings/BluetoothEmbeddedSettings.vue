<template>
    <div>
        <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

            <!-- To Connect -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">

                <div class="lg:w-2/4 lg:col-span-2 form-control">
                    <label class="label cursor-pointer">
                        <span class="label-text">Filter Device</span>
                        <input type="checkbox" class="checkbox" v-model="filter" />
                    </label>
                </div>

                <label v-if="filter" class="lg:col-span-2 form-control w-full max-w-xs">
                    <input type="text" placeholder="Device name" class="input input-bordered w-full max-w-xs" />
                    <div class="label">
                        <span class="label-text-alt">Controller bluetooth device (embedded/esp32) to connect</span>
                    </div>
                </label>

                <div @click="bluetooth?.requestBT(filter ? device_filter : null)" id="bluetooth_start_btn"
                    class="lg:col-span-2 lg:w-2/4 btn btn-outline btn-info">
                    Connect
                </div>

            </div>


            <!-- Device Connected -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div class="lg:col-span-2 lg:w-2/4" :class="{
                            ' outline-error text-error': !bluetooth?.bt_connected,
                            ' outline-success text-success': bluetooth?.bt_connected
                        }">
                    {{ bluetooth?.bt_connected ? 'Connected' : 'Not Connected' }}
                </div>

                <template v-if="!bluetooth?.bt_connected">

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




    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import BluetoothAerodisSpaceApp from '../../../modules/bluetooth'
import store from '../../../store/store'
@Component({})
class BluetoothEmbeddedSettings extends Vue {
    public devices: any
    public bluetooth: BluetoothAerodisSpaceApp | null = null
    public filter: boolean = false
    public device_filter: any = { name: "" }

    async mounted() {
        this.bluetooth = store.state.bluetooth
    }

}
export default toNative(BluetoothEmbeddedSettings)
</script>