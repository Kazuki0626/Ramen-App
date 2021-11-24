const axios = require('axios')

const search = {
  isNull: () => null,
  ShopsName: () => {
    const name = { ramenshops: '麺匠 いし井 高田馬場' }
    return name
  },
  RamenShopsName: () => {
    axios
      .get(
        `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}`,
        {}
      )
      .then((shops) => shops.name)
  },
}

module.exports = search
