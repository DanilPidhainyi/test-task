<template>
  <default-layout>
    <div class="container">
      <div class="tree-wrapper">
        <tree
          :tree="treeNode"
          @update:tree="updateTreeNode"
        />
      </div>
      <div class="list-wrapper">
        <list />
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
  import type { TreeNode } from '@/types/TreeNode.ts'

  const store = useStore()
  const treeNode = computed(() => store.state.treeStore.tree)
  const updateTreeNode = (node: TreeNode) => {
    store.dispatch(treeStoreAction.setTree, node)
  }
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
