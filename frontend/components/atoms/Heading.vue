<template>
  <h2 :class="headingClass">{{ text }}</h2>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  size: { type: String, default: 'md' },
});

const headingClass = computed(() => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  };
  return `${sizes[props.size]} font-semibold mb-2`;
});
</script>
