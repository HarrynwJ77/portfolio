<script setup lang="ts">
import { getImageUrl } from '@/services/hImageGetUrl';
const props = defineProps({
    src: {type: String}
})

</script>
<template>
    <img class="h-icon" :src="props.src">
</template>
<style scoped>
img {
    position: relative;
    max-width: 25px;
    max-height: 25px;
    height: inherit;
    width: inherit;
}
</style>