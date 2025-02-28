<template>
  <button
    :class="computedClass"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'danger',
  size?: 'sm' | 'md' | 'lg',
  disabled?: boolean
}>()

const computedClass = computed(() => {
  const baseClasses = 'rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition';
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  };
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return `${baseClasses} ${variantClasses[props.variant || 'primary']} ${sizeClasses[props.size || 'md']}`;
});
</script>
