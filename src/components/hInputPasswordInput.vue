<script setup lang="ts">
</script>
<template>
  <input type="password" class="h-input-password-input" autocomplete="on"/>
</template>
<style scoped>
input {
    background-color: inherit;
    /* Tell the input to use all the available space */
    flex-grow:2;
    /* And hide the input's outline, so the form looks like the outline */
    border:none;
}


/* remove the input focus blue box, it will be in the wrong place. */
input:focus {
  outline: none;
}
</style>