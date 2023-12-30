<script setup lang="ts">
import hSidebarContainerTop from './hSidebarContainerTop.vue';
</script>
<template>
    <div class="h-ratio-container">
        <div class="h-ratio left">
            <h-sidebar-container-top></h-sidebar-container-top>
        </div>
        <div class="h-ratio right">
            
        </div>
    </div>
</template>
<style scoped>
.h-ratio-container {
    display: inline-table;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.h-ratio {
    display: table-cell;
}

.left {
    width: 38.2%;
    padding-top: 100%;
    background-color: #86B6F6;
}

.right {
    width: 62.8;
    padding-top: 100%;
    background-color: #B4D4FF;
}
</style>