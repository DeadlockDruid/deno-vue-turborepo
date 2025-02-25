<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import '@repo/ui/styles.css';

</script>

<template>
  <header>
    <AppNavbar />
  </header>

  <RouterView />
</template>

<style scoped></style>
