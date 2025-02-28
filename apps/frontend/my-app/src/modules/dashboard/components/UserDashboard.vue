<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store';
import { Button, Card, Input } from '@repo/ui'


const authStore = useAuthStore();
</script>

<template>
  <div>
    <h1 class="text-2xl">Dashboard</h1>
    <p>Welcome, {{ authStore.user?.email || 'Guest' }}</p>
  </div>
  <div>
    <h1>Shared Components</h1>
    <Button variant="primary" size="md">Primary Button</Button>
    <Button variant="danger" size="lg" disabled>Danger Button</Button>

    <Input 
     variant="outlined"
     size="lg"
     placeholder="Enter you name"
    />

    <Card variant="shadow" padding="lg">
      <template #header>
        <h2 class="text-xl font-bold">Welcome</h2>
      </template>
      <p>This is a card with shadow variant and large padding.</p>
      <template #footer>
        <button class="text-blue-600">Learn More</button>
      </template>
    </Card>
  </div>
</template>
