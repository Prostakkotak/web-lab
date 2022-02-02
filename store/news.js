import Vuex from 'vuex';

export const state = () => ({
  newsList: []
})

export const getters = {}

export const mutations = {
  SET_NEWS_LIST(state, payload) {
    state.newsList = payload
  }
}

export const actions = {
  async getNews({
    commit
  }) {
    const data = await this.$axios.$get("/api/articles/")
    commit("SET_NEWS_LIST", data)
  },
  getArticleComments(_, id) {
    return this.$axios.$get(`/api/articles/${id}/comments`)
  },
  addArticleComment(_, {id, user_name, comment}) {
      return this.$axios.$post(`/api/articles/${id}/comments`, {
          user_name, comment
      })
  }
}
