<template>
    <div>
        <div class="w-full h-full grayscale">
            <Vue3Lottie :animationData="animation" />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import { Vue3Lottie } from 'vue3-lottie'
//@ts-ignore
import transition_screen from "../../assets/lottie/transition_screen.json"
@Component({
    components: { Vue3Lottie }
})
class Transition extends Vue {
    public animation: any = transition_screen
}
export default toNative(Transition)
</script>
