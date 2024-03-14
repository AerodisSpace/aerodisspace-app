<template>
    <div>
        <div class="w-full h-full flex items-center justify-center">
            <div class="w-2/5 h-3/4 flex items-center justify-center">
                <div class="w-full h-full p-4 rounded-box bg-base-300 shadow-md">


                    <div class="w-full h-full flex flex-col items-center justify-center">

                        <template v-if="!signup">
                            <div class="w-2/4 flex flex-col gap-4">
                                <input type="text" class="input input-bordered w-full" placeholder="email">
                                <input type="password" class="input input-bordered w-full" placeholder="password">
                                <div class="btn btn-link" @click="signup = !signup">Signup</div>
                                <div class="btn btn-outline btn-accent">Login</div>
                            </div>
                        </template>

                        <template v-else>
                            <div class="w-2/4 flex flex-col gap-4">
                                <input type="text" class="input input-bordered w-full" placeholder="email">
                                <input type="text" class="input input-bordered w-full" placeholder="username">
                                <input type="password" class="input input-bordered w-full" placeholder="password">
                                <div class="btn btn-link" @click="signup = !signup">Login</div>
                                <div class="btn btn-outline btn-accent">Signup</div>
                            </div>
                        </template>

                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
@Component({})
class Auth extends Vue {

    public login: string | undefined
    public password: string | undefined

    public signup: boolean = false

}
export default toNative(Auth)
</script>