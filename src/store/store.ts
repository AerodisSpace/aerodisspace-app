// @ts-ignore
import { createStore } from "vuex"
import BluetoothAerodisSpaceApp from "../modules/bluetooth"

export default createStore({
    state: {
        isTauri: (window as any).__TAURI__ ? true : false,
        isMobile: false,
        bluetooth: null
    },
    mutations: {
        SET_MOBILE(state: any, payload: boolean) {
            state.isMobile = payload
        },

        SET_BLUETOOTH(state: any, payload: BluetoothAerodisSpaceApp) {
            state.bluetooth = payload
        }
    },
    actions: {
        setup({ commit }: { commit: any }) {
            let _bluetooth = new BluetoothAerodisSpaceApp()
            commit("SET_BLUETOOTH", _bluetooth)
        }
    }
})  