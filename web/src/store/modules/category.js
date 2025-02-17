import category from '../../api/category'

const state = {
  // 分类列表
  categoryList: []
}

const mutations = {
  // 设置分类列表
  SET_CATEGORY_LIST(state, list) {
    state.categoryList = list
  }
}

const actions = {

  /**
   * 获取分类列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async list({ state, commit }, params) {
    let res = await category.list(params)
    commit('SET_CATEGORY_LIST', res.data.data)
    return res
  },

  /**
   * 查询分类ID下的所有文章列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getCategoryArticle({ state, commit }, id) {
    const r = await category.article(id)
    return r
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
