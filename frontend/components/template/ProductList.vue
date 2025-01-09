<template>
  <div class="flex justify-center flex-wrap px-10 min-h-screen">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
