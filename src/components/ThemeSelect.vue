<template>
    <div>
        <div class="dropdown mb-72">
            <div tabindex="0" role="button" class="btn m-1">
                Theme
                <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul tabindex="0"
                class="w-52 h-[200px] overflow-y-auto dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box">
                <li v-for="theme in themes" :key="theme">
                    <input type="radio" name="theme-dropdown"
                        class="theme-controller btn btn-sm btn-block btn-ghost justify-start" :aria-label="theme"
                        :value="theme" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
// @ts-ignore
import config from '../config/config.json'

@Component({})
class ThemeSelect extends Vue {
    public themes: string[] = config.themes

}
export default toNative(ThemeSelect)
</script>
