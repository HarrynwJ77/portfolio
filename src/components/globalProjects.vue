<script setup lang="ts">
import projectsAddProject from './projectsAddProject.vue';


function change(text: string) {
	if (currentLinkActive.value) {
		if (currentLinkText.value == text) {
			/* If user hovers over the same icon, do nothing */
			return;
		}
		/* Set up new link then deactivate old link */
		nextLinkText.value = text;
		currentLinkActive.value = !currentLinkActive.value;
		nextLinkActive.value = !nextLinkActive.value;
	} else {
		if (nextLinkText.value == text) {
			return;
		}
		/* Set up old link then deactivate new link */
		currentLinkText.value = text;
		nextLinkActive.value = !nextLinkActive.value;
		currentLinkActive.value = !currentLinkActive.value;
	}
}
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