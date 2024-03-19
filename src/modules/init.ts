import { Component, Vue, toNative } from 'vue-facing-decorator'
import store from '../store/store'

@Component({})
class InitApp extends Vue {

    public async mounted() {
        store.dispatch("setup")
    }

}
export default toNative(InitApp)