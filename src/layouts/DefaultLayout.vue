<template>
  <main class="page-layout">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss">
  @use '@/assets/base.css';

  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
    min-height: 100vh;
    display: flex;

    .page-layout {
      flex: 1 1 auto;
      margin: 10vh 0;
      display: flex;
    }
  }
</style>
