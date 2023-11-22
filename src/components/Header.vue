<script setup lang="ts">
/*
    import { ref } from "vue";
    import { exportProof } from "../services/toolbar";
    import { importProof } from "../services/toolbar";
    import { settings } from "../services/toolbar";
    
    const show_dropdown = ref(false);
    const options = ([{option: "Import", icon: "download", func: importProof},
                    {option: "Export", icon: "publish",  func: exportProof},
                    {option: "Settings", icon: "settings", func: settings}
                ]);

    function toggleDropdown() {
        show_dropdown.value = ! show_dropdown.value;
    }
    */

</script>

<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
<div class="header-container">
    <h1 class="header-title">Harry Jones</h1>
    <h3 class="header-subtitle">Portfolio</h3>
</div>

<div class="projects-container">
    <div class="project">CV</div>
    <div class="project">Software Development Projects</div>
    <div class="project">Personal Achievements</div>
</div>

<div class="project-information-container">
</div>

<div class="footer"></div>
</template>

<style scoped>
/* ----- Header Styles ----- */
.header {
    user-select: none;
    position: sticky;
    z-index: 999;
    background-color: rgb(214, 214, 214);
    display:flow-root;
    padding: 0px;
    width:100%;
}

.header-title {
    display: block;
    text-align: center;
}

.header-subtitle {
    display: block;
    text-align: center;
}





/* ----- Project Container Styles ------ */






/* ----- Project Styles ----- */






/* Footer Styles ----- */


</style>