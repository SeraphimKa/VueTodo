
<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { useTodosStore } from '../stores/todos'
 
const todosStore = useTodosStore()

const hasLocalStorage = (localStorage.getItem('todos') ? true : false)

const mounted = ref(false)


onMounted (() => {
    if (hasLocalStorage) {
    todosStore.todos = JSON.parse(localStorage.getItem('todos') as string)

    mounted.value = true
    }
})

watchEffect(() => {
    if (mounted.value === true) {
        localStorage.setItem('todos', JSON.stringify(todosStore.todos))
    }
})


</script>