<script setup lang="ts">
import { getImageUrl } from '@/services/commonGetImageUrl';
import type { ForOfStatement } from 'typescript';
import { ref } from 'vue';

var iconUrl = ref(getImageUrl("hButtonIconDefault.svg"));

export function getData() {
  const button = document.getElementById("hButton")!;
  const newSrc = button.getAttribute("src")!;
  console.log(newSrc);
  const image = document.getElementById("h-button-icon")!;
  /* image.setAttribute("src", getImageUrl(newSrc)); */
  console.log("Helllo");
  iconUrl = ref(getImageUrl(newSrc));
}

</script>

<template>
  <button class="h-button-icon x-large" id="hButton"><img class="image-behaviour" id="h-button-icon" v-bind:src="iconUrl"></button>
</template>


<style scoped>



.h-button-icon {
  all: inherit;
  background: none;
  border: none;
  margin: none;
  padding: 0px;
  width: 20px;
  height: 20px;
}

.x-small {
  width: 10px;
  height: 10px;
}

.small {
  width: 20px;
  height: 20px;
}

.medium {
  width: 30px;
  height: 30px;
}

.large {
  width: 40px;
  width: 40px;
}

.x-large {
  width: 50px;
  height: 50px;
}

</style>
