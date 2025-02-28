<template>
    <div :class="computedClass">
      <slot name="header" />
      <div class="p-4">
        <slot />
      </div>
      <slot name="footer" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps } from 'vue';
  
  const props = defineProps<{
    variant?: 'default' | 'outlined' | 'shadow',
    padding?: 'sm' | 'md' | 'lg'
  }>()
  
  const computedClass = computed(() => {
    const baseClasses = 'rounded-md overflow-hidden transition';
    const variantClasses = {
      default: 'bg-white border border-gray-200',
      outlined: 'border-2 border-gray-300',
      shadow: 'shadow-md'
    };
    const paddingClasses = {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6'
    };
  
    return `${baseClasses} ${variantClasses[props.variant || 'default']} ${paddingClasses[props.padding || 'md']}`;
  });
  </script>
  