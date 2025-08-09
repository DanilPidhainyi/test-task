<template>
  <ul
    class="tree-node"
    :data-level="level"
    :style="{ '--level': level }"
  >
    <li
      class="tree-node__title"
      :class="{ 'tree-node__title--open': node.isOpen }"
      @click="onUpdateIsOpen"
    >
      <icon-arrow class="tree-node__icon" />
      <p class="tree-node__title-text">
        {{ node._name }}
      </p>
    </li>
    <ul
      v-if="node.isOpen"
      class="tree-node__items"
    >
      <template v-if="node.cat && Array.isArray(node.cat)">
        <tree-node
          v-for="(cat, i) in node.cat"
          :key="cat._nodeId"
          :node="cat"
          :level="level + 1"
          @update:node="onUpdateNodeByIndex(i, $event)"
        />
      </template>

      <template v-if="node.cat && !Array.isArray(node.cat)">
        <tree-node
          :node="node.cat"
          :level="level + 1"
          @update:node="onUpdateNode"
        />
      </template>

      <template v-if="node.leaf?.length">
        <li
          v-for="item in node?.leaf"
          class="tree-node__item"
        >
          {{ item?._name }}
        </li>
      </template>
    </ul>
  </ul>
</template>

<script setup lang="ts">
  import type { TreeNode as TreeNodeType } from '@/types/TreeNode.ts'
  import IconArrow from '@/components/tree/IconArrow.vue'

  interface Props {
    node: TreeNodeType
    level: number
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['update:node'])

  const onUpdateIsOpen = () => {
    emit('update:node', { ...props.node, isOpen: !props.node.isOpen })
  }

  const onUpdateNode = (event: TreeNodeType) => {
    emit('update:node', { ...props.node, cat: event })
  }

  const onUpdateNodeByIndex = (index: number, event: TreeNodeType) => {
    const cat = props.node.cat as TreeNodeType[]
    cat[index] = event
    emit('update:node', { ...props.node, cat })
  }
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
