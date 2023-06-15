
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNotesStore } from '../stores/notes';

const notesStore = useNotesStore();

const notesText = ref('')

let timeout: number

onMounted(() => {
    notesText.value = notesStore.notes
})


const handleTyping = () => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        notesStore.notes = notesText.value
    }, 500)
}
</script>

<template>
    <form name="notes-form">
        <textarea v-model="notesText" name="notes" form="notes-form" id="notes" cols="30" rows="10" @keyup="handleTyping"
            autocapitalize="sentences" spellcheck="false" />
    </form>
</template>


<style scoped>
form {

    position: sticky;
    display: flex;
    width: 100%;
    height: 500px;
    background: rgb(92, 189, 181);
    padding: 15px;
    border-radius: 15px;
}

textarea {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    text-overflow: hidden;
    resize: none;
}
</style>