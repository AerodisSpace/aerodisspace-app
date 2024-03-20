import { createApp } from "vue";
import "./styles.css";
import 'flowbite';
import App from "./App.vue";
import Landing from "./Landing.vue";
import { initFlowbite } from "flowbite";
//@ts-ignore
import Vue3lottie from "vue3-lottie";
import router from "./config/router";
import store from "./store/store";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { is_mobile_platform } from "./config/config_os";


async function main() {
    let app
    if ((window as any).__TAURI_INTERNALS__)
        app = createApp(App)
    else
        app = createApp(Landing)

    app.use(Vue3lottie)
    app.use(store)
    app.use(router)
    app.mount('#app')
    app.use(Toast, {
        position: POSITION.TOP_RIGHT,
        timeout: 4000,
        transition: "Vue-Toastification__slideBlurred",
    })
    initFlowbite()
    let theme = localStorage.getItem('theme') || 'dracula'
    const html_doc = document.querySelector("html")
    html_doc!.setAttribute("data-theme", theme);

    const mobile = is_mobile_platform()
    store.commit('SET_MOBILE', mobile)

}



await main()