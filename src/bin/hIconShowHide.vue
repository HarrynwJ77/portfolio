<script setup lang="ts">
import { getImageUrl } from '@/services/commonGetImageUrl';
</script>
<template>
    <img class="h-icon-show" v-bind:src="getImageUrl('userInputPasswordShow.svg')">
</template>
<style scoped>
img {
    position: relative;
    width: 20px;
    height: 20px;
}
</style>@/services/hImageGetUrl