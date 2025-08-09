<template>
  <div class="tree">
    <tree-node
      :level="1"
      :next-step="true"
    />
  </div>
</template>

<script setup lang="ts">
  import TreeNode from '@/components/tree/TreeNode.vue'
</script>

<style scoped lang="scss">
  .tree {
    width: 700px;
    height: 100%;
  }
</style>
