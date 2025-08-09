const state = {}

const mutations = {}

export const treeStoreAction = {
  setData: '[tree] setData',
}

const actions = {
  [treeStoreAction.setData]() {
    console.log('store')
  },
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
