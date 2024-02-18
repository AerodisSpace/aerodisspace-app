<template>
    <div>
        <div class="w-[200px] h-[200px] rounded-full grayscale">
            <Vue3Lottie class="rounded-full" :animationData="animation" />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import { Vue3Lottie } from 'vue3-lottie'
//@ts-ignore
import loader_plane from "../assets/lottie/loader_plane.json"
@Component({
    components: { Vue3Lottie }
})
class Loader extends Vue {
    public animation: any = loader_plane
}
export default toNative(Loader)
</script>
