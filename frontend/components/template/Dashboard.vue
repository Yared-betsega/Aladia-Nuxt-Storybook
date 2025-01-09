<template>
  <div>
    <Header></Header>
    <div class="w-full flex justify-center">
      <GenreFilter :states="props.states" :updateGenres="props.updateGenres"></GenreFilter>
    </div>

    <slot></slot>

    <Footer></Footer>
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
