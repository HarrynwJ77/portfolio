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
<div class="header">
    <h1 class="header-title">Harry Jones</h1>
    <h3 class="header-subtitle">Portfolio to rival the Seb Sone</h3>
</div>
</template>

<style scoped>
/* ----- Header Styles ----- */
.header {
    user-select: none;
    position: sticky;
    z-index: 999;
    background-color: lightgray;
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