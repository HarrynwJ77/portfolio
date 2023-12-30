<script setup lang="ts">
import { ref } from 'vue'

const props = ref ({
    src: {type: String}
})

</script>
<template>
    <img class="h-image" src="{{ props.src }}">
</template>
<style scoped>

.h-image {
    display: block;
}

.img::after {
    position: relative;
    width: 300px;
    max-width: 300px;
    height: x(inherit);
    content: src(inherit);
}

</style>