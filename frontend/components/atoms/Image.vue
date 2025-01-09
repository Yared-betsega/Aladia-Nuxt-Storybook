<template>
  <img :src="src" :alt="alt" :class="imageClass" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: "Product",
    },
  },
  computed: {
    imageClass() {
      return {
        "h-52 object-contain": this.variant === "Product",
        "h-10 md:h-14 2xl:h-20 object-contain": this.variant === "Logo",
      };
    },
  },
};
</script>
