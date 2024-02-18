<template>
    <div>
        <div class="w-full h-full flex items-center justify-center">
            <div class="w-2/4 h-3/4 flex items-center justify-center">
                <div class="w-full h-full p-4 rounded-box bg-base-300 shadow-md">

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
@Component({})
class Auth extends Vue { }
export default toNative(Auth)
</script>