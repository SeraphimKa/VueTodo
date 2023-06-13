<script setup lang="ts">
import { ref } from 'vue'
//stores
import { useTodosStore } from '../stores/todos'
//types
import type Todo from "../types/Todo"
//components
import EditTodo from './EditTodo.vue'

defineProps<{ todo: Todo }>()
const todosStore = useTodosStore()

const removeTodo = (todo: Todo) => {
    todosStore.removeTodo(todo.id)
}

const editTodo = ref(false)

</script>

<template>
    <li class="todo">
        <input class="todo-checkbox" type="checkbox" v-model="todo.completed">
        <div>{{ todo.text }}</div>
        <div class=buttons> |
            <button class="edit" @click.prevent="editTodo = true">Edit</button>
            <button class="delete" @click.prevent="removeTodo(todo)
                ">X</button>
        </div>
    </li>
    <EditTodo v-if="editTodo" :todo="todo" @close="editTodo = false" />
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

.todo-checkbox {
    width: 1.1rem;
    height: 1.1rem;
}

.edit {
    cursor: pointer;
    color: blue;
    background: transparent;
    border-radius: 5px;
    margin-right: 2px;
}

.delete {
    cursor: pointer;
    color: rgb(196, 196, 196);
    background: transparent;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>