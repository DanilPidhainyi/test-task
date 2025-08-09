<template>
  <ul
    class="tree-node"
    :data-level="level"
    :style="{ '--level': level }"
  >
    <li
      class="tree-node__title"
      :class="{ 'tree-node__title--open': open }"
      @click="open = !open"
    >
      <icon-arrow class="tree-node__icon" />
      <p class="tree-node__title-text">Title List</p>
    </li>
    <ul
      v-if="open"
      class="tree-node__items"
    >
      <tree-node
        v-if="nextStep"
        :level="level + 1"
        :next-step="false"
        class="item"
      />
      <tree-node
        v-if="nextStep"
        :level="level + 1"
        :next-step="false"
        class="item"
      />
      <li class="tree-node__item item">Item</li>
      <li class="tree-node__item item">Item</li>
    </ul>
  </ul>
</template>

<script setup lang="ts">
  import IconArrow from '@/components/tree/IconArrow.vue'
  import { ref } from 'vue'

  const props = withDefaults(
    defineProps<{
      level?: number
      nextStep?: boolean
    }>(),
    { level: 1, nextStep: false },
  )

  const open = ref(true)
</script>

<style scoped lang="scss">
  .tree-node {
    list-style-type: none;
    width: 100%;
    padding-left: 0;
    --step: 20px;
    --icon-width: 16px;
  }

  .tree-node__title {
    color: var(--color-text);
    padding-left: calc(var(--step) * (var(--level)));
    padding-top: 2px;
    padding-bottom: 2px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    gap: 4px;
  }

  .tree-node__title:hover {
    background-color: #34495e;
  }

  .tree-node__title--open .tree-node__icon {
    rotate: 90deg;
  }

  .tree-node__icon {
    width: var(--icon-width);
    transition: rotate 0.2s;
  }

  .tree-node__items {
    list-style-type: none;
    padding: 4px 0;
    position: relative;
  }

  .tree-node__items:before {
    position: absolute;
    content: '';
    width: 1px;
    height: calc(100% - 8px);
    background-color: var(--color-secondary-text);
    margin: auto 0;
    left: calc((var(--step) * (var(--level))) + var(--icon-width) / 2 - 0.5px);
  }

  .tree-node__item {
    width: 100%;
    border-radius: 4px;
    padding-left: calc(var(--step) * (var(--level) + 1));
    color: var(--color-secondary-text);
  }

  .tree-node__item:hover {
    background-color: #2c3e50;
  }
</style>
