<template>
  <div class="flex gap-2 py-2 flex-wrap">
    <Genre v-for="genre in genres" :key="genre" :text="genre"></Genre>
  </div>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array,
      required: true,
    },
  },
};
</script>
