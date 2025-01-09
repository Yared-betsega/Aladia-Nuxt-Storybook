<template>
  <div class="flex justify-center flex-wrap px-10 min-h-screen">
    <ProductCard
      v-for="book in books"
      :key="book.id"
      :book="book"
    />
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
};
</script>
