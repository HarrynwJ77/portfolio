<script setup lang="ts">
    import hRatioContainer from './hRatioContainer.vue';
</script>
<template>
    <div class="h-sidebar-container-top">
        <div class="h-ratio left">
            
        </div>
        <div class="h-ratio right">
            
        </div>
    </div>
</template>
<style scoped>
.h-sidebar-container-top {
    display: flex;
    flex-direction: row;
}

.h-ratio {
    display: table-cell;
}

.left {
    width: 38.2%;
    padding-top: 100%;
    background-color: #1acf32;
}

.right {
    width: 62.8%;
    padding-top: 100%;
    background-color: #B4D4FF;
}

</style>