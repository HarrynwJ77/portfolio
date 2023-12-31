<script setup lang="ts">
import { getImageUrl } from "@/services/hImageGetUrl";
import { VueElement, ref } from "vue";
import educationModal from "./educationModal.vue";

const links = [
	{
		title: "LinkedIn",
		image: "LinkedIn.svg",
		src: "https://www.linkedin.com/in/harry-jones-35b511239/",
		active: true,
	},
	{
		title: "Email",
		image: "email.svg",
		src: "mailto:harrynwjones@gmail.com",
		active: true,
	},
	{
		title: "Mobile",
		image: "mobile.svg",
		src: "+44 77344 70165",
		active: true,
	},
	{
		title: "GitHub",
		image: "github.svg",
		src: "https://github.com/HarrynwJ77",
		active: true,
	},
];

var currentLinkText = ref("Contact Information");
var currentLinkActive = ref(true);

var nextLinkText = ref("New Text");
var nextLinkActive = ref(false);

function animateLink(text: string) {
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

var projectEdu = ref(false);

var modalEducationActive = ref(true);
var modalProjectsActive = ref(false);

function setActive(event:Event, target:String) {
	if (target == "education") {
		modalEducationActive.value = true;
		modalProjectsActive.value = false;
	} else {
		modalEducationActive.value = false;
		modalProjectsActive.value = true;
	}
}

</script>
<template>
	<div class="global-portfolio">
		<div class="left-column">
			<div class="top-row">
				<div class="top-left-column">
					<div class="top-left-column-top">
						<img :src="getImageUrl('profileImage.jpg')" />
					</div>
					<div class="top-left-column-bottom">
						<div class="h-link-container">
							<p class="link-desc">Contact Information</p>
							<div class="h-link-icon-container">
								<img class="h-link-icon" v-for="link in links" v-bind:key="link.title"
									:src="getImageUrl(link.image)" v-on:mouseover="animateLink(link.title)" v-enter />
							</div>
							<div class="h-link-title-container">
								<a class="link-title" v-for="link in links" v-html="link.title" v-if="false"></a>
							</div>
						</div>
					</div>
				</div>
				<div class="top-right-column">
				</div>
			</div>
			<div class="bottom-row">
				<div class="portfolio-title-container">
					<div class="portfolio-btn-container">
						<button class="btn-portfolio" @click="setActive($event, 'education')">Education</button>
						<div class="btn-portfolio-border" v-if="modalEducationActive"></div>
					</div>
					<div class="portfolio-btn-container">
						<button class="btn-portfolio" @click="setActive($event, 'projects')">Projects</button>
						<div class="btn-portfolio-border" v-if="modalProjectsActive"></div>
					</div>
				</div>
				<div class="education-container-main" v-if="modalEducationActive">
					<education-modal></education-modal>
				</div>
				<div class="project-container-main" v-if="modalProjectsActive">
					<project-modal></project-modal>
				</div>
				
			</div>
		</div>
		<div class="right-column"></div>
	</div>
</template>

<style scoped>

.btn-portfolio-border {
	width: 100%;
	border-bottom: 1px;
	border-style: solid;
	border-color: #86b6f6;
}

.btn-border {
	border-bottom: 1px;
	border-color: #86b6f6;
	border-style: solid;
}

.portfolio-title-container {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
}

.btn-portfolio:hover {
	cursor: pointer;
}

.btn-portfolio.active {
	border-bottom: 2px;
	border-style: solid;
	border-color:#86b6f6;
}

.btn-portfolio {
	display: inline;
	padding-bottom: 3px;
	margin: 5px;
	font-size: 20px;
	border-width: 0px;
	background: none;
	width: 100px;
}

.h-link-title-container {
	max-width: 100%;
	overflow-x: hidden;
	margin: auto;
	box-sizing: border-box;
	padding-top: 5px;
	padding-bottom: 10px;
	
}

.link-title {
	display: inline;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-decoration: none;
	font-weight: bold;
	font-size: medium;
	padding-top: 5px;
	padding-left: 10px;
	padding-right: 10px;
}

.h-link-icon-container {
	padding-left: 15px;
	padding-right: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.h-link-icon {
	padding: 5px;
	display: inline-table;
	max-width: 40px;
	max-height: 40px;
	width: 35px;
	height: 35px;
	margin: auto;
	transition: all 0.3s ease-in-out;
}

.h-link-icon:hover .link-desc {
	margin-top: 0px;
	text-decoration-color: green;
	transition: all 0.3s ease-in-out;
}

.h-link-icon:hover {
	padding: 0px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	margin: auto;
	width: 40px;
	height: 40px;
}

.link-desc {
	margin-top: 0px;
	margin-bottom: 8px;
	text-align: center;
	transition: all 0.3s ease-in-out;
}

.top-left-column-top>img {
	border-radius: 45%;
	border-width: 5px;
	border-style: solid;
	border-color: #b4d4ff;
	max-width: 85%;
	max-height: 85%;
	display: flex;
	margin: auto;
}

.global-portfolio {
	display: flex;
	height: 100vh;
}

.left-column {
	flex: 0 0 38.2%;
	display: flex;
	flex-direction: column;
}

.top-row {
	flex: 0 0 38.2%;
	display: flex;
}

.top-left-column {
	flex: 0 0 38.2%;
	display: flex;
	flex-direction: column;
}

.top-left-column-bottom {
	flex: 0 0 38.2%;
	background-color: #86b6f6;
}

.top-left-column-top {
	flex: 0 0 61.8%;
	background-color: #86b6f6;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10px;
}

.top-right-column {
	flex: 0 0 61.8%;
	background-color: #b4d4ff;
}

.bottom-row {
	flex: 0 0 61.8%;
	background-color: #b4d4ff;
}

.right-column {
	flex: 0 0 61.8%;
	background-color: #eef5ff;
}
</style>
