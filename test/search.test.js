const search = require('../pages/search/index')

test('search function exists', () => {
  expect(search).toBeDefined()
})

const searchCheck = () => console.log('searchCheck....')

describe('Checking RamenShopName', () => {
  beforeEach(() => searchCheck())

  test('RamenShopName is 麺匠 いし井 高田馬場', () => {
    const RamenShopName = '麺匠 いし井 高田馬場'
    expect(RamenShopName).toBe('麺匠 いし井 高田馬場')
  })

  test('RamenShopName is 博多ラーメン 長浜や 笹塚店', () => {
    const RamenShopName = '博多ラーメン 長浜や 笹塚店'
    expect(RamenShopName).toBe('博多ラーメン 長浜や 笹塚店')
  })
})