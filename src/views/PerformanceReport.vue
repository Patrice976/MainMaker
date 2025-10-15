<script setup lang="ts">
import GodShowcase from '../components/GodShowcase.vue'
import { gods } from '../assets/data/gods.json'
</script>

<template>
  <h1>Comment s'est déroulé votre partie ?</h1>
  <h2>j'ai joué :</h2>
  <div class="gods_template">
    <GodShowcase v-for="god in gods" :key="god.id" :god="god" />
    <button>&gt;</button>
  </div>
</template>

<style scoped lang="scss">
h1 {
  margin: 3rem;
  text-align: center;
  text-shadow: 3px 4px 5px $accent-color;
}
h2 {
  margin: 1rem 3rem 0 3rem;
  font-size: 1.5rem;
}
.GodShowcase {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
