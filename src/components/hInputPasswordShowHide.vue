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

var passwordShow = ref(true);

const options = [
  {
    "state": "true",
    "icon": "userInputPasswordShow.svg",
    "ex" : true
  },
  {
    "state": "false",
    "icon": "userInputPasswordHide.svg",
    "ex" : false,
  }
];

const buttonProps = ref(
  [[true, "hIconShow.svg", false, "hIconShow.svg"]]);

function showHide() {
  passwordShow = ref(!passwordShow);
}

</script>

<template>
  <button v-for="option in options" type="button" class="h-input-password-show-hide" @click="showHide()" title="Show password">
    <img :key="option.state" v-if="passwordShow" :src="getImageUrl(option.icon)">
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
