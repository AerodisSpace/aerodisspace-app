<template>
    <div>
        <div class="drawer h-full">
            <input id="navbar-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content h-full flex flex-col">
                <!-- Navbar Desktop -->
                <div class="w-full navbar bg-base-300 sticky top-0">
                    <div class="flex-none lg:hidden">
                        <label for="navbar-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div class="flex-1 lg:text-2xl px-2 mx-2">{{ config.app.name }}</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <!-- Navbar desktop menu content here -->
                            <li>
                                <div @click="page('/auth')">Login</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="w-full h-[93vh] flex">

                    <div class="hidden lg:flex flex-col bg-base-300 w-56 justify-between">
                        <ul class="menu">
                            <SideBarPages />
                        </ul>
                        <ul class="menu">
                            <li class="text-2xl font-bold">
                                <div @click="page('/settings')">
                                    <i class="fa-solid fa-gear"></i>
                                    <span>Settings</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Page content here -->
                    <slot></slot>
                </div>

            </div>
            <!-- Sidebar Mobile -->
            <div class="drawer-side">
                <label for="navbar-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <div class="flex flex-col h-full w-80 p-4 bg-base-300">
                    <ul class="menu shadow-md h-full">
                        <SideBarPages />
                    </ul>
                    <ul class="menu">
                        <li text-2xl font-bold>
                            <div @click="page('/settings')">
                                <i class="fa-solid fa-gear"></i>
                                <span>Settings</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
//@ts-ignore
import config from "../../config/config.json"
import SideBarPages from './SideBarPages.vue'
@Component({
    components: { SideBarPages }
})
class WrapperApp extends Vue {
    public config: any = config
    public page(page: string): void {
        this.$router.push(page)
        // @ts-ignore
        document.getElementById('navbar-drawer').checked = false
    }
}
export default toNative(WrapperApp)
</script>