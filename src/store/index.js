import Vue from 'vue'
import Vuex from 'vuex'
import User from "./user/account"
import List from "./list/pagination"
import Messages from "./messages/pagination"
import Query from "./query/query"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      user: User,
      list: List,
      messages: Messages,
      query: Query
  }
})
