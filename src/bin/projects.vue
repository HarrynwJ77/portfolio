<script setup lang="ts">
import { RENDER_LIST } from '@vue/compiler-core';

/*
    import { ref } from "vue";
    import { exportProof } from "../services/toolbar";
    import { importProof } from "../services/toolbar";
    import { settings } from "../services/toolbar";
    
    const show_dropdown = ref(false);
*/
    import { getImageUrl } from "../services/commonGetImageUrl";
    import { newTab } from "../services/common";
    import { ref } from "vue";
    import { all_projects } from "../json/projects.json";
    import { getProjects } from '../services/projects';
    /*
    const projects = ([
                    {title: "Budget", image: "budget_icon.png", example: "", src: "", exampleActive: false, srcActive: false},
                    {title: "Team 32 Project", image: "team_32.svg", example: "", src: "https://projects.cs.nott.ac.uk/comp2002/2023-2024/team32_project", exampleActive: false, srcActive: true},
                    {title: "MyDesktop", image: "settings.png", example: "", src: "https://gitlab.com/HarrynwJ/my_desktop", exampleActive: false, srcActive: true},
                    {title: "Portfolio", image: "portfolio.png", example: "http://localhost:3000/", src: "https://github.com/HarrynwJ77/portfolio", exampleActive: true, srcActive: true}
                    ]);

    const projects2 = ([{title: "CV", image: "cv.png", example: "", src: "", exampleActive: false, srcActive: false}]); 

    const projects_all = ([]);

    projects_all[0] = projects;
    projects_all[1] = projects2;
    */

    /* const proj_width = ref(Object.keys(projects).length) */

    /*
    const projects = getProjects(all_projects);
    console.log(all_projects);
    */

    const projects = all_projects;

    function isAvailable(element: boolean) {
        if (!element) {
            return "inactive";
        }
    }

    function getTitleText(available: boolean, info: string) {
        if (!available) {
            return "Not currently available";
        }

        if (info == "example") {
            return "View published project";
        }

        return "View project source code";
    }

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
                <div class="project-info" v-bind:class="isAvailable(project.exampleActive)" v-on:click="newTab(project.example, project.exampleActive)" v-bind:title="getTitleText(project.exampleActive, 'example')">
                    <a class="project-info-example">Project Example</a>
                </div>
                <div class="project-info" v-bind:class="isAvailable(project.srcActive)"  v-on:click="newTab(project.src, project.srcActive)" v-bind:title="getTitleText(project.srcActive, 'src')">
                    <a class="project-info-src">Project Source Code</a>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
/* ----- Header Styles ----- */

.project-info.inactive>a {
    border-top-color: darkgrey !important;
    border-left-color: darkgrey !important;
    border-right-color: darkgrey !important;
    cursor:not-allowed;
    background-color: darkgrey;
}

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
    table-layout: fixed;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    max-width: 25% !important;
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


</style>../services/hImageGetUrl