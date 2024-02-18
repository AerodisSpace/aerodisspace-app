// @ts-ignore
import { createStore } from "vuex"

export default createStore({
    state: {
        isTauri: (window as any).__TAURI__ ? true : false,
        isMobile: false,
    },
    mutations: {

    },
    modules: {

    }
})  