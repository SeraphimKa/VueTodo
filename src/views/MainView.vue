<script setup lang="ts">
//components
import AddTodo from '../components/AddTodo.vue';
import TodoCardList from '../components/TodoCardList.vue';

</script>

<template>
    <div class="wrapper">
        <main>
            <div class="add-todo-wrapper">
                <AddTodo />
            </div>
            <TodoCardList />
        </main>
    </div>
</template>

<style scoped>
.add-todo-wrapper {
    padding: 1.2rem 5rem;
    width: auto;
}

</style>
