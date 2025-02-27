<!-- src/components/layout/DefaultLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <BasicHeader />
    <BasicContainer class="flex-grow">
      <slot />
    </BasicContainer>
    <BasicFooter />
  </div>
</template>

<script setup>
import BasicHeader from './BasicHeader.vue'
import BasicContainer from './BasicContainer.vue'
import BasicFooter from './BasicFooter.vue'
</script>
