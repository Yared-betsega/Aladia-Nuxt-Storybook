<template>
  <div :class="card">
    <NavLink href="/">
      <div :class="cardClass">
        <div class="w-full flex justify-center">
          <Image :src="book.imageUrl" :alt="book.title" variant="Product" />
        </div>
        <div class="h-[50%]">
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
  </div>
</template>

<script>
import NavLink from "../atoms/NavLink.vue";
export default {
  props: {
    display: {
      type: String,
      default: "inline",
    },
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cardClass() {
      return {
        "h-full p-24 flex justify-between": this.display === "block",
        "h-full p-4 flex flex-col justify-between": this.display === "inline",
      };
    },

    card() {
      return {
        "sm:w-[40%] lg:w-[30%] 2xl:w-[23%] max-w-100 h-100 border rounded-lg shadow m-2 transform transition-transform duration-300 hover:scale-105":
          this.display === "inline",
        "sm:w-[40%] lg:w-[30%] 2xl:w-[23%] h-100 border rounded-lg shadow m-2 transform transition-transform duration-300 hover:scale-105":
          this.display === "block",
      };
    },
  },
};
</script>
