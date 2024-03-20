<template>
    <div>
        <!-- Only li for sidebars -->
        <div v-for="route in routes" :key="route.name">
            <li class="text-2xl font-bold" v-if="route.sidebar && route.name != 'Settings'">
                <div @click="page(route.path)">
                    <i :class="route.icon"></i>
                    <span>{{ route.name }}</span>
                </div>
            </li>
        </div>

    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
// @ts-ignore
import config from "../../config/config.json"
//@ts-ignore
@Component({
})
class SideBarPages
    extends Vue {
    public config: any = config
    public routes: any[] = []

    mounted() {
        this.routes = [...this.config.routes.app.free]
        // if (authenticated) 
    }

    public page(page: string): void {
        this.$router.push(page)
        // @ts-ignore
        document.getElementById('navbar-drawer').checked = false
    }
}
export default toNative(SideBarPages
)
</script>
