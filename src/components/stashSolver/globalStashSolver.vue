<script setup lang="ts">

import { ref } from "vue";

var stashHeight = ref(48)
var stashWidth = ref(10)



</script>
<template>

    <div class="global-stash-solver">
        <div class="stash-main-container">
            <div class="stash-row" row-number="row" v-for="row in stashHeight">
                <div class="stash-slot" slot-number="slot"  v-for="slot in stashWidth"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.stash-slot {
    width: 80px;
    height: 80px;
    display:inline-block;
    background: linear-gradient(to top, #141514 0%, #1C1D1D 100%);
    border-width: 1px;
    border-color: #292B2B;
    border-style: solid;
}

.stash-row {
    display:list-item;
    height: 80px;
    list-style-type: none;
}

.stash-main-container {
    display:table;
    float: right;
}

.global-stash-solver {
    position: absolute;
    display:block;
    width: 100%;
    max-width: 100%;
    max-height: 90%;
}
</style>