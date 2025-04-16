<script setup lang="ts"></script>

<template>
  <header>
    <img src="/src/assets/img/logo.png" alt="logo MainMaker" />
    <nav>
      <ul>
        <li><a href="#">Personnages</a></li>
        <li><a href="#">Stat</a></li>
        <li><a href="#">Autre jeux</a></li>
        <li><a href="#">Contact</a></li>
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
    height: 100%;
  }
}
</style>
