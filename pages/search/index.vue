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
    <div class="search-free">
      <div class="search-free_content">
        <div class="search-free_head">
          <h1>フリーワード検索</h1>
        </div>
        <div class="search-free_form">
          <img
            src="https://orizuru-care.com/static/img/magnify.svg"
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
          <button
            type="button"
            class="search-free_btn_click"
            @click="fetchShopsData()"
          >
            検索する
          </button>
        </div>
        <div class="search-free_list_content">
          <div class="search-free_list_content_item">
            <div
              v-for="shop in searchResults"
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
      <div class="footer-content">
        <div class="footer-top">
          <div class="footer-top_left">
            <div class="footer-top_logo">
              <img src="@/assets/img/sample-header.png" alt="" />
            </div>
          </div>
          <div class="footer-top_right">
            <div class="footer-top_right_content">
              <div class="footer-top_right_content_1">
                <div class="footer-top_right_content_1_img">
                  <img src="@/assets/img/footer-arrow.png" alt="" />
                </div>
                <div class="footer-top_right_content_1_list">
                  <p>
                    <nuxt-link to="/resister/"> 新規登録 </nuxt-link>
                  </p>
                </div>
              </div>
              <div class="footer-top_right_content_2">
                <div class="footer-top_right_content_2_img">
                  <img src="@/assets/img/footer-arrow.png" alt="" />
                </div>
                <div class="footer-top_right_content_2_list">
                  <p>
                    <nuxt-link to="/login/"> ログイン </nuxt-link>
                  </p>
                </div>
              </div>
              <div class="footer-top_right_content_3">
                <div class="footer-top_right_content_3_img">
                  <img src="@/assets/img/footer-arrow.png" alt="" />
                </div>
                <div class="footer-top_right_content_3_list">
                  <p>
                    <nuxt-link to="/terms/"> ご利用規約 </nuxt-link>
                  </p>
                </div>
              </div>
              <div class="footer-top_right_content_4">
                <div class="footer-top_right_content_4_img">
                  <img src="@/assets/img/footer-arrow.png" alt="" />
                </div>
                <div class="footer-top_right_content_4_list">
                  <p>
                    <nuxt-link to="/privacy/"> プライバシーポリシー </nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom_content">
            <div class="footer-bottom_copyright">
              <p>Copyright © 2021 Ramen App All Rights Reserved.</p>
            </div>
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
      show: false,
      freeWord: '',
    }
  },
  computed: {
    searchResults() {
      return this.$store.getters['shops/getFilterByFreeWord']
    },
  },
  mounted() {
    this.fetchShopsData()
    this.$axios(
      `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}&large_area=Z011&format=json`,
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
      })
      .catch(this.setError)
  },
  methods: {
    fetchShopsData() {
      this.$store.dispatch('shops/fetchShopsFilterByFreeWord', this.freeWord)
    },
    setError(err) {
      console.log(err)
      this.error = true
    },
    async fetchData() {
      try {
        const position = await getCurrentPosition().catch(this.setError)
        // TODO positionが取れなくてundefindになる。ロケーション情報が取れないのでこれを対処する
        // httpss://qiita.com/Mitsunori_Tsukada/items/5f25d1808dd3d9840b85
        const { data } = await this.$axios.get(
          'https://localhost:3000/api/gourmet/v1/',
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
      const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}&large_area=Z011&format=json`
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
.header-top_content {
  width: 100%;
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
.search-free {
  background-color: #fff;
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
  background-color: #ffac6a;
  color: #fff;
  font-size: 18px;
  padding: 0 30px;
  margin: 30px 0;
  box-shadow: 4px 4px 6px rgb(0 0 0 / 12%);
}
.search-free_list_content_item_parent p {
  width: 80%;
}
.theme--dark.v-application {
  background: #fff !important;
}
.footer {
  width: 100%;
}
.footer-top {
  width: 100%;
  display: flex;
}
.footer-top_left {
  width: 15%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-top_logo {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.footer-top_logo img {
  width: 100%;
  height: 100%;
}
.footer-top_right {
  width: 85%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-top_right_content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-top_right_content_1 {
  width: 20%;
  display: flex;
}
.footer-top_right_content_1_img {
  width: 80px;
  height: 70px;
  object-fit: cover;
}
.footer-top_right_content_1_img img {
  width: 100%;
}
.footer-top_right_content_1_list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-top_right_content_1_list p a {
  color: #ffac6a;
  text-decoration: none;
  font-size: 20px;
}
.footer-top_right_content_2 {
  width: 20%;
  display: flex;
}
.footer-top_right_content_2_img {
  width: 80px;
  height: 70px;
  object-fit: cover;
}
.footer-top_right_content_2_img img {
  width: 100%;
}
.footer-top_right_content_2_list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-top_right_content_2_list p a {
  color: #ffac6a;
  text-decoration: none;
  font-size: 20px;
}
.footer-top_right_content_3 {
  width: 20%;
  display: flex;
}
.footer-top_right_content_3_img {
  width: 80px;
  height: 70px;
  object-fit: cover;
}
.footer-top_right_content_3_img img {
  width: 100%;
}
.footer-top_right_content_3_list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-top_right_content_3_list p a {
  color: #ffac6a;
  text-decoration: none;
  font-size: 20px;
}
.footer-top_right_content_4 {
  width: 25%;
  display: flex;
}
.footer-top_right_content_4_img {
  width: 80px;
  height: 70px;
  object-fit: cover;
}
.footer-top_right_content_4_img img {
  width: 100%;
}
.footer-top_right_content_4_list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-top_right_content_4_list p a {
  color: #ffac6a;
  text-decoration: none;
  font-size: 20px;
}
.footer-bottom {
  background-color: #fff;
  color: #000;
}
.v-application p {
  margin: 0;
}
.footer-bottom_content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
</style>
