<script setup lang="ts">
import hButtonIcon from "./hButtonIcon.vue";
import { getImageUrl } from "@/services/commonGetImageUrl";
import { ref } from "vue";
import hInputPasswordShowHide from "./hInputPasswordShowHide.vue";
import hInputPasswordInput from "./hInputPasswordInput.vue";

var passwordShow = true;
var buttonIcon = ref(getImageUrl("userInputPasswordShow.svg"));



function showHide() {
  var input = document.getElementById("h-input-password");
  var button = document.getElementById("h-btn-password-show-hide")
  var image = document.getElementById("h-btn-password-show-hide-image");
  if (passwordShow) {
    input?.setAttribute("type", "text")
    image?.setAttribute("src", getImageUrl("userInputPasswordHide.svg"));
    button?.setAttribute("title", "Hide Password");
  } else {
    input?.setAttribute("type", "password")
    image?.setAttribute("src", getImageUrl("userInputPasswordShow.svg"));
    button?.setAttribute("title", "Hide Password");
  }
  passwordShow = ! passwordShow;
}

</script>
<template>
    <div class="h-input-password-container">
        <label>Password</label>
        <form>
          <input id="h-input-password" type="password" class="h-input-password-input" autocomplete="on"/>
          <button id="h-btn-password-show-hide" type="button" class="h-input-password-show-hide" @click="showHide()" title="Show password">
            <img id="h-btn-password-show-hide-image" :src="buttonIcon">
          </button>
        </form>
    </div>
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