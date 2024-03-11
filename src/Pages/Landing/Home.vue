<template>
    <div>
        <div class="w-full h-full flex flex-col gap-4">

            <div class="mb-20">
                Aerodis Space is an innovative platform designed to revolutionize the way we interact with drones and
                model aircraft by facilitating live streaming of FPV (First Person View) video and sensor data in real
                time. In addition to being a powerful tool for the agricultural sector, its versatility makes it ideal
                for applications in environmental monitoring, infrastructure inspection, public safety, and scientific
                research, opening up a range of possibilities for the exploration and analysis of aerial data.
            </div>

            <div class="w-full grid lg:grid-cols-2 lg:gap-2 gap-12">
                <div class="w-full lg:w-3/4 text-4xl font-bold">
                    Aircraft Models to
                    Sensor Data Collection and Analysis
                </div>

                <div class="flex justify-center lg:justify-normal">
                    <img src="../../assets/svgs/data-collection.png" alt="data-collection-image" class="invert">
                </div>

                <div class="">

                </div>

            </div>



        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
@Component({})
class Home extends Vue { }
export default toNative(Home)
</script>