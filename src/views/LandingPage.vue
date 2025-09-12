<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
import InteractionButton from '../components/InteractionButton.vue'
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
      <div class="stack-button">
        <a href="#choisir-personnages">
          <InteractionButton
            text="Choisis tes persos préféré"
            btnId="perso"
            @pointerenter="onEnter"
            @pointerleave="onLeave"
            @focus="onEnter"
            @blur="onLeave"
            class="interaction-button"
          />
        </a>
        <a href="#notes-performances">
          <InteractionButton
            text="Notes tes performances"
            btnId="perf"
            @pointerenter="onEnter"
            @pointerleave="onLeave"
            @focus="onEnter"
            @blur="onLeave"
            class="interaction-button"
          />
        </a>
      </div>
    </div>
    <div class="img-container">
      <img src="/src/assets/img/logo.png" alt="Smite logo" />
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
p {
  width: 60%;
}
.stack-button {
  margin: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
