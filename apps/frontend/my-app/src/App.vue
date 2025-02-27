<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@repo/ui/styles.css'
import PaginationAndInfiniteScroll from './components/PaginationAndInfiniteScroll.vue'
import DefaultLayout from './components/layout/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <PaginationAndInfiniteScroll />
    <RouterView />
  </DefaultLayout>
</template>

<style scoped></style>
