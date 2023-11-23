<script setup lang="ts">
import { RENDER_LIST } from '@vue/compiler-core';

/*
    import { ref } from "vue";
    import { exportProof } from "../services/toolbar";
    import { importProof } from "../services/toolbar";
    import { settings } from "../services/toolbar";
    
    const show_dropdown = ref(false);
*/
    import { getImageUrl } from "../services/projects";
    import { ref } from "vue";

    const projects = ([{title: "Budget", image: "budget_icon.png", url: ""},
                    {title: "Team 32 Project", image: "team_32.svg", url: "https://projects.cs.nott.ac.uk/comp2002/2023-2024/team32_project"},
                    {title: "Settings", image: "settings.png", url: "https://gitlab.com/HarrynwJ/my_desktop"},
                    {title: "Test", image: "budget_icon.png", url: ""}
                ]);

    /* const proj_width = ref(Object.keys(projects).length) */

</script>

<template>

<div class="projects">
    <div class="projects-container">
        <div class="project-container" v-for="project in projects" v-bind:key="project.title">
            <div class="project">
                <div class="project-title"><p>{{ project.title }}</p></div>
                <div class="project-img"><img :src="getImageUrl(project.image)"></div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
/* ----- Header Styles ----- */
.projects {
    user-select: none;
    position: absolute;
    display:block;
    width:100%;
    justify-content: center;
}

.projects-container {
    display:table;
    justify-content: center;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

.project-container {
    padding: 2%;
    display: table-cell;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all .3s ease-in-out;
    width: 25% !important;
    min-width: 30%;
    min-height: 30%;
}

.project-container.project {
    display: table-cell;
    padding: 5%;
    justify-content: center;
    align-items: center;
    transition: padding .3s ease-in-out;
    width: 100%;
}

.project:hover {
    cursor: pointer;
    padding: 1%;
    transition: padding .3s ease-in-out;
}

.project-container:hover{
    background-color: lightgray;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    transition: all .3s ease-in-out;
}

.project-title {
    display:flex;
}

.project-title>p {
    width: 100%;
    text-align: center;
    font-size: x-large;
}

.project-container.project.project-img {
    display: flex;
    justify-content: center;
}

.project-img>img {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
}


</style>