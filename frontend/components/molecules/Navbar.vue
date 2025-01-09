<template>
  <div class="relative">
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-2 gap-4">
      <NavLink href="/dashboard">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/dashboard">Books</NavLink>
      <NavLink href="/dashboard">FAQ</NavLink>
    </nav>

    <button
      @click="isOpen = !isOpen"
      class="md:hidden flex items-center px-3 py-2  rounded text-gray-700 border-gray-700 hover:text-indigo-600 hover:border-indigo-600"
      aria-label="Toggle navigation"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>

    <!-- Mobile Navigation Menu -->
    <div
      v-if="isOpen"
      class="absolute top-full -right-1 z-50 bg-white shadow-lg rounded mt-3 md:hidden"
    >
      <nav class="flex flex-col space-y-2 p-4">
        <NavLink href="/dashboard">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/dashboard">Books</NavLink>
        <NavLink href="/dashboard">FAQ</NavLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const isOpen = ref(false);
</script>

<style scoped>
/* Optional: Add transition for smooth opening */
div[absolute] {
  transition: all 0.3s ease-in-out;
}
</style>
