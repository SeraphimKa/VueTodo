<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue'

import LocalStorage from './composables/LocalStorage.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <LocalStorage />
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>
