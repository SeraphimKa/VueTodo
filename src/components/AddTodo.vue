<script setup lang="ts">
import { ref } from 'vue'
//stores
import { useTodosStore } from '../stores/todos';


const todosStore = useTodosStore()
const newTodo = ref('')

const onSubmit = () => {
    todosStore.addTodo({ id: todosStore.todos.length, text: newTodo.value, completed: false })
    newTodo.value = ''
}
</script>
<template>
    <form name="add-todo" @submit.prevent="onSubmit">
        <input type="text" id="add-todo" placeholder="Add todo" v-model="newTodo" minlength="5">
        <button class="add-todo-btn" type="submit">Add</button>
    </form>
</template>

