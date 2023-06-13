
<script setup lang="ts">
import { useTodosStore } from '../stores/todos';
const todosStore = useTodosStore()

const handleClick = () => {
    todosStore.clearTodos()
}
</script>


<template>
    <div>
        <button @click="handleClick">Clear All</button>
    </div>
</template>

<style scoped>
button {
    color: red;
    background: transparent;
    border: 2px solid red;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: red;
    color: white;
    border: 2px solid white;
}
</style>