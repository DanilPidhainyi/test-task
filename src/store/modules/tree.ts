export const treeStoreAction = {
  setCurrentItem: '[tree] setCurrentItem',
  setSelectedItem: '[tree] setSelectedItem',
  setOpenNodes: '[tree] setOpenNodes',
  loadStateFromStorage: '[tree] loadStateFromStorage',
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
    localStorage.setItem('currentItem', JSON.stringify(n))
  },

  [treeStoreAction.setSelectedItem]({ commit }, n: string) {
    commit('setSelectedItem', n)
    localStorage.setItem('selectedItems', JSON.stringify(n))
  },

  [treeStoreAction.setOpenNodes]({ commit }, n: string) {
    commit('setOpenNodes', n)
  },

  [treeStoreAction.loadStateFromStorage]({ commit }) {
    const currentItem = localStorage.getItem('currentItem')
    if (currentItem) {
      commit('setCurrentItem', JSON.parse(currentItem))
    }

    const selectedItems = localStorage.getItem('selectedItems')
    if (selectedItems) {
      commit('setSelectedItem', JSON.parse(selectedItems))
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
