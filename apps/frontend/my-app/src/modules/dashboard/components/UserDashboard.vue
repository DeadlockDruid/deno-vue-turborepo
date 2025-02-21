<script setup lang="ts">
<<<<<<< HEAD
import PaginationAndInfiniteScroll from '@/components/PaginationAndInfiniteScroll.vue';


</script>

<template>
  <PaginationAndInfiniteScroll />
=======
import { useAuthStore } from '@/modules/auth/store';

const authStore = useAuthStore();
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ authStore.user?.email || 'Guest' }}</p>
  </div>
>>>>>>> d04ade7 (Add frontend boilerplate in monorepo)
</template>
