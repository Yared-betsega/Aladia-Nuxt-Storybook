<template>
  <NavLink
    href="/"
    class="sm:w-[40%] lg:w-[30%] 2xl:w-[23%] h-100 border rounded-lg shadow m-2 transform transition-transform duration-300 hover:scale-105"
  >
    <div class="h-full p-4 flex flex-col justify-between">
      <div class="w-full flex justify-center">
        <Image :src="book.imageUrl" :alt="book.title" variant="Product" />
      </div>
      <div class="self-end ">
        <ProductDetails
          :title="book?.title"
          :description="book?.description"
          :author="book?.Author"
          :price="book?.price"
          :genres="book?.Genres"
        ></ProductDetails>
      </div>
    </div>
  </NavLink>
</template>

<script>
import NavLink from "../atoms/NavLink.vue";
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>
