<template>
  <div class="flex flex-col">
    <Heading
      :text="title"
      size="lg"
      heading-class="text-white  font-bold mb-2"
    />
    <Text class="text-sm text-gray-600">{{ author }}</Text>
    <Text class="text-sm text-gray-600">{{ description }}</Text>
    <GenreList :genres="genres" />
    <Button class="text-sm text-gray-600">Add to Cart ${{ price }}</Button>
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
    author: {
      type: String,
      required: true,
    },
    genres: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
