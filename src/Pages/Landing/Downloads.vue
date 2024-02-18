<template>
    <div>
        <div class="h-screen w-screen bg-blue-500"></div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
@Component({})
class Downloads extends Vue { }
export default toNative(Downloads)
</script>