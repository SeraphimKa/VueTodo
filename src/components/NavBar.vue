
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
    color: rgb(78, 78, 78);
    font-size: 1rem;
}

a:hover {
    color: rgb(92, 189, 181, 0.8);
}

.active {
    color: rgb(92, 189, 181);
    text-decoration-line: underline;
}

header {
    border-bottom: 1px solid silver;
    padding-bottom: 15px;
}
</style>