
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
    border: red;
}
</style>