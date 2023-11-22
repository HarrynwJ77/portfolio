<script setup lang="ts">

import { add } from "../services/models"

const result = add(3, 3);
</script>
<template>

    <h3>This is the metadata box {{ result }}</h3>
</template>

<style scoped>
h3 {
    color: purple;
}
</style>