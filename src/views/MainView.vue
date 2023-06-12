<script setup lang="ts">
//components
import ClearAllTodos from '../components/ClearAllTodos.vue';
import AddTodo from '../components/AddTodo.vue';
import TodoCardList from '../components/TodoCardList.vue';

import localStorage from '../composables/localStorage.vue';

</script>

<template>
    <div class="wrapper">
        <localStorage />
        <header>
            <h1>MyTodo</h1>
        </header>
        <main>
            <div class="add-todo-wrapper">
                <AddTodo />
                <ClearAllTodos />
            </div>
            <TodoCardList />
        </main>
    </div>
</template>

<style scoped>
.add-todo-wrapper {
    display: flex;
    align-items: center;
    padding: 1.2rem 5rem;
    width: auto;
}

h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration-line: underline;
    font-weight: 600;
    color: rgb(0, 0, 0);
    text-shadow: 0 0 3px rgb(255, 255, 255);
    font-size: 2rem;
    text-align: left;
    padding-left: 5rem;
}
</style>
