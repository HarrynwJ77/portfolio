<script setup lang="ts">
import globalPortfolio from "./globalPortfolio.vue";
import globalProjects from "./globalProjects.vue";
import globalStashSolver from "./stashSolver/globalStashSolver.vue";
import globalSquadScoreboard from "./globalSquadScoreboard.vue"


import {computed, ref} from "vue";

const buttons = ref([
    { label: "Portfolio",
        class: "portfolio",
        target: "portfolio"},
    { label: "Projects",
        class: "projects",
        target: "projects"},
    { label: "Stash Solver",
        class: "stashsolver",
        target: "stash-solver"},
    { label: "Squad Scoreboard",
        class: "squad-scoreboard",
        target: "squadscoreboard"}
])

const selectedIndex = ref(0);

const containerRef = ref(null);

// Function to slide the clicked button to the center
const slideToCenter = (index) => {
  selectedIndex.value = index;
};

// Dynamically calculate the translation to center the button
const rowStyle = computed(() => {
    const buttonWidth = 304; // Assuming a fixed width for simplicity (can be calculated dynamically)
    const containerWidth = containerRef.value ? containerRef.value.offsetWidth : 1920;

    const halfContainerWidth = containerWidth / 2;

    // Calculate the offset to center the selected button
    const offset = (selectedIndex.value * buttonWidth) + (buttonWidth / 2) - halfContainerWidth;

    // Prevent overflow by limiting the translation to a minimum and maximum value
    const maxOffset = (buttons.value.length * buttonWidth) - containerWidth;
    const clampedOffset = Math.min(Math.max(offset, 0), maxOffset);
    return {
        transform: `translateX(${-clampedOffset}px)`,
    };
});

/* var modalProjectsActive = ref(!modalPortfolioActive.value); */

var modalPortfolioActive = ref(false);
var modalProjectsActive = ref(false);
var modalStashSolverActive = ref(false);
var modalSquadScoreboardActive = ref(true)


function setActive(event:Event, target:String) {
	
    /*
    if (target == "portfolio") {
		modalPortfolioActive.value = true;
		modalProjectsActive.value = false;
	} else {
		modalPortfolioActive.value = false;
		modalProjectsActive.value = true;
	}
    */

    switch(target) {
        case "portfolio": {
            modalPortfolioActive.value = true;
            modalProjectsActive.value = false;
            modalStashSolverActive.value = false;
            modalSquadScoreboardActive.value = false;
            break;
        }
        case "projects": {
            modalPortfolioActive.value = false;
            modalProjectsActive.value = true;
            modalStashSolverActive.value = false;
            modalSquadScoreboardActive.value = false;
            break;
        }
        case "stashsolver": {
            modalPortfolioActive.value = false;
            modalProjectsActive.value = false;
            modalStashSolverActive.value = true;
            modalSquadScoreboardActive.value = false;
            break;
        }
        case "squadscoreboard": {
            modalPortfolioActive.value = false;
            modalProjectsActive.value = false;
            modalStashSolverActive.value = false;
            modalSquadScoreboardActive.value = true;
            break;
        }
        default: {
            //statements;
            break;
        }
    }
}

</script>

<template>

  <div class="global-navbar">
    <div class="navbar-button-container button-container" ref="containerRef">
        <button  :style="rowStyle"
          v-for="(button, index) in buttons"
          class="navbar-btn"
          :key="index"
          :class="[
              button.class,
              {'selected': selectedIndex === index}]"
          @click="slideToCenter(index), setActive($event, button.target)"
        >
      {{ button.label }}
    </button>
    </div>
</div>
  <global-portfolio v-if="modalPortfolioActive"></global-portfolio>
  <global-projects v-if="modalProjectsActive"></global-projects>
  <global-stash-solver v-if="modalStashSolverActive"></global-stash-solver>
  <global-squad-scoreboard v-if="modalStashSolverActive"></global-squad-scoreboard>

</template>

<style>



.global-navbar {
    z-index: 999;
    position: sticky;
    display: flex;
    top: 0;
    width: 100%;
    height: fit-content;
    background-color: azure;
    justify-content: center;
    align-items: center;
}

.navbar-button-container {

  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;
    background-color: azure;
    height: fit-content;
    width: 80%;
    margin: 0 auto;
  overflow: hidden;
    transition: transform 0.3s ease;
}

.navbar-btn {
    width: 20%;
    height: 100%;
    padding: 10px 20px;
    background-color: #c2c2c2;
    border-style: solid;
    border-color: #d5cece;
    border-radius: 0px;
    transition: all 0.3s ease-in-out;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
      margin: 5px;
      transition: opacity 0.5s ease, transform 0.5s ease;
      opacity: 1;

  flex-shrink: 0; /* Prevents buttons from shrinking */
}

.navbar-btn:hover {
    background-color: azure;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.navbar-btn:active {
    background-color: azure;
}

.navbar-btn:focus {
    background-color: azure;
}



.selected {
  background-color: azure;
}
</style>
