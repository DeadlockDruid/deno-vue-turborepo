<template>
    <input
      :class="computedClass"
      :disabled="disabled"
      v-bind="$attrs"
    />
  </template>
  
  <script setup lang="ts">
  import { computed, defineProps } from 'vue';
  
  const props = defineProps<{
    variant?: 'default' | 'outlined' | 'filled',
    size?: 'sm' | 'md' | 'lg',
    disabled?: boolean
  }>()
  
  const computedClass = computed(() => {
    const baseClasses = 'rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition';
    const variantClasses = {
      default: 'border border-gray-300 focus:ring-blue-500',
      outlined: 'border-2 border-gray-400 focus:ring-blue-500',
      filled: 'bg-gray-100 border-transparent focus:ring-blue-500'
    };
    const sizeClasses = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg'
    };
  
    return `${baseClasses} ${variantClasses[props.variant || 'default']} ${sizeClasses[props.size || 'md']}`;
  });
  </script>
  