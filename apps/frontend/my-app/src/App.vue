<script setup lang="ts">
import { RouterView } from 'vue-router'
<<<<<<< HEAD
import '@repo/ui/styles.css'
import DefaultLayout from './components/layout/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<style scoped></style>
=======
import AppNavbar from '@/components/AppNavbar.vue';
</script>

<template>
  <header>
    <AppNavbar />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
>>>>>>> d04ade7 (Add frontend boilerplate in monorepo)
