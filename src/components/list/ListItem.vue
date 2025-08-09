<template>
  <li class="list-item">
    <p class="list-item__text">
      {{ text }}
    </p>
    <icon-delete class="list-item__icon" />
  </li>
</template>

<script setup lang="ts">
  import IconDelete from '@/components/list/IconDelete.vue'

  defineProps<{
    text?: string
  }>()
</script>

<style scoped lang="scss">
  .list-item {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 4px 16px;
    border-radius: 8px;
  }

  .list-item:hover {
    background-color: #db5c5c;

    .list-item__icon {
      color: white !important;
    }
  }

  .list-item__text {
    color: white;
  }

  .list-item__icon {
    width: 20px;
    height: 20px;
    color: var(--color-secondary-text);
  }
</style>
