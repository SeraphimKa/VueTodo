
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <header>
        <router-link to="/">MyTodo</router-link>
        <router-link to="/notes">MyNote</router-link>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-around;
}

a {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration-line: underline;
    font-weight: 600;
    color: rgb(0, 0, 0);
    text-shadow: 0 0 3px rgb(255, 255, 255);
    font-size: 2rem;
}

</style>