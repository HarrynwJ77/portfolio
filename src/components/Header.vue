<script setup lang="ts">

</script>

<template>
<div class="header">
    <div class="header-section left">

    </div>
    <div class="header-section middle">
        <h1 class="header-text title">Harry Jones</h1>
        <h3 class="header-text subtitle">Portfolio to rival the Seb Sone</h3>
    </div>
    <div class="header-section right">
        
    </div>
    
    

</div>
</template>

<style scoped>

.header-section {
    display: inline-table;
}

.left {
    width: 20%;
}

.middle {
    width: 60%;
}

.right {
    width: 20%;
    height: 100%;
}

.login-button {
    position:relative;
    display: inline-block;
    background-color: rgba(143, 5, 5, 0);
    border-color: rgb(0,0,0,0.3);
    border-radius: 10px;
    padding: 10px 20px;
    border-style: solid;
    margin-right: 15px;
    transition: all .15s ease-in-out;
    float: right;
}

.login-button:hover {
    background-color: rgb(50, 50, 50, 0.15);
    transition: all .15s ease-in-out; 
    cursor: pointer;
}

/* ----- Header Styles ----- */
.header {
    user-select: none;
    position: sticky;
    z-index: 50;
    background-color: lightgray;
    display:flow-root;
    padding: 0px;
    width:100%;
}

.header-text {
    display: block;
    text-align: center;
}






/* ----- Project Container Styles ------ */






/* ----- Project Styles ----- */






/* Footer Styles ----- */


</style>