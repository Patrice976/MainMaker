<script setup lang="ts">
const props = defineProps({
  god: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <img class="god_img_background" :src="props.god.godImg" alt="" />
    <h1 class="god_name">{{ props.god.name }}</h1>
    <img class="pantheon_logo" :src="props.god.pantheonImg" alt="" />
    <h2 class="god_title">{{ props.god.title }}</h2>
  </div>
</template>

<style scoped lang="scss">
div {
  margin: 5rem;
  display: flex;
  height: 300px;
  width: 200px;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(props.god.godImg);
}

h1 {
  margin: 0.5rem;
  text-align: center;
  font-size: 2.5cap;
  color: $contrast-txt-color;
  text-shadow: 2px 2px 4px #000000;
}
h2 {
  margin: 0.5rem;
  text-align: center;
  color: $contrast-txt-color;
  text-shadow: 2px 2px 4px #000000;
  font-size: 1rem;
}
.pantheon_logo {
  height: 30px;
  width: 30px;
  align-self: center;
}
.god_img_background {
  position: absolute;
  height: 300px;
  width: 200px;
  object-fit: cover;
  border-radius: 20px;
  filter: brightness(0.5);
  z-index: -1;
}
</style>
