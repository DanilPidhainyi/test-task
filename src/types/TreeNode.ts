import type { TreeLeaf } from '@/types/TreeLeaf.ts'

export interface TreeNode extends TreeLeaf {
  cat?: TreeNode[]
  leaf?: TreeLeaf[]
}
