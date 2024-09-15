<script setup lang="ts">

</script>
<template>
    <div class="global-squadscoreboard">
        <div class="board-main">
            <div class="stash-row" row-number="row" v-for="row in stashHeight">
                <div class="stash-slot" slot-number="slot"  v-for="slot in stashWidth"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.board-main {

}

.global-navbar {

}
</style>