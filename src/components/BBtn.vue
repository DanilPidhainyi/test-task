<template>
  <button class="base-button">
    <span class="base-button__text">
      {{ text }}
    </span>
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    text?: string
  }>()
</script>

<style scoped lang="scss">
  .base-button {
    border-radius: 4px;
    cursor: pointer;
    padding: 6px 15px;
    background-color: rgba(53, 115, 240, 0.8);
    border: none;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .base-button:hover {
    background-color: rgba(53, 115, 240, 1);
  }

  .base-button__text {
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    color: white;
  }
</style>
