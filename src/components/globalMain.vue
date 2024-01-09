<script setup lang="ts">
import globalPortfolio from "./globalPortfolio.vue";
import globalProjects from "./globalProjects.vue";

import { ref } from "vue";


var modalPortfolioActive = ref(false);
var modalProjectsActive = ref(!modalPortfolioActive.value);

function setActive(event:Event, target:String) {
	if (target == "portfolio") {
		modalPortfolioActive.value = true;
		modalProjectsActive.value = false;
	} else {
		modalPortfolioActive.value = false;
		modalProjectsActive.value = true;
	}
}

</script>

<template>
  <div class="global-navbar">
    <div class="navbar-button-container">
        <button class="navbar-btn portfolio" @click="setActive($event, 'portfolio')">Porfolio</button>
        <button class="navbar-btn projects" @click="setActive($event, 'projects')">Projects</button>
    </div>
</div>
  <global-portfolio v-if="modalPortfolioActive"></global-portfolio>
  <global-projects v-if="modalProjectsActive"></global-projects>
</template>

<style>
.global-navbar {
    z-index: 999;
    position: sticky;
    display: flex;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: darkgray;
    justify-content: center;
    align-items: center;
}

.navbar-button-container {
    display: flex;
    height: 100%;
    width: 20%;
    margin: 0 auto;
}

.navbar-btn {
    width: 50%;
    height: 100%;
    padding-left: 5px;
    padding-right: 5px;
    background-color: darkgrey;
    border-style: none;
    transition: all 0.3s ease-in-out;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
}

.navbar-btn:hover {
    background-color: grey;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

</style>
