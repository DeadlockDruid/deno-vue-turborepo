<template>
  <div class="flex space-x-4 p-4">
    <!-- Pagination Section -->
    <div class="w-1/2 h-screen overflow-y-auto border-r border-gray-300 pr-4">
      <h1 class="text-2xl font-bold mb-4 text-center">Pagination</h1>
      <PaginationExample />
    </div>

    <div class="w-1/2 h-screen overflow-y-auto pl-4">
      <h1 class="text-2xl font-bold mb-4 text-center">Infinite Scrolling</h1>
      <InfiniteScrollExample />
    </div>
  </div>
</template>

<script setup lang="ts">
import InfiniteScrollExample from './InfiniteScrollExample.vue';
import PaginationExample from './PaginationExample.vue';
</script>
