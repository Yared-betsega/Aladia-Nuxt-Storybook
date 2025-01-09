<template>
  <div>
    <FilterSelectDropdown :states="props.states" :updateGenres="props.updateGenres"></FilterSelectDropdown>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    states: string[];
    updateGenres: (newGenres: string[]) => void;
  }>(),
  {
    states: () => [],
  }
);
</script>
