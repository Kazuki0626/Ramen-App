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
        <div class="header-heading_topics">
          <a href="http://localhost:3000/_nuxt/assets/img/ramen-topics.png">
            <img src="@/assets/img/ramen-topics.png" />
          </a>
        </div>
      </div>
    </header>
    <div class="search-problem">
      <div class="search-problem_head">
        <h1>こんな悩みはありませんか？</h1>
      </div>
      <div class="search-problem_content">
        <div class="search-problem_content_left">
          <div class="search-problem_content_left_img">
            <img
              src="https://4.bp.blogspot.com/-MZRiDNtddqU/V_I4GNMYpqI/AAAAAAAA-mY/2Sw5eYtM4_oyOmO3kF0mdIKVl29Cuc9yACLcB/s800/businessman1_nayami.png"
              alt=""
            />
          </div>
        </div>
        <div class="search-problem_content_right">
          <div class="search-problem_content_right_text">
            <div class="search-problem_content_right_text_1">
              <div class="search-problem_content_right_text_1_img">
                <img
                  src="https://chicodeza.com/wordpress/wp-content/uploads/retenn-illust31.png"
                />
              </div>
              <div class="search-problem_content_right_text_1_text">
                <h1>どのサービスで飲食店を探せばいいかわからない...</h1>
              </div>
            </div>
            <div class="search-problem_content_right_text_2">
              <div class="search-problem_content_right_text_2_img">
                <img
                  src="https://chicodeza.com/wordpress/wp-content/uploads/retenn-illust31.png"
                />
              </div>
              <div class="search-problem_content_right_text_2_text">
                <h1>時間がないけど飲食店が見つからない...</h1>
              </div>
            </div>
            <div class="search-problem_content_right_text_3">
              <div class="search-problem_content_right_text_3_img">
                <img
                  src="https://chicodeza.com/wordpress/wp-content/uploads/retenn-illust31.png"
                />
              </div>
              <div class="search-problem_content_right_text_3_text">
                <h1>ご希望の価格帯のお店が見つからない...</h1>
              </div>
            </div>
            <div class="search-problem_content_right_text_4">
              <div class="search-problem_content_right_text_4_img">
                <img
                  src="https://chicodeza.com/wordpress/wp-content/uploads/retenn-illust31.png"
                />
              </div>
              <div class="search-problem_content_right_text_4_text">
                <h1>周辺にどんなお店があるかわからない...</h1>
              </div>
            </div>
            <div class="search-problem_content_right_text_5">
              <div class="search-problem_content_right_text_5_img">
                <img
                  src="https://chicodeza.com/wordpress/wp-content/uploads/retenn-illust31.png"
                />
              </div>
              <div class="search-problem_content_right_text_5_text">
                <h1>お店のSNSを探すのに苦労している...</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-solution">
      <div class="search-solution_head">
        <h1>そんな人にRamen App です！</h1>
      </div>
      <div class="search-solution_content">
        <div class="search-solution_content_1">
          <div class="search-solution_content_1_head">
            <h1>フリーワード検索で探せる</h1>
          </div>
          <div class="search-solution_content_1_img">
            <img src="@/assets/img/computer_search_kensaku.png" />
          </div>
          <div class="search-solution_content_1_text">
            <p>
              お客様がご希望の条件をフォームにご記入いただくことで飲食店を検索することができます。
            </p>
          </div>
        </div>
        <div class="search-solution_content_2">
          <div class="search-solution_content_2_head">
            <h1>幅広い飲食店が見つかる</h1>
          </div>
          <div class="search-solution_content_2_img">
            <img src="@/assets/img/shop_ninki.png" />
          </div>
          <div class="search-solution_content_2_text">
            <p>
              日本料理・中華料理・フレンチ・イタリアン・韓国料理など幅広い飲食店を見つけることができます。
            </p>
          </div>
        </div>
        <div class="search-solution_content_3">
          <div class="search-solution_content_3_head">
            <h1>飲食店までの距離がわかる</h1>
          </div>
          <div class="search-solution_content_3_img">
            <img src="@/assets/img/car_gps.png" />
          </div>
          <div class="search-solution_content_3_text">
            <p>
              お客様の現在位置を取得しご希望のお店までの距離を正確に知ることができます
            </p>
          </div>
        </div>
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
  border-top: 4px solid #ff8e00;
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
  height: 150px;
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
.header-heading_topics {
  position: fixed;
  top: 5.8%;
  left: -6%;
  width: 450px;
  height: 450px;
}
.header-heading_topics img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
.search-problem {
  padding: 50px 0;
  background-color: #ffb577;
}
.search-problem_head {
  background-image: url(https://tsukatte.com/wp-content/uploads/2019/01/hatena.png);
  background-size: contain;
  background-position: center;
  text-align: center;
  padding: 100px 0;
}
.search-problem_head h1 {
  color: #000;
  font-size: 36px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-problem_content {
  display: flex;
}
.search-problem_content_left {
  width: 50%;
}
.search-problem_content_left img {
  width: 100%;
  height: 500px;
  object-fit: contain;
}
.search-problem_content_right {
  width: 50%;
}
.search-problem_content_right_text_1 {
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.search-problem_content_right_text_1_img {
  width: 50px;
  height: 40px;
}
.search-problem_content_right_text_1_img img {
  width: 100%;
}
.search-problem_content_right_text_1 h1 {
  color: #000;
  border-bottom: 2px solid #ff8e00;
  margin-left: 5px;
  font-weight: Normal;
}
.search-problem_content_right_text_2 {
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.search-problem_content_right_text_2_img {
  width: 50px;
  height: 40px;
}
.search-problem_content_right_text_2_img img {
  width: 100%;
}
.search-problem_content_right_text_2 h1 {
  color: #000;
  border-bottom: 2px solid #ff8e00;
  margin-left: 5px;
  font-weight: Normal;
}
.search-problem_content_right_text_3 {
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.search-problem_content_right_text_3_img {
  width: 50px;
  height: 40px;
}
.search-problem_content_right_text_3_img img {
  width: 100%;
}
.search-problem_content_right_text_3 h1 {
  color: #000;
  border-bottom: 2px solid #ff8e00;
  margin-left: 5px;
  font-weight: Normal;
}
.search-problem_content_right_text_4 {
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.search-problem_content_right_text_4_img {
  width: 50px;
  height: 40px;
}
.search-problem_content_right_text_4_img img {
  width: 100%;
}
.search-problem_content_right_text_4 h1 {
  color: #000;
  border-bottom: 2px solid #ff8e00;
  margin-left: 5px;
  font-weight: Normal;
}
.search-problem_content_right_text_5 {
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.search-problem_content_right_text_5_img {
  width: 50px;
  height: 40px;
}
.search-problem_content_right_text_5_img img {
  width: 100%;
}
.search-problem_content_right_text_5 h1 {
  color: #000;
  border-bottom: 2px solid #ff8e00;
  margin-left: 5px;
  font-weight: Normal;
}
.search-solution {
  background-color: #ffb577;
  padding: 0 0 50px 0;
}
.search-solution_head {
  text-align: center;
  padding: 100px 0 50px 0;
}
.search-solution_head h1 {
  color: #000;
  font-size: 36px;
  letter-spacing: 3px;
  font-weight: lighter;
}
.search-solution_content {
  display: flex;
  max-width: 90%;
  margin: 0 auto;
}
.search-solution_content_1 {
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 50px 0;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
  margin: 30px 15px;
}
.search-solution_content_1_head {
  padding: 8px 0;
}
.search-solution_content_1_head h1 {
  color: #000;
  font-size: 24px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-solution_content_1_img {
  height: 200px;
}
.search-solution_content_1_img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.search-solution_content_1_text {
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
}
.search-solution_content_1_text p {
  color: #000;
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-solution_content_2 {
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 50px 0;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
  margin: 30px 15px;
}
.search-solution_content_2_head {
  padding: 8px 0;
}
.search-solution_content_2_head h1 {
  color: #000;
  font-size: 24px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-solution_content_2_img {
  height: 200px;
}
.search-solution_content_2_img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.search-solution_content_2_text {
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
}
.search-solution_content_2_text p {
  color: #000;
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-solution_content_3 {
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 50px 0;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
  margin: 30px 15px;
}
.search-solution_content_3_head {
  padding: 8px 0;
}
.search-solution_content_3_head h1 {
  color: #000;
  font-size: 24px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-solution_content_3_img {
  height: 200px;
}
.search-solution_content_3_img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.search-solution_content_3_text {
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
}
.search-solution_content_3_text p {
  color: #000;
  letter-spacing: 3px;
  font-weight: Normal;
}
</style>
