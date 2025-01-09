<template>
  <div>
    <Dashboard :states="genres as string[]">
      <div v-if="loading" class="min-h-screen">
        <Loading />
      </div>
      <ProductList v-else :books="filteredProducts"></ProductList>
    </Dashboard>
  </div>
</template>

<script setup lang="ts">
import mockBooks from "~/mock/books.json";
const books = ref([]);
const categorySelected = ref("");
const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    books.value = mockBooks as [];
    loading.value = false;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

const filteredProducts = computed(() => {
  if (!categorySelected.value) {
    return books.value;
  }
  return books.value.filter(
    (product) => product["category"] === categorySelected.value
  );
});

const genres = computed(() => {
  const genreSet = new Set();
  books.value.forEach(book => {
    if (book.Genres) {
      book.Genres.forEach(genre => {
        genreSet.add(genre);
      });
    }
  });
  return Array.from(genreSet);
});

</script>
