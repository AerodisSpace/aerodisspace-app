<template>
    <div>
        <div class="w-full h-full grid grid-cols-1 lg:grid-cols-1 gap-10 p-4">

            <div class="w-full h-full flex flex-col gap-4 p-4 rounded-box bg-base-300 shadow-md">
                <div class="flex gap-4 items-center text-3xl font-bold">
                    <span class="h-14 w-14 flex items-center justify-center rounded-box bg-neutral text-neutral-content">
                        <i class="fa-solid fa-satellite-dish"></i>
                    </span>
                    <span>Live Settings</span>
                </div>
            </div>

            <div class="w-full h-full flex flex-col gap-4 p-4 rounded-box bg-base-300 shadow-md">
                <div class="flex gap-4 items-center text-3xl font-bold">
                    <span class="h-14 w-14 flex items-center justify-center rounded-box bg-neutral text-neutral-content">
                        <i class="fa-solid fa-microchip"></i>
                    </span>
                    <span>Embedded Settings</span>
                </div>
            </div>

            <div class="w-full h-full flex flex-col gap-4 p-4 rounded-box bg-base-300 shadow-md">
                <div class="flex gap-4 items-center text-3xl font-bold">
                    <span class="h-14 w-14 flex items-center justify-center rounded-box bg-neutral text-neutral-content">
                        <i class="fa-solid fa-sliders"></i>
                    </span>
                    <span>App Settings</span>
                </div>
                <div class="w-full h-full grid grid-cols-1 p-2 gap-4">

                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn m-1">
                            Theme
                            <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                            </svg>
                        </div>
                        <ul tabindex="0"
                            class="dropdown-content z-[1] h-[200px] overflow-y-auto overflow-x-hidden p-2 shadow-2xl bg-base-300 rounded-box w-52">
                            <li v-for="theme in themes" :key="theme">
                                <input type="radio" name="theme-dropdown"
                                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    :aria-label="theme" :value="theme" @click="toggle_theme(theme)" />
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
// @ts-ignore
import config from "../../config/config.json"
@Component({})
class Settings extends Vue {
    public themes: string[] = config.themes

    public toggle_theme(theme: string) {
        localStorage.setItem('theme', theme)
        const html_doc = document.querySelector("html")
        html_doc!.setAttribute("data-theme", theme);
    }

}
export default toNative(Settings)
</script>