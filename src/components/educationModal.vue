<script setup lang="ts">
import { ref } from 'vue';
import { getImageUrl } from '@/services/hImageGetUrl';
import { education } from "../json/education.json";
import  hIcon  from "./hIcon.vue";

const institutes = education;


</script>
<template>
    <div class="education-modal">
        <div class="education-container" v-for="institutions in institutes">
            <div class="education-image-container">
                <img class="education-image" :src="getImageUrl(institutions.image)">
            </div>
            <div class="education-info-container">
                <div class="education-institute-info">
                    <a class="education-title" :href="institutions.website"  target="_blank" rel="noopener noreferrer">
                        <Transition name="link-hover">
                            <hIcon style="margin-right: 7px;" :src="getImageUrl('linkIcon.svg')"></hIcon>
                        </Transition>
                        {{ institutions.institution }}
                    </a>
                    <h2 class="education-period">{{ institutions.monthStart }} {{ institutions.yearStart }} - {{ institutions.monthEnd }} {{ institutions.yearEnd }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.link-hover-enter-active {
  transition: all 0.3s ease-out;
}

.link-hover-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.link-hover-enter-from,
.link-hover-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.h-icon {
    display: none;
    translate: x(-20);
	transition: all 0.3s ease-in-out;
}

.education-title:hover .h-icon {
    display:block;
	transition: all 0.3s ease-in-out;
}

.education-image {
    max-height: 100px;
    max-width: 100px;
}

.education-period {
    all: inherit;
    float: right;
}

.education-title {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    float: left;
    text-decoration: none;
    color: black;
}



.education-institute-info {
    float: right;
}

.education-info-container {
	flex: content;
	display: inline-flex;
	flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
}
.education-image-container {
	flex: 0 0 100px;
	display: flex;
	flex-direction: column;
    border-style: solid;
    border-color: #EEF5FF;
    border-width: 0px;
}
.education-container {
    display: flex;
    flex-direction: row;
    padding: 10px;
}

.education-modal {
    display: flex;
    flex-direction: column;
	width: 100%;
    margin: 5px;
}

</style>