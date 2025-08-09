import type { TreeLeaf } from '@/types/TreeLeaf.ts'

export interface TreeNode extends TreeLeaf {
  cat?: TreeNode[] | TreeNode
  leaf?: TreeLeaf[]
  isOpen?: boolean
}
