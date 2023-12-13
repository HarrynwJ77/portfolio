<script setup lang="ts">
</script>

<template>
  <input class="h-input"/>
</template>
<style scoped>
.h-input {
    background-color: inherit;
    /* Tell the input to use all the available space */
    flex-grow:2;
    /* And hide the input's outline, so the form looks like the outline */
    border:none;
}


/* remove the input focus blue box, it will be in the wrong place. */
.h-input:focus {
  outline: none;
}
</style>