<script setup lang="ts">
//components
import ClearAllTodos from '../components/ClearAllTodos.vue';
import AddTodo from '../components/AddTodo.vue';
import TodoCardList from '../components/TodoCardList.vue';

</script>

<template>
    <div class="wrapper">
        <h1 class="title">Todos <span class="title-underline"></span></h1>
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
h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    color: rgb(0, 0, 0);
    text-shadow: 0 0 2px rgb(255, 255, 255);
    font-size: 3rem;
    text-align: center;
}

.add-todo-wrapper {
    display: flex;
    padding: 1.2rem 5rem;
}

@media screen and (width < 768px) {
    .add-todo-wrapper {
        padding: 1.2rem 2rem;
    }
    
}
</style>
