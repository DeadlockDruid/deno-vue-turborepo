<!-- src/components/layout/DefaultLayout.vue -->
<template>
  <div>
    <BasicHeader />
    <BasicContainer>
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
