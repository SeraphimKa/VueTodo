<script setup lang="ts">
//stores
import { useTodosStore } from '../stores/todos'

//components
import TodoCard from './TodoCard.vue';

const todosStore = useTodosStore()
</script>


<template>
    <ul class="todo-list">
        <TodoCard v-for="todo in todosStore.todos" :todo="todo" :key="todo.id" />
    </ul>
</template>




<style scoped>
.todo-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: 1rem;
}
</style>