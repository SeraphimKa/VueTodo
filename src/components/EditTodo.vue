<script setup lang="ts">
import { ref } from 'vue'
//types
import Todo from '../types/Todo';
//stores
import { useTodosStore } from '../stores/todos';

const todosStore = useTodosStore()

const { todo } = defineProps<{ todo: Todo }>()

const emit = defineEmits<{
    (e: 'close'): void
}>()


const editedTodo = ref(
    todosStore.todos.filter((storedTodo) => storedTodo.id === todo.id)[0].text
    )

const onSubmit = () => {
    const newText = editedTodo.value.trim()
    if (newText) {
        todosStore.editTodo(todo.id, newText)
    }
    emit('close')
}

</script>

<template>
    <div class="edit-wrapper">
        <div class="overlay" @click="$emit('close')">
            <form name="edit-todo" @submit.prevent="onSubmit" @click.stop>
                <input type="text" id="edit-todo" v-model="editedTodo" minlength="5" maxlength="50" required>
                <button class="add-todo-btn" for="add-todo" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>


<style scoped>
    .edit-wrapper {
        position: absolute;
        inset: 0;
    }
    .overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    form {
        position: absolute;
        transform: translate(50%, clamp(100%, 300px, 250%));
        z-index: 2;
        display: flex;
        width: 500px;
        height: 50px;
        background: rgb(92, 189, 181);
        border-radius: 15px;
    }

    input {
        width: 100%;
        padding-left: 10px;
        background: transparent;
        margin: 1px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border: none;
    }

    input:focus {
        box-shadow: 0 0 2px 2px rgb(30, 255, 0);
    }

    .add-todo-btn {
        cursor: pointer;
        background: transparent;
        border: none;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        margin: 4px;
        color: rgb(61, 61, 61);
        font-size: 1.2rem;
        font-weight: 500;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin-left: 10px;
        transition: all 0.1s linear;
    }

    .add-todo-btn:hover,
    .add-todo-btn:focus
    {
        background: rgba(0, 0, 0, 0.4);

    }
    .add-todo-btn:active {
        color: rgb(202, 202, 113);
        box-shadow: inset -6px -6px 10px 5px rgb(0, 0, 0);
}

</style>