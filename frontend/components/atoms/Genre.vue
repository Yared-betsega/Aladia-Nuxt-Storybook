<template>
  <p class="bg-gray-200 px-2 text-xs text-gray-700 rounded-md inline">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
