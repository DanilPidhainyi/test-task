import tree from '@/tree.json'
import type { TreeNode } from '@/types/TreeNode.ts'

export const treeStoreAction = {
  setTree: '[tree] setTree',
}

interface State {
  tree: TreeNode
}

const state = {
  tree: tree.tree.cat,
}

const mutations = {
  treeMutationSetTree(state: State, tree: TreeNode) {
    state.tree = tree
  },
}

const actions = {
  [treeStoreAction.setTree]({ commit }, tree: TreeNode) {
    commit('treeMutationSetTree', tree)
  },
}

export default {
  state,
  mutations,
  actions,
}
