<template>
  <div class="flex flex-col">
    <Heading
      :text="title"
      size="lg"
      heading-class="text-white text-xl font-bold mb-2"
    />
    <Text class="text-sm text-gray-600">{{ description }}</Text>
    <Text class="text-lg font-semibold">${{ price }}</Text>
  </div>
</template>

<script>
import Text from "../atoms/Text.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
