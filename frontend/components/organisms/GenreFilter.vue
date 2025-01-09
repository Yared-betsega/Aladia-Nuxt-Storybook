<template>
  <div>
    <FilterSelectDropdown :states="props.states"></FilterSelectDropdown>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    states: string[];
  }>(),
  {
    states: () => [],
  }
);
</script>
