<script setup lang="ts">
import { getImageUrl } from '@/services/commonGetImageUrl';
import hButtonIcon from './hButtonIcon.vue';
</script>
<template>
    <img class="h-icon-search" v-bind:src="getImageUrl('userInputEmailSearch.svg')">
</template>
<style scoped>
img {
    position: relative;
    width: 20px;
    height: 20px;
}
</style>@/services/hImageGetUrl