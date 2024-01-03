<script setup lang="ts">
const props = defineProps({
    src: {type: String}
})

props.src;

console.log(props.src);
</script>
<template>
    <img class="h-icon" src="{{ props.src }}">
</template>
<style scoped>
.img {
    position: relative;
    width: 20px;
    height: 20px;
}
</style>