<template>
  <div>
    <Dashboard>
      <div v-if="loading" class="min-h-screen">
        <Loading />
      </div>
      <ProductList v-else :products="filteredProducts"></ProductList>
    </Dashboard>
  </div>
</template>

<script setup lang="ts">
const products = ref([]);
const categorySelected = ref("");
const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    const response = await fetch("https://fakestoreapi.com/products");
    products.value = await response.json();
    loading.value = false;
    console.log(products.value);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

const filteredProducts = computed(() => {
  if (!categorySelected.value) {
    return products.value;
  }
  return products.value.filter(
    (product) => product.category === categorySelected.value
  );
});
</script>
