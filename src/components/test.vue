<script setup lang="ts">
import { getImageUrl } from "@/services/hImageGetUrl";
import { ref } from "vue";

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
</script>
<template>
	<div class="container">
		<div class="left-column">
			<div class="top-row">
				<div class="top-left-column">
					<div class="top-left-column-top">
						<img :src="getImageUrl('profileImage.jpg')" />
					</div>
					<div class="top-left-column-bottom">
						<div class="h-link-container">
							<div class="h-link-icon-container">
								<img class="h-link-icon" v-for="link in links" v-bind:key="link.title"
									:src="getImageUrl(link.image)" v-on:mouseover="animateLink(link.title)" v-enter />
							</div>
							<!-- TDOD: Animate icon text in some sort of cool way...-->
							<div class="h-link-title-container">
								<a class="link-title" v-for="link in links" v-html="link.title"></a>
							</div>

							<!-- 
                    <p class="link-desc">Contact Information</p>
                    <a class="link-title" v-for="link in links" v-bind:key="link.title" :href="link.src" v-if="false">{{ link.title }}</a>
                   -->
						</div>
					</div>
				</div>
				<div class="top-right-column"></div>
			</div>
			<div class="bottom-row"></div>
		</div>
		<div class="right-column"></div>
	</div>
</template>

<style scoped>
.h-link-title-container {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	overflow-x: hidden;
	margin: auto;
	box-sizing: border-box;
	mask-image: cross-fade();
}

.link-title {
	display: inline;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-decoration: none;
	font-weight: bold;
	font-size: larger;
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
	text-align: center;
	font-weight: bold;
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

.container {
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
