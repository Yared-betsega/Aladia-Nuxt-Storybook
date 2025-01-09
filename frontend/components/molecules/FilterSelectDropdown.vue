<template>
  <div class="flex justify-center gap-4">
    <Select id="Select" :states="props.states" :updateGenres="props.updateGenres"> </Select>
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
