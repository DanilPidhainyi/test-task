<template>
  <ul class="list">
    <list-item
      v-for="node in nodes"
      :key="node._nodeId"
      :text="node._name"
      @click="onRemove(node._nodeId)"
    />
  </ul>
</template>

<script setup lang="ts">
  import ListItem from '@/components/list/ListItem.vue'
  import type { TreeNode } from '@/types/TreeNode.ts'
  import { computed } from 'vue'
  import { findNodeById } from '@/components/tree/helpers.ts'

  interface Props {
    selectedItems: string[]
    tree: TreeNode
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['update:selected-items'])

  const nodes = computed(() => props.selectedItems.map(e => findNodeById(e, [props.tree])).filter(Boolean))

  const onRemove = (nodeId: string) => {
    emit(
      'update:selected-items',
      props.selectedItems.filter(id => id !== nodeId),
    )
  }
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    gap: 4px;
  }
</style>
