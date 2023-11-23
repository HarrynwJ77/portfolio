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
    import { newTab } from "../services/common";
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
            <div class="project-title"><p>{{ project.title }}</p></div>
            <div class="project" v-on:click="newTab(project.url)">
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
    max-width: 80%;
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

.project-container {
    display: table-cell;
    padding: 3%;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all .3s ease-in-out;
}

.project {
    height: 100%;
    margin: 0;
    padding: 3%;
}

.project:hover {
    cursor: pointer;
}

.project-container:hover{
    padding:1%;
    background-color: lightgray;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    transition: all .3s ease-in-out;
    justify-content:start;
}

.project-container>.project-title {
    vertical-align: top !important;
}


.project-title>p {
    width: 100%;
    text-align: center;
    font-size: x-large;
    margin: 0px;
}

.project-img>img {
    max-width: 80%;
    display:flex;
    margin-left: auto;
    margin-right: auto;
}


</style>