
<script setup lang="ts">
import NotesForm from '../components/NotesForm.vue';
</script>
<template>
    <div class="wrapper">
        <h1 class="title">Notes <span class="title-underline"></span></h1>
        <main>
            <div class="note-wrapper">
                <NotesForm />
            </div>
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
</style>