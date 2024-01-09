<script setup lang="ts">
import { getImageUrl } from '@/services/commonGetImageUrl';
import type { ForOfStatement } from 'typescript';
import { ref } from 'vue';
import hImage from './hImage.vue';
import hIcon from './hIcon.vue';

const props = defineProps({
  src: {type: URL},
})

</script>

<template>
  <button class="h-button-icon" id="hButtonIcon"></button>
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
@/services/hImageGetUrl