<script setup lang="ts">
import hButtonIcon from "./hButtonIcon.vue";
import { getImageUrl } from "@/services/commonGetImageUrl";
import { ref } from "vue";
import hInputPasswordShowHide from "./hInputPasswordShowHide.vue";
import hInputPasswordInput from "./hInputPasswordInput.vue";

</script>
<template>
    <div class="h-input-password-container">
        <label>Password</label>
        <form>
            <h-input-password-input/>
            <h-input-password-show-hide/>
        </form>
    </div>
</template>
<style scoped>



form {
  /* This bit sets up the horizontal layout */
  display:flex;
  flex-direction:row;
  
  /* This bit draws the box around it */
  border: 2px solid darkgrey;
  border-radius: 5px;

  /* I've used padding so you can see the edges of the elements. */
  padding:3px;

}

/* Add the focus effect to the form so it contains the button */
form:focus-within { 
  outline: 1px solid lightgrey 
}


</style>