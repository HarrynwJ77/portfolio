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

    const projects = ([{title: "Budget", image: "budget_icon.png", example: "", src: "", active: false},
                    {title: "Team 32 Project", image: "team_32.svg", example: "", src: "https://projects.cs.nott.ac.uk/comp2002/2023-2024/team32_project", active: false},
                    {title: "MyDesktop", image: "settings.png", example: "https://gitlab.com/HarrynwJ/my_desktop", src: "", active: false},
                    {title: "Portfolio", image: "portfolio.png", example: "http://localhost:3000/", src: "https://github.com/HarrynwJ77/portfolio", active: true}
                ]);

    
    /* const proj_width = ref(Object.keys(projects).length) */

</script>

<template>

<div class="projects">
    <div class="projects-container">
        
        <div class="project-container" v-for="project in projects" v-bind:key="project.title">  
            <div class="project-title">
                <div class="left-border"></div>
                <p class="title-text">{{ project.title }}</p>
                <div class="right-border"></div>
            </div>
            <div class="project">
                <div class="project-img"><img :src="getImageUrl(project.image)"></div>
            </div>
            <div class="project-info-container">
                <div class="project-info" v-on:click="newTab(project.example)">
                    <a class="project-info-example">Project Example</a>
                </div>
                <div class="project-info" v-on:click="newTab(project.src)">
                    <a class="project-info-src">Project Source Code</a>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
/* ----- Header Styles ----- */

.project-info-container {
    display: table;
    width: 100%;
    opacity: 0;
    transition: all .3s ease-in-out;
}

.project-container:hover .project-info-container {
    display: table;
    opacity: 100%;
    transition: all .3s ease-in-out;
}

.project-info {
    display: table-row;
    transition: all .3s ease-in-out;
}


.project-info>a {
    display: inline-table;
    width: 100%;
    text-align: center;
    font-size:large;
    padding-top: 4%;
    padding-bottom: 4%;
    border-radius: 15px;
    border-width: 2px;
    border-style: solid;
    border-color: lightgrey;
    background-color: lightgrey;
    margin-bottom: 4px;
    transition: all .3s ease-in-out;
}

.project-info:hover .project-info-example {
    border-color: #057ef0;
    transition: all .3s ease-in-out;
}

.project-info:hover .project-info-src {
    border-color: orange;
    transition: all .3s ease-in-out;
}

.project-info-example {
    border-bottom-color: #057ef0 !important;
    transition: all .3s ease-in-out;
}

.project-info-src {
    border-bottom-color: orange !important;
    transition: all .3s ease-in-out;
}

.project-container:hover .project-info {
    display: block;
}

.left-border {
    display:table-cell;
    width: 5%;
    height:inherit;
    border-width: 5px;
    border-top-right-radius: 15px;
    box-shadow: 0 -15px 0 0 lightgrey;
}

.right-border {
    display:table-cell;
    width: 5%;
    height:inherit;
    background-color: white;
    border-top-left-radius: 15px;
    box-shadow: 0 -15px 0 0 lightgrey;
}

.title-text {
    width:100%;
    background-color: lightgrey;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: inline-table;
    text-align: center;
    font-size: x-large;
    margin: 0px;
    padding-bottom: 3%;
    transition: all .3s ease-in-out;
    border-bottom-color: darkgrey;
    border-bottom-width: 2px;
    border-bottom-style: solid;

}

.projects {
    user-select: none;
    position: absolute;
    display:block;
    width:100%;
    justify-content: center;
    transition: all .3s ease-in-out;
}

.projects-container {
    display:table;
    justify-content: center;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    transition: all .3s ease-in-out;
}

.project-container {
    padding: 3%;
    padding-top: 0%;
    display: table-cell;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    max-width: 25% !important;
    min-width: 20%;
    min-height: 20%;
    width: 100%;
    cursor: pointer;
    transition: all .3s ease-in-out;
}

.project {
    margin: 0;
    padding: 6%;
    transition: all .3s ease-in-out;
    margin-left: 5%;
    margin-right: 5%;
}

.project-title {
    width:100%;
    display:inline-table;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.project-img>img {
    width: 80%;
    height: 100%;
    display:flex;
    margin: auto;
}


</style>