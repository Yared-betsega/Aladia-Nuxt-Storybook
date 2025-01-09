<template>
  <NavLink
    href="/"
    class="sm:w-[40%] lg:w-[30%] 2xl:w-[23%] h-96 border rounded-lg shadow m-2 transform transition-transform duration-300 hover:scale-105"
  >
    <div class="h-full p-4 flex flex-col justify-between">
      <div class="w-full flex justify-center">
        <Image :src="product.image" alt="product.name" variant="Product" />
      </div>
      <div class="self-end ">
        <ProductDetails
          :title="product.title"
          :description="product.description"
          :price="product.price"
        ></ProductDetails>
      </div>
    </div>
  </NavLink>
</template>

<script>
import NavLink from "../atoms/NavLink.vue";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
