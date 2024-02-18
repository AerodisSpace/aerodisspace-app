<template>
  <div>
    <div class="w-screen h-screen">
      <div class="fixed  -z-[1] opacity-[15%]">
        <Vue3Lottie :animationData="animation" :scale="1" :speed="1" />
      </div>

      <WrapperApp class="w-full h-full flex flex-col">
        <div class="w-full h-full p-4 overflow-y-auto overflow-x-hidden">
          <div class="flex flex-col h-full w-full">
            <span class="text-3xl font-bold">{{ $route.meta.title }}</span>
            <router-view class="w-full h-full" />
          </div>
        </div>
      </WrapperApp>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import WrapperApp from './components/WrapperApp.vue';
import { Vue3Lottie } from 'vue3-lottie'
//@ts-ignore
import background from "./assets/lottie/background.json"
@Component({
  components: { WrapperApp, Vue3Lottie }
})
class App extends Vue {
  public animation: any = background
}
export default toNative(App)

</script>