<script setup lang="ts">
import { getImageUrl } from '@/services/commonGetImageUrl';
import type { ForOfStatement } from 'typescript';
import { ref } from 'vue';
import hIconShow from './hIconShow.vue';
import hIconHide from "./hIconHide.vue";

function searchEmails() {
  console.log("Searching emails: ")
  /* TODO: On click, button should console log contents of input field */
}

var passwordShow = true;
var buttonIcon = ref(getImageUrl("userInputPasswordShow.svg"));



function showHide() {
  var button = document.getElementById("btn")
  var image = document.getElementById("btn-image");
  if (passwordShow) {
    image?.setAttribute("src", getImageUrl("userInputPasswordHide.svg"));
    button?.setAttribute("title", "Hide Password");
  } else {
    image?.setAttribute("src", getImageUrl("userInputPasswordShow.svg"));
    button?.setAttribute("title", "Hide Password");
  }
  passwordShow = ! passwordShow;
}

</script>

<template>
  <button id="btn" type="button" class="h-input-password-show-hide" @click="showHide()" title="Show password">
    <img id="btn-image" :src="buttonIcon">
  </button>
</template>


<style scoped>

button {
  all: inherit;
  background: none;
  border: none;
  margin: none;
  padding: 0px;
  width: 20px;
  height: 20px;
}

button:hover {
  cursor:pointer;
}

button:active img{
  content: src(getImageUrl("userInputPasswordHide.svg"))
}

</style>
