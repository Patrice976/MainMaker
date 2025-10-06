<script setup lang="ts">
const props = defineProps({
  god: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <img class="god_img_background" :src="props.god.godImg" alt="" />
    <h1 class="god_name">{{ props.god.name }}</h1>
    <div class="banner_logo">
      <img class="pantheon_logo" :src="props.god.pantheonImg" alt="" />
    </div>
    <h2 class="god_title">{{ props.god.title }}</h2>
  </div>
</template>

<style scoped lang="scss">
.card {
  margin: 3rem;
  display: flex;
  height: 300px;
  width: 200px;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(props.god.godImg);
}

.card:hover {
  cursor: pointer;
  transform: scale(1.05);
  filter: brightness(2);
  transition: transform 0.2s ease-in-out;
}

.banner_logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner_logo::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 1rem;
  height: 1px;
  width: 0%;
  background: linear-gradient(to right, #58341f, #ffcc73);
}

.banner_logo::after {
  content: '';
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 1px;
  width: 0%;
  background: linear-gradient(to right, #ffcc73, #58341f);
}
.card:hover .banner_logo::after,
.card:hover .banner_logo::before {
  width: 30%;
  transition: width 0.5s ease-in-out;
}

h1 {
  margin: 0.5rem;
  text-align: center;
  font-size: 2rem;
  color: $lightbg-color;
  text-shadow: 2px 2px 4px #000000;
}
h2 {
  margin: 0.5rem;
  text-align: center;
  color: $lightbg-color;
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
.hide {
  display: none;
}
</style>
