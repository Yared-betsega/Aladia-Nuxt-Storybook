<template>
  <div>
    <Dashboard :states="genres as string[]" :updateGenres="updateGenres">
      <div v-if="loading" class="min-h-screen">
        <Loading />
      </div>
      <ProductList v-else :books="filteredBooks"></ProductList>
    </Dashboard>
  </div>
</template>

<script setup lang="ts">
import mockBooks from "~/mock/books.json";
const books = ref([]);
const selectedGenres = ref<string[]>([]);

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

const updateGenres = (newGenres: string[]) => {
  selectedGenres.value = newGenres;
};

const filteredBooks = computed(() => {
  if (!selectedGenres.value.length) {
    return books.value;
  }
  return books.value.filter((book) => {
    if (book?.Genres) {
      return book?.Genres.some((genre: String) =>
        selectedGenres.value.includes(genre)
      );
    }
    return false;
  });
});

const genres = computed(() => {
  const genreSet = new Set();
  books.value.forEach((book) => {
    if (book?.Genres) {
      book?.Genres.forEach((genre: String) => {
        genreSet.add(genre);
      });
    }
  });
  return Array.from(genreSet);
});
</script>
