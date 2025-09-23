<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
import GodShowcase from '../components/GodShowcase.vue'
import { gods } from '../assets/data/gods.json'
</script>

<template>
  <MainHeader />
  <h1>God List</h1>
  <div class="gods_template">
    <GodShowcase v-for="god in gods" :key="god.id" :god="god" />
  </div>
</template>

<style lang="scss">
h1 {
  margin: 3rem;
  text-align: center;
  text-shadow: 3px 4px 5px $accent-color;
}
.gods_template {
  display: flex;
  flex-direction: row;
}
</style>
