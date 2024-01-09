<script setup lang="ts">
import projectsAddProject from './projectsAddProject.vue';

</script>
<template>
    <div class="global-projects">
        <div class="project-container">
            <projects-add-project></projects-add-project>
        </div>
    </div>
</template>
<style scoped>
.global-projects {
    display: table;
}

.project-container {
    display: table-cell;
    width: 250px;
    height: 250px;
    padding: 40px;
}

</style>