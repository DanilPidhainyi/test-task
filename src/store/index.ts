import { createStore } from 'vuex'
import tree from '@/store/modules/tree'

const store = createStore({
  modules: {
    treeStore: tree,
  },
})

export default store
