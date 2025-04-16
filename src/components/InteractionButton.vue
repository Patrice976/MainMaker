<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="interaction-button">{{ text }}</button>
</template>

<style scoped lang="scss">
button {
  border-radius: 9999px;
  text-align: center;
  background: linear-gradient(to right, $accent-color, $main-color);
  border: none;
  padding: 1rem;
  width: 200px;
  color: $contrast-txt-color;
}
</style>
