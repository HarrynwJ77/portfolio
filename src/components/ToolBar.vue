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
<div class="topnav">
    <div>
        <h1>Harry Jones</h1>
        <h3>Portfolio</h3>
    </div>
</div>
</template>

<style scoped>
/* Navbar */
.topnav {
    user-select: none;
    position: sticky;
    z-index: 999;
    background-color: rgb(214, 214, 214);
    display:flow-root;
    padding: 0px;
}

/* Navbar Buttons Container*/
.topnav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

/* Navbar Button Container*/
.topnav li {
    display: flex;
}

/* Navbar Button */
.topnav li a {
    display: table;
    padding: 10px 10px;
    text-decoration: none;
    background-color: rgb(214, 214, 214);
}

.drpBtn {
    padding: 0px 10px !important;
    width: 100%;
}


.topnav li a>span {
    display:table-cell;
    vertical-align: middle;
}

.topnav li a p {
    padding-left: 6px;
}

.topnav li a:hover {
    cursor: pointer;
    background-color: darkgray;
}

.navbar li:hover ul {
display: block;
}

/* Navbar Dropdown buttons container */
.topnav ul ul {
    top: 100%;
    position: absolute;
}

/* Navbar dropdown button container */
.topnav ul ul li {
    display: block;
}

.topnav li:hover ul {
    display: block;
}


.menu_left {
    float: left;
}

.menu_right {
    float: right;
}

</style>