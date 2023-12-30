<script setup lang="ts">
import { RENDER_LIST } from '@vue/compiler-core';
import { ref } from 'vue';
import  hButtonIcon  from "./hButtonIcon.vue";
import { getImageUrl } from '@/services/commonGetImageUrl';
import { setVars } from '@/services/setVars';
import hbutton from "./hButton.vue";
import img from "./hImage.vue";
import hInputEmailContainer from './hInputEmailContainer.vue';
import hInputPasswordContainer from "./hInputPasswordContainer.vue";

var show_login = ref(false);
var show_signup = ref(false);

var iconSrc = ref("hButtonIconDefault.svg");

function setIconSrc(newSrc:string) {
    newSrc = getImageUrl(newSrc);
    iconSrc = ref(newSrc);
}

function toggleLogin() {
    show_login.value = !show_login.value;
}

function toggleSignUp() {
    show_signup.value = !show_signup.value;
}

</script>

<template>

<div class="user-login-main">
    <div class="user-login-controller">
        <button class="account-button login" v-on:click="toggleLogin">Login</button>
        <button class="account-button sign-up" v-on:click="toggleSignUp">Sign Up</button>
    </div>
    <Transition name="fade-in">
        <div class="user-login-modal" v-if="show_login">
            <div class="user-login-container">
                <div class="login-title-container">
                    <p class="login-title">Login</p>
                </div>
                <div class="login-input-container">
                    <h-input-email-container></h-input-email-container>
                    <h-input-password-container></h-input-password-container>
                </div>
                <div class="login-button-container">
                    <button class="login-button" v-on:click="toggleLogin">Cancel</button>
                    <button class="login-button">Confirm</button>
                </div>
            </div>
        </div>
    </Transition>
</div>

</template>

<style scoped>

.fade-in-enter-active {
  transition: all 0.3s ease-out;
}

.fade-in-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

.user-login-controller {
    position: fixed;
    display: block;
    background-color: darkgrey;
    border-bottom-left-radius: 10px;
    top: 0px;
    right: 0px;
    z-index: 60;
}

.account-button {
    background-color: lightgrey;
    border: 0px;
    border-bottom: 2px;
    border-color: darkgrey;
    border-style: solid;
    padding: 10px;
    width: 80px;
    transition: all .15s ease-in-out;
}

.account-button:hover {
    background-color: azure;
    cursor: pointer;
    transition: all .15s ease-in-out; 
}

.login {
    margin-right: 2px;
    border-bottom-left-radius: 10px;
    border-left: 2px;
    transition: all .15s ease-in-out; 
}

.login-button {
    position:relative;
    display: inline-block;
    background-color: rgb(50, 50, 50, 0);
    border-color: rgb(0,0,0,0.3);
    border-radius: 10px;
    padding: 10px 20px;
    border-style: solid;
    margin: 0 auto;
    transition: all .15s ease-in-out; 
}

.login-button:hover {
    background-color: lightgrey;
    transition: all .15s ease-in-out; 
    cursor: pointer;
}

.login-input-container>input {
    position: relative;
    display: block;
    background-color: azure;
    border: 0px;
    margin: 30px auto;
    margin-top: 2px;
    width: 200px;
    padding: 10px;
    border-radius: 5px;
}

.login-input-container>input:focus-visible {
    outline: none;
}

.user-login-modal {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.3);
    z-index: 55;
}
.login-title {
    text-align: center;
    font-size: x-large;
    margin-top: 5px;
    margin-bottom: 5px;
    
}

.login-title-container {
    display: block;
    background-color: darkgrey;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 5px;
}

.login-button-container {
    display: flex;
    background-color: darkgrey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
}

.login-input-container {
    display: block;
    background-color: lightgrey;
    padding: 30px;

}

.user-login-container {
    position: relative;
    top: 20%;
    width: 300px;
    margin: 0 auto;
}

</style>@/services/hImageGetUrl