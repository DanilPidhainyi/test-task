<template>
  <default-layout>
    <div class="container">
      <div class="tree-wrapper">
        <tree
          :tree="nodes"
          :current-item="currentItem"
          :selected-items="selectedItems"
          :open-nodes="openNodes"
          @update:current-item="store.dispatch(treeStoreAction.setCurrentItem, $event)"
          @update:selected-items="store.dispatch(treeStoreAction.setSelectedItem, $event)"
          @update:open-nodes="store.dispatch(treeStoreAction.setOpenNodes, $event)"
        />
      </div>
      <div class="list-wrapper">
        <list
          :selected-items="selectedItems"
          :tree="nodes"
          @update:selected-items="store.dispatch(treeStoreAction.setSelectedItem, $event)"
        />
      </div>
    </div>
  </default-layout>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'
  import { treeStoreAction } from '@/store/modules/tree.ts'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import Tree from '@/components/tree/Tree.vue'
  import List from '@/components/list/List.vue'
  import { computed } from 'vue'
  import tree from '@/tree.json'
  import { normalizeTree } from '@/components/tree/helpers.ts'

  const nodes = normalizeTree(tree.tree.cat)

  const store = useStore()
  const currentItem = computed(() => store.state.treeStore.currentItem)
  const selectedItems = computed(() => store.state.treeStore.selectedItems)
  const openNodes = computed(() => store.state.treeStore.openNodes)

  // const updateTreeNode = (node: TreeNode) => {
  //   store.dispatch(treeStoreAction.setTree, node)
  // }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    display: grid;
    border-radius: 16px;
    overflow: hidden;
    grid-template-columns: max-content 1fr;
    background-color: #1e1f22;
  }

  .tree-wrapper {
    background-color: #2b2d30;
    padding: 24px 12px;
  }

  .list-wrapper {
    padding: 24px 12px;
  }
</style>
