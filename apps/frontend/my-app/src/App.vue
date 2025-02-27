<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@repo/ui/styles.css'
import DefaultLayout from './components/layout/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<style scoped></style>
