<template>
  <div class="tree">
    <section class="btns">
      <b-btn
        text="Expand"
        @click="onExpand"
      />
      <b-btn
        text="Collapse"
        @click="onCollapse"
      />
    </section>

    <tree-node
      :node="tree"
      :level="1"
      :current-item="currentItem"
      :selected-items="selectedItems"
      :open-nodes="openNodes"
      @update:selected-items="emit('update:selectedItems', $event)"
      @update:currentItem="emit('update:currentItem', $event)"
      @update:openNodes="emit('update:openNodes', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import TreeNode from '@/components/tree/TreeNode.vue'
  import type { TreeNode as TreeNodeType } from '@/types/TreeNode.ts'
  import BBtn from '@/components/BBtn.vue'
  import { findNodeById, getListChildrenNodes } from '@/components/tree/helpers.ts'

  interface Props {
    tree: TreeNodeType
    currentItem: string
    selectedItems: string[]
    openNodes: string[]
  }

  const props = defineProps<Props>()
  const emit = defineEmits([
    'update:currentItem',
    'update:selectedItems',
    'update:openNodes',
    //
  ])

  const onExpand = () => {
    const currentNode = findNodeById(props.currentItem, [props.tree])
    if (!currentNode) return null

    const children = getListChildrenNodes(currentNode)
    if (!children.length) return null

    emit('update:openNodes', [...new Set([...props.openNodes, ...children])])
  }

  const onCollapse = () => {
    const currentNode = findNodeById(props.currentItem, [props.tree])
    if (!currentNode) return null

    const children = getListChildrenNodes(currentNode)
    if (!children.length) return null

    emit(
      'update:openNodes',
      props.openNodes.filter(i => !children.includes(i)),
    )
  }
</script>

<style scoped lang="scss">
  .tree {
    width: 600px;
    min-width: max-content;
    height: 100%;
  }

  .btns {
    display: flex;
    gap: 16px;
    padding: 0 0 16px;
  }
</style>
