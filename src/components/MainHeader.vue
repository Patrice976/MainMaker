<script setup lang="ts"></script>

<template>
  <header>
    <router-link to="/"><img src="/img/logo.png" alt="logo MainMaker" /></router-link>
    <nav>
      <ul>
        <li><router-link to="/GodsList">Personnages</router-link></li>
        <li><router-link to="#">Stat</router-link></li>
        <li><router-link to="#">Autre jeux</router-link></li>
        <li><router-link to="#">Contact</router-link></li>
      </ul>
    </nav>
    <button>Connexion</button>
  </header>
</template>

<style scoped lang="scss">
header {
  background: linear-gradient(to bottom, $main-color, $lightbg-color);
  display: flex;
  padding-inline: 3rem;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  nav {
    ul {
      display: flex;
      gap: 2rem;
      align-items: center;
      width: 100%;
    }
  }
  img {
    width: auto;
    height: 80px;
  }
}
</style>
