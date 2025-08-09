import type { TreeNode as TreeNodeType } from '@/types/TreeNode.ts'

/**
 * if cat is object convert to array
 * */
export const normalizeTree = (node): TreeNodeType => {
  const n = node

  let children: TreeNodeType[] | undefined = undefined

  if (n.cat) {
    if (Array.isArray(n.cat)) {
      children = n.cat.map(normalizeTree)
    } else {
      children = [normalizeTree(n.cat)]
    }
  }

  return {
    ...n,
    ...(children ? { cat: children } : {}),
  }
}

export const findNodeById = (nodeId: string, nodes: TreeNodeType[]): TreeNodeType | null => {
  for (const node of nodes) {
    if (node._nodeId === nodeId) return node
    if (node.cat) {
      const found = findNodeById(nodeId, node.cat)
      if (found) return found
    }
    if (node.leaf) {
      for (const leaf of node.leaf) {
        if (leaf._nodeId === nodeId) return leaf
      }
    }
  }
  return null
}

export const getListChildrenNodes = (node: TreeNodeType): string[] => {
  let ids = [node._nodeId]
  if (node.cat) {
    for (const child of node.cat) {
      ids = ids.concat(getListChildrenNodes(child))
    }
  }
  return ids
}

export const findPathToNode = (nodeId: string, nodes: TreeNodeType[]): string[] => {
  for (const node of nodes) {
    if (node._nodeId === nodeId) {
      return [node._nodeId]
    }
    if (node.cat) {
      const path = findPathToNode(nodeId, node.cat)
      if (path.length) {
        return [node._nodeId, ...path]
      }
    }

    if (node.leaf) {
      const path = findPathToNode(nodeId, node.leaf)
      if (path.length) {
        return [node._nodeId, ...path]
      }
    }
  }
  return []
}
