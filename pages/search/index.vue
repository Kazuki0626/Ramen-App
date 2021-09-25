<template>
  <section class="search-top">
    <header class="header">
      <div class="header-top">
        <div class="header-top_content">
          <div class="header_head">
            <nuxt-link to="/search/">
              <div class="header_head_img">
                <img src="@/assets/img/ramen-app.png" />
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
      <div class="header-bottom">
        <div class="header-bottom_content">
          <div class="header-bottom_content_left">
            <div class="header-bottom_content_left_head">
              <h1>''食の楽しさを皆さまの手に''</h1>
            </div>
            <div class="header-bottom_content_left_description">
              <p>自分の身の回りの地域や場所から</p>
              <p>皆さまのご希望に沿った好みの味や食を</p>
              <p>Ramen App が一緒にお探しいたします！</p>
            </div>
            <div class="header-bottom_content_left_btn">
              <v-btn outlined class="header-bottom_btn"> START </v-btn>
            </div>
          </div>
          <div class="header-bottom_content_right">
            <div class="header-bottom_content_right_img"></div>
          </div>
        </div>
      </div>
    </header>
    <div class="top-sample" style="background: #fff">
      <div class="top-sample-image">
        <img
          src="https://www.illust-pocket.com/wp-content/uploads/2016/07/622.jpg"
        />
        <div class="top-sample_text">
          <div class="top-sample_head">
            <h1>Ramen App とは？</h1>
          </div>
          <div class="top-sample_text_content">
            <p>
              日本料理・イタリアン・フレンチ・韓国料理・居酒屋・焼き肉など多種多様な飲食店をお探しいただけるアプリであり、お客様の気希望のエリア・ジャンル・価格などあらゆる条件からお探しいただけるWebサービスとなっております！！
            </p>
          </div>
          <div class="top-sample_img">
            <div class="top-sample_img_1">
              <img
                src="https://3.bp.blogspot.com/-F7oSHYuIojM/VVGVc936rkI/AAAAAAAAtls/hAl1ihRSew4/s800/job_izakaya_man.png"
              />
            </div>
            <div class="top-sample_img_2">
              <img
                src="https://2.bp.blogspot.com/-oQkczCTrfJg/UZB7gStqHlI/AAAAAAAASEU/vkvxHOCAb1M/s800/job_izakaya_beer.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div class="search-use">
      <div class="search-use_content">
        <div class="search-use_head">
          <h1>こんなときには Ramen App を !</h1>
        </div>
        <div class="search-use_intro">
          <div class="search-use_intro_1">
            <div class="search-use_intro_1_head">
              <h2>時間に追われている時</h2>
            </div>
            <div class="search-use_intro_1_all">
              <div class="search-use_intro_1_left">
                <img
                  src="https://1.bp.blogspot.com/-I-TxSUyMt5A/UpGGhT13boI/AAAAAAAAa6w/-DXDzu_YWdA/s400/businessman_busy.png"
                />
              </div>
              <div class="search-use_intro_1_right">
                <p>
                  お客様の現在位置を取得してお近くにある飲食店をご紹介させていただきます。
                </p>
              </div>
            </div>
          </div>
          <div class="search-use_intro_2">
            <div class="search-use_intro_2_head">
              <h2>お金で悩んでいる時</h2>
            </div>
            <div class="search-use_intro_2_all">
              <div class="search-use_intro_2_left">
                <img
                  src="https://3.bp.blogspot.com/-jWol6pZCk-0/VMIvEUNEGdI/AAAAAAAAq3Y/x_vxXEuMshA/s400/money_kinketsu_man.png"
                />
              </div>
              <div class="search-use_intro_2_right">
                <p>
                  お客様のご希望の価格帯にマッチした飲食店をご紹介させていただきます。
                </p>
              </div>
            </div>
          </div>
          <div class="search-use_intro_3">
            <div class="search-use_intro_3_head">
              <h2>美味しい物を食べたい時</h2>
            </div>
            <div class="search-use_intro_3_all">
              <div class="search-use_intro_3_left">
                <img
                  src="https://4.bp.blogspot.com/-vk1keCza0RU/VYJrrX4FMoI/AAAAAAAAuiM/qLU_BmSWEp4/s400/oishii2_man.png"
                />
              </div>
              <div class="search-use_intro_3_right">
                <p>
                  お客様の好みの味・価格・量などいろいろな点を加味して飲食店をお探しします。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="search-use_btn">
          <button type="button" class="search-use_btn_click">
            今すぐ検索する
          </button>
        </div>
      </div>
    </div>
    <div class="search-shop_introduce">
      <div class="search-shop_introduce_content">
        <div class="search-shop_introduce_head">
          <h1>Ramen App 掲載飲食店のご紹介</h1>
        </div>
        <div class="search-shop_introduce_item">
          <div class="search-shop_introduce_item_1">
            <div class="search-shop_introduce_item_1_head">
              <h1>いち凛 市ヶ谷本店</h1>
            </div>
            <div class="search-shop_introduce_item_1_carousel">
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </div>
            <div class="search-shop_introduce_item_1_list">
              <ul>
                <li>
                  <span>店名:</span><br />個室居酒屋 和食郷土料理 いち凛
                  市ヶ谷本店
                </li>
                <li><span>ジャンル:</span><br />居酒屋</li>
                <li>
                  <span>住所:</span><br />東京都新宿区市谷田町1-2-1 戸塚ビル 3F
                </li>
                <li><span>電話番号:</span><br />050-5596-6122</li>
                <li><span>営業時間:</span><br />16：30～24：00<br /></li>
                <li>
                  <span>交通手段:</span><br />ＪＲ総武線 市ケ谷駅 徒歩1分<br />ＪＲ中央線
                  市ケ谷駅 徒歩1分<br />地下鉄南北線 市ケ谷駅 徒歩2分<br />地下鉄有楽町線
                  市ケ谷駅 徒歩2分<br />市ケ谷駅から225m
                </li>
                <li><span>予算:</span><br />￥3,000～￥4,999</li>
                <li>
                  <span>支払い方法:</span
                  ><br />カード可（VISA、Master、JCB、AMEX、Diners）<br />電子マネー不可
                </li>
              </ul>
            </div>
          </div>
          <div class="search-shop_introduce_item_2">
            <div class="search-shop_introduce_item_2_head">
              <h1>レストラン REGINA 錦糸店</h1>
            </div>
            <div class="search-shop_introduce_item_2_carousel">
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(img, index) in imgs_1"
                  :key="index"
                  :src="img.src"
                ></v-carousel-item>
              </v-carousel>
            </div>
            <div class="search-shop_introduce_item_2_list">
              <ul>
                <li>
                  <span>店名:</span><br />レストラン レジーナ REGINA 錦糸町
                </li>
                <li><span>ジャンル:</span><br />イタリアン・パスタ・バー</li>
                <li>
                  <span>住所:</span><br />東京都墨田区江東橋4-25-5 鈴木ビル ７Ｆ
                </li>
                <li><span>電話番号:</span><br />03-5600-5511</li>
                <li>
                  <span>営業時間:</span
                  ><br />東京都の要請により店舗休業となります。<br />
                </li>
                <li>
                  <span>交通手段:</span><br />総武線錦糸町駅南6番出口 徒歩3分<br />東京メトロ半蔵門線錦糸町駅1番出口
                  徒歩1分<br />中央・総武線 両国駅 徒歩30分<br />半蔵門線 押上駅
                  徒歩21分<br />錦糸町駅から270m
                </li>
                <li><span>予算:</span><br />￥3,000～￥9,999</li>
                <li>
                  <span>支払い方法:</span
                  ><br />カード可（VISA、Master、JCB、AMEX、Diners）<br />電子マネー不可
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="search-shop_introduce_item">
          <div class="search-shop_introduce_item_1">
            <div class="search-shop_introduce_item_1_head">
              <h1>黒毛和牛焼肉 うし5 川越店</h1>
            </div>
            <div class="search-shop_introduce_item_1_carousel">
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(img, i) in imgs_2"
                  :key="i"
                  :src="img.src"
                ></v-carousel-item>
              </v-carousel>
            </div>
            <div class="search-shop_introduce_item_1_list">
              <ul>
                <li><span>店名:</span><br />黒毛和牛焼肉 うし5 川越店</li>
                <li><span>ジャンル:</span><br />焼肉・ホルモン・居酒屋</li>
                <li>
                  <span>住所:</span><br />埼玉県川越市菅原町22-2 第二MSビル 4F
                </li>
                <li><span>電話番号:</span><br />050-3550-2876</li>
                <li><span>営業時間:</span><br />12:00～23:00<br />日曜営業</li>
                <li>
                  <span>交通手段:</span><br />JR 川越線 川越駅 徒歩1分<br />東武東上線
                  川越駅 徒歩1分<br />川越駅から185m
                </li>
                <li>
                  <span>予算:</span><br />ランチ: ￥2,000～￥2,999<br />ディナー:
                  ￥4,000～￥7,999
                </li>
                <li>
                  <span>支払い方法:</span
                  ><br />カード可（VISA、Master、JCB、AMEX、Diners）<br />電子マネー不可
                </li>
              </ul>
            </div>
          </div>
          <div class="search-shop_introduce_item_2">
            <div class="search-shop_introduce_item_2_head">
              <h1>横浜テラス 横浜西口駅前店</h1>
            </div>
            <div class="search-shop_introduce_item_2_carousel">
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(img, index) in imgs_3"
                  :key="index"
                  :src="img.src"
                ></v-carousel-item>
              </v-carousel>
            </div>
            <div class="search-shop_introduce_item_2_list">
              <ul>
                <li><span>店名:</span><br />横浜テラス 横浜西口駅前店</li>
                <li><span>ジャンル:</span><br />ダイニングバー</li>
                <li>
                  <span>住所:</span><br />神奈川県横浜市西区南幸1-9-7
                  ウェストDKビル 2F
                </li>
                <li><span>電話番号:</span><br />045-548-6730</li>
                <li>
                  <span>営業時間:</span><br />ランチ 11:30～15:30<br />ディナー
                  17:00～24:00
                </li>
                <li>
                  <span>交通手段:</span><br />JR 横浜駅 徒歩1分<br />相鉄線
                  横浜駅 徒歩1分<br />京浜東北線 桜木町駅 徒歩30分<br />みなとみらい線
                  みなとみらい駅 24分<br />横浜駅から285m
                </li>
                <li>
                  <span>予算:</span><br />ランチ: ￥1,000～￥1,999<br />ディナー:
                  ￥3,000～￥5,999
                </li>
                <li>
                  <span>支払い方法:</span
                  ><br />カード可（VISA、Master、JCB、AMEX、Diners）<br />電子マネー不可
                </li>
              </ul>
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
          `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_URL}&large_area=Z011&format=json`,
          {
            params: {
              key: process.env.API_URL,
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
  padding: 5px 0 8px 0;
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
  width: 500px;
  height: 90px;
  object-fit: cover;
}
.header_head h1 {
  letter-spacing: 3px;
  font-weight: Normal;
  color: #ff8e00;
}
.header-center {
  width: 100%;
  height: 75px;
  background-color: #ff8e00;
}
.header-center_content {
  max-width: 85%;
  margin: 0 auto;
  padding: 12px 0 0 0;
  text-align: center;
}
.header-center_list ul {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-center_list ul li {
  list-style: none;
  color: #000;
  letter-spacing: 3px;
  margin-bottom: 3px;
}
.header-center_list p {
  color: #000;
  letter-spacing: 3px;
}
.header-center_list_1 {
  width: 100%;
}
.header-center_list_2 {
  width: 100%;
}
.header-center_list_3 {
  width: 100%;
}
.header-center_list_4 {
  width: 100%;
}
.header-center_list_5 {
  width: 100%;
}
.header-center_list_6 {
  width: 100%;
}
.header-bottom {
  background-color: rgb(241, 154, 41);
  color: #000;
}
.header-bottom_content {
  width: 70%;
  margin: 0 auto;
  padding: 40px 0 50px 0;
  display: flex;
  justify-content: space-between;
}
.header-bottom_content_left_head h1 {
  font-size: 32px;
  font-weight: Normal;
  letter-spacing: 4px;
  color: #fff;
}
.header-bottom_content_left_description {
  margin: 10px 0;
}
.header-bottom_content_left_description p {
  letter-spacing: 4px;
  padding: 5px 0;
  color: #fff;
  font-size: 18px;
}
.header-bottom_btn {
  margin: 10px 0;
  width: 175px;
}
.v-application .indigo--text {
  color: #000 !important;
  caret-color: #000 !important;
}
.header-bottom_content_left {
  width: 100%;
}
.header-bottom_content_right {
  background-image: url(https://ooita.goguynet.jp/wp-content/uploads/sites/19/2018/08/bdb977d5eb7792bfc2282a431b1f16ab.png);
  background-size: contain;
  width: 100%;
}
.header-hidden {
  display: none;
}

.header-open {
  display: flex;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  cursor: pointer;
}

.header-open span,
.header-open span:before,
.header-open span:after {
  content: '';
  display: block;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #ff8e00;
  transition: 0.5s;
  position: absolute;
}

.header-open span:before {
  bottom: 8px;
}

.header-open span:after {
  top: 8px;
}

#header-check:checked ~ .header-open span {
  background: rgba(255, 255, 255, 0);
}

#header-check:checked ~ .header-open span::before {
  bottom: 0;
  transform: rotate(45deg);
}

#header-check:checked ~ .header-open span::after {
  top: 0;
  transform: rotate(-45deg);
}

.header-content_item {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header-content {
  width: 30%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 100%;
  z-index: 99;
  background-color: rgb(241, 154, 41);
  transition: 0.8s;
  margin: 0 auto;
}

.header-content_head {
  text-align: center;
  padding: 30px 0;
}

.header-content_head h1 {
  color: #fff;
  letter-spacing: 3px;
  font-weight: lighter;
}

.header-content_list {
  width: 100%;
}

.header-content_list ul {
  text-align: center;
}

.header-content_list ul li {
  color: #fff;
  line-height: 6;
  letter-spacing: 2px;
  list-style: none;
  text-decoration: none;
}

.v-application a {
  text-decoration: none;
}

.header-content .header-list {
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
}

#header-check:checked ~ .header-content {
  left: 0;
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
}
.search-free_list_content_item_parent p {
  width: 80%;
}
.theme--dark.v-application {
  background: #fff !important;
}
.search-use {
  background-color: #c8c8c8;
}
.search-use_content {
  padding: 50px 0;
}
.search-use_content h1 {
  color: #000;
  text-align: center;
}
.search-use_intro {
  width: 80%;
  margin: 0 auto;
  display: flex;
}
.search-use_head h1 {
  padding: 25px 0 75px 0;
  color: #000;
  font-weight: lighter;
  letter-spacing: 3px;
}
.search-use_intro h2 {
  color: #000;
  text-align: center;
}
.search-use_intro_1 {
  width: 33%;
}
.search-use_intro_1_head h2 {
  font-weight: lighter;
  letter-spacing: 3px;
}
.search-use_intro_1_all {
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;
}
.search-use_intro_1_left {
  width: 30%;
}
.search-use_intro_1_left img {
  width: 100%;
}
.search-use_intro_1_right {
  width: 70%;
}
.search-use_intro_1_right p {
  letter-spacing: 3px;
  color: #000;
}
.search-use_intro_2 {
  width: 33%;
}
.search-use_intro_2_head h2 {
  font-weight: lighter;
  letter-spacing: 3px;
}
.search-use_intro_2_all {
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;
}
.search-use_intro_2_left {
  width: 30%;
}
.search-use_intro_2_left img {
  width: 100%;
}
.search-use_intro_2_right {
  width: 70%;
}
.search-use_intro_2_right p {
  letter-spacing: 3px;
  color: #000;
}
.search-use_intro_3 {
  width: 33%;
}
.search-use_intro_3_head h2 {
  font-weight: lighter;
  letter-spacing: 3px;
}
.search-use_intro_3_all {
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;
}
.search-use_intro_3_left {
  width: 30%;
}
.search-use_intro_3_left img {
  width: 100%;
}
.search-use_intro_3_right {
  width: 70%;
}
.search-use_intro_3_right p {
  color: #000;
  letter-spacing: 3px;
}
.search-use_btn {
  padding: 35px 0 15px 0;
  text-align: center;
}
.search-use_btn_click {
  background-color: #ff8e00;
  color: #fff;
  padding: 12px 24px;
  width: 250px;
  border-radius: 30px;
}
.search-shop_introduce {
  background-color: #fff;
  color: #000;
}
.search-shop_introduce_content {
  max-width: 90%;
  margin: 0 auto;
}
.search-shop_introduce_head {
  text-align: center;
  padding: 50px 0;
}
.search-shop_introduce_head h1 {
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-shop_introduce_item {
  width: 100%;
  display: flex;
}
.search-shop_introduce_item_1 {
  width: 45%;
  margin: 0 auto;
}
.search-shop_introduce_item_1_head {
  text-align: center;
  padding: 30px 0 30px 0;
}
.search-shop_introduce_item_1_head h1 {
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-shop_introduce_item_1_carousel {
  padding: 50px 0 35px 0;
}
.search-shop_introduce_item_1_list {
  padding: 0 0 75px 0;
}
.search-shop_introduce_item_1_list ul {
  padding: 0;
}
.search-shop_introduce_item_1_list ul li {
  list-style: none;
  border-bottom: 2px solid #c8c8c8;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 3px;
  padding: 8px;
}
.search-shop_introduce_item_1_list ul li span {
  font-weight: bold;
}
.search-shop_introduce_item_2 {
  width: 45%;
  margin: 0 auto;
}
.search-shop_introduce_item_2_head {
  text-align: center;
  padding: 30px 0 30px 0;
}
.search-shop_introduce_item_2_head h1 {
  letter-spacing: 3px;
  font-weight: Normal;
}
.search-shop_introduce_item_2_carousel {
  padding: 50px 0 35px 0;
}
.search-shop_introduce_item_2_list {
  padding: 0 0 75px 0;
}
.search-shop_introduce_item_2_list ul {
  padding: 0;
}
.search-shop_introduce_item_2_list ul li {
  list-style: none;
  border-bottom: 2px solid #c8c8c8;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 3px;
  padding: 8px;
}
.search-shop_introduce_item_2_list ul li span {
  font-weight: bold;
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

.top-sample {
  padding: 150px 0 100px 0;
  width: 100%;
}

.top-sample-image {
  text-align: center;
}

.top-sample-image img {
  width: 80%;
  height: 500px;
}

.top-sample_text {
  color: #000;
  max-width: 50%;
  margin: 0 auto;
  position: fixed;
  top: 6.8%;
  left: 24.6%;
  line-height: 3;
  letter-spacing: 3px;
}
.top-sample_img_1 {
  position: fixed;
  top: 6%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.top-sample_img_1 img {
  width: 200px;
  height: 180px;
}
.top-sample_img_2 {
  position: fixed;
  top: 6%;
  right: 27%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.top-sample_img_2 img {
  width: 200px;
  height: 180px;
}
.top-sample_head h1 {
  font-size: 36px;
  font-weight: Normal;
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
</style>
