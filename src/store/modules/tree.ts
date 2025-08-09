import tree from '@/tree.json'
import type { TreeNode } from '@/types/TreeNode.ts'

export const treeStoreAction = {
  setCurrentItem: '[tree] setCurrentItem',
  setSelectedItem: '[tree] setSelectedItem',
  setOpenNodes: '[tree] setOpenNodes',
}

interface State {
  currentItem: string
  selectedItems: string[]
  openNodes: string[]
}

const state = {
  currentItem: '1',
  selectedItems: [],
  openNodes: ['1'],
}

const mutations = {
  setCurrentItem(state: State, n: string) {
    state.currentItem = n
  },

  setSelectedItem(state: State, n: string[]) {
    state.selectedItems = n
  },

  setOpenNodes(state: State, n: string[]) {
    state.openNodes = n
  },
}

const actions = {
  [treeStoreAction.setCurrentItem]({ commit }, n: string) {
    commit('setCurrentItem', n)
    // todo add localStorage for current item
  },

  [treeStoreAction.setSelectedItem]({ commit }, n: string) {
    commit('setSelectedItem', n)
    // todo add localStorage for current item
  },

  [treeStoreAction.setOpenNodes]({ commit }, n: string) {
    commit('setOpenNodes', n)
  },
}

export default {
  state,
  mutations,
  actions,
}
