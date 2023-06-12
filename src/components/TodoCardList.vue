<script setup lang="ts">
//stores
import { onMounted } from 'vue';
import { useTodosStore } from '../stores/todos'

//components
import TodoCard from './TodoCard.vue';

const todosStore = useTodosStore()

onMounted(() => {
    if (localStorage.getItem('todos')) {
        todosStore.todos = JSON.parse(localStorage.getItem('todos') as string)
    }
})


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