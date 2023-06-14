<script setup lang="ts">
//components
import ClearAllTodos from '../components/ClearAllTodos.vue';
import AddTodo from '../components/AddTodo.vue';
import TodoCardList from '../components/TodoCardList.vue';

</script>

<template>
    <div class="wrapper">
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
</style>
