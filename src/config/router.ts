import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
//@ts-ignore
import config from './config.json'

async function lazy_component(component_path: string) {
    return await import(/* @vite-ignore */`../Pages/${component_path}`)
}

function dynamic_routes(): RouteRecordRaw[] {
    const isTauri = (window as any).__TAURI_INTERNALS__ ? true : false
    let def_routes = config.routes[isTauri ? "app" : "web"];
    let routes: RouteRecordRaw[] = []
    let free_routes: RouteRecordRaw[] = []



    if (isTauri)
        free_routes = def_routes.free.map((r: any) => {
            return {
                path: (r as any).path,
                name: r.name,
                component: () => lazy_component(r.component),
                meta: r.meta,

            }
        })
    else
        free_routes = def_routes.landing.map((r: any) => {
            return {
                path: (r as any).path,
                name: r.name,
                component: () => lazy_component(r.component),
                meta: r.meta,

            }
        })


    // If not tauri, return free routes only, else return all routes 
    if (!isTauri) return free_routes

    const auth_routes_users = ["freeuser", "premiumuser", "developer", "admin"]
    let auth_routes: RouteRecordRaw[] = []
    for (const user in auth_routes_users) {
        for (const r in def_routes.auth[user]) {
            auth_routes.push(
                {
                    path: (r as any).path,
                    name: (r as any).name,
                    component: () => lazy_component((r as any).component),
                    meta: (r as any).meta,
                    beforeEnter: (_to: any, _from: any, next: any) => {
                        next()
                    }
                }
            )
        }
    }

    free_routes.push({
        path: "/transition",
        name: "Transition",
        component: () => lazy_component("App/Transition.vue"),
        meta: {},

    })

    routes = [...free_routes, ...auth_routes]

    return routes
}


export default createRouter({
    history: createWebHistory(),
    routes: [...dynamic_routes(), { path: '/:pathMatch(.*)*', redirect: "/", }]
})