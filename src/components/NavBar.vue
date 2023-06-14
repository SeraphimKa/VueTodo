
<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>
<template>
    <header>
        <router-link to="/" active-class="active">MyTodo</router-link>
        <router-link to="/notes" active-class="active">MyNote</router-link>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-around;
}

a {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    color: rgb(0, 0, 0);
    text-shadow: 0 0 2px rgb(255, 255, 255);
    font-size: 2rem;
}

a:hover {
    color: rgb(25, 25, 25)
}

.active {
    text-shadow: 0 0 5px rgb(255, 255, 255);
    text-decoration-line: underline;
}
</style>