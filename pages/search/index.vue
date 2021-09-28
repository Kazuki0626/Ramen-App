<template>
  <section class="search-top">
    <header class="header">
      <div class="header-top">
        <div class="header-top_content">
          <div class="header_head">
            <nuxt-link to="/search/">
              <div class="header_head_img">
                <img src="@/assets/img/sample-header.png" />
              </div>
            </nuxt-link>
          </div>
          <div class="header-btn">
            <div class="header-resister">
              <nuxt-link to="/resister/">
                <button type="button" class="header-resister-btn">
                  新規登録
                </button>
              </nuxt-link>
            </div>
            <div class="header-login">
              <nuxt-link to="/login/">
                <button type="button" class="header-login-btn">ログイン</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="header-heading">
        <div class="header-heading_img">
          <video src="@/assets/video/Ramen-App.mp4" loop autoplay muted></video>
        </div>
      </div>
    </header>
    <div class="search-about">
      <div class="search-about_content">
        <div class="search-about_head">
          <h1>Ramen App とは ?</h1>
        </div>
        <div class="search-about_text">
          <p>
            飲食店探しにぴったり!!!多種多様な飲食店から自分にマッチした飲食店を探すことができるWebサービス!!!
          </p>
        </div>
      </div>
      <div class="search-problem text-center">
        <h1>飲食店探しで悩んだことはありませんか？</h1>
      </div>
    </div>
    <div class="search-free">
      <div class="search-free_content">
        <div class="search-free_head">
          <h1>フリーワード検索</h1>
        </div>
        <div class="search-free_form">
          <img
            src="	https://orizuru-care.com/static/img/magnify.svg"
            class="search-free_icon"
          />
          <input
            v-model="freeWord"
            type="text"
            placeholder="店名・駅名・ジャンル・等"
            class="search-free_form_text"
          />
        </div>
        <div class="search-free_btn">
          <button type="button" class="search-free_btn_click" @click="doSearch">
            検索する
          </button>
        </div>
        <div class="search-free_list_content">
          <div class="search-free_list_content_item">
            <div
              v-for="shop in shops"
              :key="shop.id"
              class="search-free_list_content_item_parent"
            >
              <img :src="shop.photo.pc.l" />
              <div class="search-free_list_content_item_list">
                <p><span>店名:</span>{{ shop.name }}</p>
                <p><span>住所:</span>{{ shop.address }}</p>
                <p><span>アクセス:</span>{{ shop.mobile_access }}</p>
                <p><span>電話番号:</span>{{ shop.credit_card }}</p>
                <p><span>営業時間:</span>{{ shop.open }}</p>
                <p><span>定休日:</span>{{ shop.close }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-top_content">
          <ul class="footer-top_content_list">
            <nuxt-link to="/login">
              <li>ログイン</li>
            </nuxt-link>
            <nuxt-link to="/resister">
              <li>新規登録</li>
            </nuxt-link>
            <nuxt-link to="/question">
              <li>よくある質問</li>
            </nuxt-link>
            <nuxt-link to="/form">
              <li>お問い合わせ</li>
            </nuxt-link>
            <nuxt-link to="/terms">
              <li>ご利用規約</li>
            </nuxt-link>
            <nuxt-link to="/privacy">
              <li>プライバシーポリシー</li>
            </nuxt-link>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom_content">
          <div class="footer-bottom_head">
            <p>Copyright © 2021 Ramen App All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
export default {
  layout: 'index',
  scrollTop: true,
  data() {
    return {
      shops: [],
      error: false,
      latitude: 0,
      longitude: 0,
      dialog_1: false,
      dialog_2: false,
      dialog_3: false,
      dialog_4: false,
      dialog_5: false,
      show: false,
      freeWord: '',
      items: [
        {
          src: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/97108/97108619.jpg?token=5adbb4a&api=v2',
        },
        {
          src: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/97108/97108626.jpg?token=158d2b9&api=v2',
        },
        {
          src: 'https://tblg.k-img.com/resize/660x370c/restaurant/images/Rvw/97108/97108611.jpg?token=3281343&api=v2',
        },
      ],
      imgs_1: [
        {
          src: 'https://d340eiag32bpum.cloudfront.net/img/post/spot/523/52231-3kTTEsD4tY1V0mE1zuuV_lrg_re.jpg',
        },
        {
          src: 'https://tblg.k-img.com/restaurant/images/Rvw/141506/640x640_rect_141506127.jpg',
        },
        {
          src: 'https://rimage.hitosara.com/gg/image/0020000935/0020000935F35_551x413y.jpg?t=1624005875',
        },
      ],
      imgs_2: [
        {
          src: 'https://imgfp.hotp.jp/IMGH/09/21/P038020921/P038020921_480.jpg',
        },
        {
          src: 'https://tblg.k-img.com/restaurant/images/Rvw/155629/320x320_square_155629378.jpg',
        },
        {
          src: 'https://rimage.gnst.jp/rest/img/84ha239b0000/s_0n5v.jpg?t=1627902302',
        },
      ],
      imgs_3: [
        {
          src: 'https://imgfp.hotp.jp/IMGH/24/32/P036322432/P036322432_480.jpg',
        },
        {
          src: 'https://tblg.k-img.com/restaurant/images/Rvw/125507/640x640_rect_125507695.jpg',
        },
        {
          src: 'https://imgfp.hotp.jp/IMGH/83/60/P030798360/P030798360_480.jpg',
        },
      ],
    }
  },
  mounted() {
    this.$axios(
      `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}&large_area=Z011&format=json`,
      {
        params: {
          key: process.env.API_URL,
          lat: '35.681236',
          lng: '139.767125',
          format: 'json',
        },
      }
    )
      .then((data) => {
        this.shops = data.data.results.shop
        console.log(data.data.results.shop, '11111')
      })
      .catch(this.setError)
  },
  methods: {
    doSearch() {
      this.$axios
        .get(
          `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}&keyword=${this.freeWord}`,
          {
            params: {
              format: 'json',
            },
          }
        )
        .then((data) => {
          this.shops = data.data.results.shop
        })
    },
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
    },
    setError(err) {
      console.log(err)
      this.error = true
    },
    async fetchData() {
      try {
        const position = await getCurrentPosition().catch(this.setError)
        // TODO positionが取れなくてundefindになる。ロケーション情報が取れないのでこれを対処する
        // https://qiita.com/Mitsunori_Tsukada/items/5f25d1808dd3d9840b85
        const { data } = await this.$axios.get(
          'http://localhost:3000/api/gourmet/v1/',
          {
            params: {
              key: process.env.apikey,
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              format: 'json',
            },
          }
        )
        if (data.results.error !== undefined) {
          this.error = true
          return
        }
        console.log(data, 'fetchData')
        this.shops = data.results.shop
      } catch (error) {
        this.setError(error)
      }
    },
    async asyncData({ $axios }) {
      const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}&large_area=Z011&format=json`
      const response = await $axios.$get(url)
      return {
        posts: response,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.search-top {
  filter: brightness(120%);
}
.header-top_content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-top {
  background-color: #fff;
}
.header_head {
  display: flex;
  align-items: center;
}
.header_head_img {
  width: 100%;
  height: 100%;
}
.header_head_img img {
  width: 200px;
  height: 180px;
  object-fit: contain;
}
.header_head h1 {
  letter-spacing: 3px;
  font-weight: Normal;
  color: #ff8e00;
}
.header-heading {
  background-color: #fff;
}
.header-heading_img {
  width: 100%;
  height: 500px;
  text-align: center;
}
.header-heading_img video {
  width: 100%;
  height: 100%;
}
.header-heading_img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.search-about {
  background-color: #ffac6a;
  padding: 100px;
}
.search-about_content {
  padding: 10px 0;
  max-width: 70%;
  margin: 0 auto;
  text-align: center;
  border: 5px dotted #ff8e00;
  background-color: #fff;
  color: #ffac6a;
}
.search-about_head {
  width: 70%;
  margin: 0 auto;
  padding: 15px 0;
}
.search-about_head h1 {
  letter-spacing: 3px;
  font-weight: Normal;
  font-size: 36px;
}
.search-about_text {
  width: 70%;
  margin: 0 auto;
  padding: 15px 0;
}
.search-about_text p {
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 18px;
}
.search-problem {
  margin: 10% 0;
  font-size: 1.5rem;
  position: relative;
  font-weight: bold;
  text-shadow: 0 0 2px white;
  background-color: #ffac6a;
  z-index: 1;
}
.search-problem h1 {
  font-weight: Normal;
  letter-spacing: 3px;
}
.search-problem:after {
  content: '';
  position: absolute;
  background: #ff8e00;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
.search-problem.text-center {
  text-align: center !important;
}
.search-top_head h1 {
  text-align: center;
  padding: 30px;
}
.search_detail {
  text-align: center;
  background-color: #fff;
  padding: 0 0 50px 0;
}
.search_detail_head {
  padding: 75px;
}
.search_detail h1 {
  color: #000;
  font-weight: Normal;
  letter-spacing: 3px;
}
.search_detail_content {
  display: flex;
  width: 80%;
  margin: 0 auto;
}
.search_detail_content_1 {
  width: 30%;
  margin: 0 15px;
}
.search_detail_content_1_img {
  margin: 15px 0;
}
.search_detail_content_1_img img {
  width: 100%;
  border-radius: 10px;
}
.search_detail_content_1_description {
  width: 90%;
  margin: 0 auto;
  color: #000;
}
.search_detail_content_2 {
  width: 30%;
  margin: 0 15px;
}
.search_detail_content_2_img {
  margin: 15px 0;
}
.search_detail_content_2_img img {
  width: 100%;
  border-radius: 10px;
}
.search_detail_content_2_description {
  width: 90%;
  margin: 0 auto;
  color: #000;
}
.search_detail_content_3 {
  width: 30%;
  margin: 0 15px;
}
.search_detail_content_3_img {
  margin: 15px 0;
}
.search_detail_content_3_img img {
  width: 100%;
  border-radius: 10px;
}
.search_detail_content_3_description {
  width: 90%;
  margin: 0 auto;
  color: #000;
}
.search-free {
  background-color: #c8c8c8;
  color: #000;
}
.search-free_content {
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
}
.search-free_head {
  padding: 65px 0 30px 0;
}
.search-free_head h1 {
  letter-spacing: 3px;
  font-weight: lighter;
}
.search-free_form {
  width: 100%;
  margin: 30px 0;
}
.search-free_icon {
  width: 24px;
  height: 24px;
  padding: 1px;
  margin-top: 12px;
  position: absolute;
  margin-left: 12px;
}
.search-free_form_text {
  width: 90%;
  padding: 9px 8px 8px 42px;
  border: 2px solid #999;
  border-radius: 6px;
}
.search-free_btn_click {
  background-color: #ff8e00;
  color: #fff;
  padding: 12px 24px;
  width: 300px;
  border-radius: 50px;
  margin: 25px 0 65px 0;
}
.search-free_list_content_item {
  padding: 0 0 75px 0;
}
.search-free_list_content_item img {
  width: 300px;
  height: 250px;
}
.search-free_list_content_item_list {
  width: 70%;
  padding: 50px 0;
}
.search-free_list_content_item_list p {
  text-align: left;
  line-height: 2;
  letter-spacing: 3px;
  text-indent: -1em;
  padding-left: 3.5em;
}
.search-free_list_content_item_list span {
  font-weight: bold;
  margin-right: 15px;
}
.search-free_list_content_item_parent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c8c8c8;
  padding: 0 30px;
  margin: 30px 0;
  box-shadow: 4px 4px 6px rgb(0 0 0 / 12%);
  display: none;
}
.search-free_list_content_item_parent p {
  width: 80%;
}
.theme--dark.v-application {
  background: #fff !important;
}
.footer-top {
  background-color: #ff8e00;
}
.footer-top_content {
  width: 80%;
  margin: 0 auto;
  padding: 30px;
}
.footer-top_content_list {
  display: flex;
  list-style: none;
}
.footer-top_content_list a {
  width: 20%;
  text-decoration: none;
  color: #fff;
}
.footer-bottom {
  background-color: #fff;
}
.footer-bottom_content {
  width: 80%;
  margin: 0 auto;
}
.footer-bottom_head {
  text-align: center;
  padding: 30px 0;
}
.footer-bottom_head p {
  color: #000;
}
.v-application p {
  margin: 0;
}
.header-resister-btn {
  border: 1px solid #ff8e00;
  width: 150px;
  color: #ff8e00;
  padding: 8px;
  border-radius: 30px;
  margin: 0 10px;
}
.header-login-btn {
  border: 1px solid #ff8e00;
  width: 150px;
  color: #ff8e00;
  padding: 8px;
  border-radius: 30px;
  margin: 0 10px;
}
.header-btn {
  display: flex;
  justify-content: space-around;
}
</style>
