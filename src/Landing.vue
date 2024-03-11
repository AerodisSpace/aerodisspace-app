<template>
    <div>
        <div data-theme="business" class="w-screen h-screen">
            <div class="w-full h-full flex flex-col gap-20 relative">
                <NavBar class="w-full h-fit" />
                <div class="absolute bg-warning rounded-md right-0 top-[90%] p-4 flex flex-col text-warning-content">
                    <span class="font-bold">WARNING</span>
                    <span>This project is in development</span>
                </div>
                <div class="w-full h-full flex justify-center">
                    <router-view class="w-3/4 lg:w-2/4 h-full p-4" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import NavBar from './components/Landing/NavBar.vue';
@Component({
    components: { NavBar }
})
class Landing extends Vue {

}
export default toNative(Landing)
</script>