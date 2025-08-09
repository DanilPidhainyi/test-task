<template>
  <ul class="list">
    <list-item />
    <list-item />
    <list-item />
    <list-item />
  </ul>
</template>

<script setup lang="ts">
  import ListItem from '@/components/list/ListItem.vue'
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-direction: column;
    width: 500px;
  }
</style>
