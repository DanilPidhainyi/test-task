<template>
  <div class="tree">
    <tree-node
      :node="tree"
      :level="1"
      @update:node="emit('update:tree', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import TreeNode from '@/components/tree/TreeNode.vue'
  import type { TreeNode as TreeNodeType } from '@/types/TreeNode.ts'

  defineProps<{ tree: TreeNodeType }>()
  const emit = defineEmits(['update:tree'])
</script>

<style scoped lang="scss">
  .tree {
    width: 700px;
    height: 100%;
  }
</style>
