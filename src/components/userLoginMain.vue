<script setup lang="ts">
import { RENDER_LIST } from '@vue/compiler-core';
import { ref } from 'vue';

const show_login = ref(true);


</script>

<template>

<div class="user-login-main" v-if="show_login">
    <div class="user-login-container">
        <div class="login-title-container">
            <p class="login-title">Login</p>
        </div>
        <div class="login-input-container">
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Password">
        </div>
        <div class="login-button-container">
            <button class="login-button">Cancel</button>
            <button class="login-button">Confirm</button>
        </div>
    </div>
</div>

</template>

<style scoped>

.login-button {
    position:relative;
    display: inline-block;
    background-color: darkgrey;
    border-color: darkgrey;
    border-radius: 5px;
    padding: 5px 10px;
    border-style: outset;
    margin: 0 auto;
}

.login-button:hover {
    cursor: pointer;
}

.login-input-container>input {
    position: relative;
    display: block;
    background-color: azure;
    border: 0px;
    margin: 10px auto;
    width: 200px;
    padding: 5px;
}

.login-input-container>input:focus-visible {
    outline: none;
}

.user-login-main {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.3);
    z-index: 51;
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
    padding: 5px;

}

.user-login-container {
    position: relative;
    top: 20%;
    width: 300px;
    margin: 0 auto;
}

</style>