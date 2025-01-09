<template>
  <div class="flex items-center justify-center">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
