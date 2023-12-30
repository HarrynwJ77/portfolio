<script setup lang="ts">
import hButtonIcon from "./hButtonIcon.vue";
import { getImageUrl } from "@/services/commonGetImageUrl";
import { ref } from "vue";
import hImage from "./hImage.vue";
import hIcon from "./hIcon.vue";
import hInputEmailSearch from "./hInputEmailSearch.vue";
import hInputEmailInput from "./hInputEmailInput.vue";

</script>
<template>
    <div class="h-input-email-container">
        <div class="form-label">
          <label>Email</label>
        </div>
        <form>
            <h-input-email-input/>
            <h-input-email-search/>
        </form>
    </div>
</template>
<style scoped>

.h-input-email-container {
  margin-bottom: 15px;
}

.form-label {
  margin-bottom: 4px;
}

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



.h-button {
  /* Just a little styling to make it pretty */
  border:1px solid lightgrey;
  background:blue;
  color:white;
}

</style>