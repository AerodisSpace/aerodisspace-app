<template>
  <div id="app">
    <div class="w-screen h-screen overflow-y-auto overflow-x-hidden scrollbar-hidden">
      <div class="h-screen fixed -z-[1] opacity-[15%]" :class="{ 'rotate-90': isMobile }">
        <Vue3Lottie :animationData="animation" :scale="scale" :speed="1" />
      </div>

      <WrapperApp class="w-full h-full flex flex-col">
        <div class="w-full h-full p-4 overflow-y-auto overflow-x-hidden scrollbar-hidden">
          <div class="flex flex-col h-full w-full">
            <span class="text-3xl font-bold">{{ $route.meta.title }}</span>
            <router-view class="w-full h-full scrollbar-hidden" />
          </div>
        </div>
      </WrapperApp>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import WrapperApp from './components/App/WrapperApp.vue';
import { Vue3Lottie } from 'vue3-lottie'
import InitApp from "./modules/init"
//@ts-ignore
import background from "./assets/lottie/background.json"
@Component({
  components: { WrapperApp, Vue3Lottie },
  mixins: [InitApp]
})
class App extends Vue {
  public animation: any = background
  public scale: number = 1
  mounted() {
    // @ts-ignore 
    if (this.isMobile) {
      this.scale = 3
    }
  }
}
export default toNative(App)

</script>