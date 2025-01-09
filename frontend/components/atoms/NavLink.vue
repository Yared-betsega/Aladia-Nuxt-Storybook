<template>
  <a :href="href" class="text-md">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>
