export const state = () => ({
  shops: [],
})

export const mutations = {
  getAllShops(state, shops) {
    state.shops = shops
  },
}

export const actions = {
  async fetchAllShops({ commit }) {
    await this.$axios
      .get(
        `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}&keyword=${this.freeWord}`,
        {
          params: {
            format: 'json',
          },
        }
      )
      .then((data) => {
        const allShops = data.data.results.shop
        commit('getAllShops', allShops)
      })
  },
}

export const getters = {
  getRamenStore: (state) => {
    return state.shops.filter((obj) => obj.shops.length < 10)
  },
}
