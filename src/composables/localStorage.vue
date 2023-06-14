
<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useTodosStore } from '../stores/todos'
import { useNotesStore } from '../stores/notes';
const todosStore = useTodosStore()
const notesStore = useNotesStore()

const todoLocalStorage = (localStorage.getItem('todos') ? true : false)
const noteLocalStorage = (localStorage.getItem('notes') ? true : false)

const mounted = ref(false)


onMounted(() => {
    if (todoLocalStorage) {
        todosStore.todos = JSON.parse(localStorage.getItem('todos') as string)
    }
    if (noteLocalStorage) {
        notesStore.notes = JSON.parse(localStorage.getItem('notes') as string)
    }
    mounted.value = true
})

watchEffect(() => {
    if (mounted.value === true) {
        localStorage.setItem('todos', JSON.stringify(todosStore.todos)),
        localStorage.setItem('notes', JSON.stringify(notesStore.notes))
    }
})
</script>

<template>
    <div v-if="!mounted" class="loading">
        Loading...
    </div>
</template>

<style scoped>
.loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    inset: 0;
    font-size: 5rem;
    color: rgb(173, 173, 173);
    background-color: rgb(51, 53, 54);
}
</style>