<template>
    <label :for="forId" :class="labelClass">{{ text }}</label>
</template>

<script setup>
const props = defineProps({
    forId: { type: String, required: true },
    text: { type: String, required: true },
    labelClass: { type: String, default: 'font-medium text-gray-700 mb-2' },
});
</script>