<template>
  <p :class="buttonClass" @click="handleClick">
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    buttonClass() {
      return {
        "px-4 py-2 rounded transition-colors duration-300": true,
        "bg-blue-500 text-white hover:bg-blue-700": this.variant === "primary",
        "bg-gray-500 text-white hover:bg-gray-700":
          this.variant === "secondary",
        "bg-green-500 text-white hover:bg-green-700":
          this.variant === "success",
        "bg-red-500 text-white hover:bg-red-700": this.variant === "danger",
      };
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
