<script setup lang="ts">
import { getImageUrl } from '@/services/hImageGetUrl';


</script>
<template>
    <div class="projects-add-project">
        <div class="projects-add-container">
            <div class="project-add-icon">
                <img :src="getImageUrl('iconPlus.svg')">
            </div>
            <div class="project-add-title">
                <p>Add Project</p>
            </div>
        </div>
    </div>
</template>
<style scoped>

.projects-add-container:hover {
    cursor: pointer;
}

.projects-add-container {
    display: table;
    width: 250px;
    height: 250px;
    border-style: solid;
    border-color: #808080;
    border-width: 1px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

}

img {
    max-width: 180px;
    max-height: 180px;
    
}

p {
    margin: 0px;
    font-size: 20px;
}

.project-add-icon {
    text-align: center;
    text-decoration: none;
    font-size: 80px;
}

.project-add-title {
    text-align: center;
    text-decoration: none;
}

</style>