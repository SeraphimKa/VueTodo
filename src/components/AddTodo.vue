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
        <input type="text" id="add-todo" placeholder="Add todo" v-model="newTodo" minlength="5" maxlength="50"
            autocomplete="off" required>
        <button class="add-todo-btn" for="add-todo" type="submit">Submit</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    width: 500px;
    height: 50px;
    background: rgb(92, 189, 181);
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
}

form:hover,
focus:active {
    background: rgb(92, 189, 181, 0.90);
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
.add-todo-btn:focus {
    background: rgba(0, 0, 0, 0.4);

}

.add-todo-btn:active {
    color: rgb(202, 202, 113);
    box-shadow: inset -6px -6px 10px 5px rgb(0, 0, 0);
}
</style>