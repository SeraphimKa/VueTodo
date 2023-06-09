<script setup lang="ts">
import { useTodosStore } from '../stores/todos'
import type Todo from "../types/Todo"

defineProps<{ todo: Todo }>()
const todosStore = useTodosStore()

const removeTodo = (todo: Todo) => {
    todosStore.removeTodo(todo.id)
}
</script>

<template>
    <li class="todo">
        <div>{{ todo.text }}</div>
        <button class="delete" @click.prevent="removeTodo(todo)">X</button>
    </li>
</template>

<style scoped>
.todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    flex: 1 1 30%;
    color: rgb(61, 61, 61);
    font-size: 1.2rem;
    padding: .5rem .4rem;
    background-color: rgb(90, 138, 179);
    border-radius: 5px;
    border-top: 1px solid transparent;
}
.todo:hover {
    background-image: linear-gradient(to bottom, transparent, rgb(92, 189, 181));
    border-top: 1px solid rgb(92, 189, 181);
}

.delete {
    cursor: pointer;
    color: red;
    border: 1px solid red;
    border-radius: 5px;
}
</style>