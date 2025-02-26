<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import '@repo/ui/styles.css';
import PaginationAndInfiniteScroll from './components/PaginationAndInfiniteScroll.vue';

</script>

<template>
  <header>
    <AppNavbar />
  </header>
  <PaginationAndInfiniteScroll />
  <RouterView />
</template>

<style scoped></style>
