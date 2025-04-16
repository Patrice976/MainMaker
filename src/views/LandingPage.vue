<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
</script>

<template>
  <MainHeader />
  <main>
    <div class="main-content">
      <div class="title">
        <h2>Bienvenue sur</h2>
        <h1>MainMaker</h1>
      </div>
      <p>Le site qui t'aideras à trouver ton main et à briller dans tes jeux préférés.</p>
      <button>Choisis tes persos préféré</button>
      <button>Notes tes performances</button>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100dvh;
  width: auto;
  background-color: $lightbg-color;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 40%;
  overflow: hidden;
  background-image: url('/src/assets/img/SmiteLandingImg.webp');
  background-size: cover;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  img {
    height: 50%;
    width: auto;
    object-fit: cover;
  }
}
</style>
