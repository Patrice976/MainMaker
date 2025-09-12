<script lang="ts" setup>
const event = defineEmits<{
  (e: 'mousehover', id?: string): void
  (e: 'mouseout', id?: string): void
}>()
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  btnId: {
    type: String,
    required: false,
  },
})
function onEnter(): void {
  event('mousehover', props.btnId)
}
function onLeave(): void {
  event('mouseout', props.btnId)
}
</script>

<template>
  <button class="interaction-button" @mouseenter="onEnter" @mouseleave="onLeave">{{ text }}</button>
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

button:hover {
  background: linear-gradient(to left, $accent-color, $main-color);
}
</style>
