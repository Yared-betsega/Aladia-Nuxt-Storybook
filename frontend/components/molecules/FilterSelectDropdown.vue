<template>
  <div class="flex justify-center gap-4">
    <Label forId="Select" text="Genre"></Label>
    <Select id="Select" :states="props.states"> </Select>
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
