const search = {
  async fetchShopsFilterByFreeWord({ commit }, freeWord) {
    await this.$axios
      .get(
        `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}&keyword=${freeWord}`,
        {
          params: {
            format: 'json',
          },
        }
      )
      .then((data) => {
        const result = data.data.results.shop
        commit('shopsFilterByFreeWord', result)
      })
  },
}

module.exports = search
