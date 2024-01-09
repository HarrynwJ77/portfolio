<script setup lang="ts">
import { getImageUrl } from '@/services/commonGetImageUrl';
</script>
<template>
    <img class="h-icon-hide" v-bind:src="getImageUrl('userInputPasswordHide.svg')">
</template>
<style scoped>
img {
    position: relative;
    width: 20px;
    height: 20px;
}
</style>@/services/hImageGetUrl