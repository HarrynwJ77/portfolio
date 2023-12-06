<script setup lang="ts">
import { ref } from 'vue';
import { getImageUrl } from '@/services/commonGetImageUrl';
var imageInfo


</script>
<template>
    <div class="h-image-container">
        <img class="h-image-src" src="imagePath">
    </div>
</template>
<style scoped>
    .h-image-container {
        position: relative;
        width: 300px;
        height: 300px;
    }

    .h-image-src {
        min-width:300px;
        min-height:300px;
    }
</style>