<template>
  <div class="question">
    <header class="header">
      <div class="header-top">
        <div class="header-top_content">
          <div class="header_head">
            <nuxt-link to="/search/">
              <h1>Ramen App</h1>
            </nuxt-link>
          </div>
          <div class="header-nav">
            <input id="header-check" type="checkbox" class="header-hidden" />
            <label for="header-check" class="header-open"><span></span></label>
            <div class="header-content">
              <div class="header-content_head">
                <h1 style="font-size: 48px">Ramen App</h1>
              </div>
              <div class="header-content_item">
                <div class="header-content_list">
                  <ul>
                    <nuxt-link to="/login/">
                      <li>ログイン</li>
                    </nuxt-link>
                    <nuxt-link to="/question/">
                      <li>よくある質問</li>
                    </nuxt-link>
                    <nuxt-link to="/form/">
                      <li>お問い合わせ</li>
                    </nuxt-link>
                    <nuxt-link to="/terms/">
                      <li>ご利用規約</li>
                    </nuxt-link>
                    <nuxt-link to="/privacy/">
                      <li>プライバシーポリシー</li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-center">
        <div class="header-center_content">
          <div class="header-center_list">
            <ul>
              <div class="header-center_list_1">
                <nuxt-link to="/login/">
                  <li style="color: #fff">Resister・Login</li>
                  <p style="color: #fff">新規登録・ログイン</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_2">
                <nuxt-link to="/question/">
                  <li style="color: #fff">Question</li>
                  <p style="color: #fff">よくある質問</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_3">
                <nuxt-link to="/form/">
                  <li style="color: #fff">Contact</li>
                  <p style="color: #fff">お問い合わせ</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_4">
                <nuxt-link to="/terms/">
                  <li style="color: #fff">Terms</li>
                  <p style="color: #fff">ご利用規約</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_5">
                <nuxt-link to="/privacy/">
                  <li style="color: #fff">Privacy</li>
                  <p style="color: #fff">プライバシーポリシー</p>
                </nuxt-link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="question_content">
      <div class="question_head">
        <h1>よくある質問</h1>
      </div>
      <div class="question-list">
        <div class="question_list_avail">
          <div class="question_list_avail_head">
            <h1>利用に関するQ&A</h1>
            <p>Question about avail</p>
          </div>
          <div class="question_list_avail_1">
            <h3>
              <span>Q</span
              >このアプリはどういったときに使用すれば良いでしょうか？
            </h3>
            <p>
              <span>A</span
              >こちらのアプリは都内限らずお客様のご希望に沿った飲食店をお探しになられたいときにご使用いただければと思います。
            </p>
          </div>
          <div class="question_list_avail_2">
            <h3>
              <span>Q</span
              >このアプリはどのような飲食店を見つけることができますか？
            </h3>
            <p>
              <span>A</span
              >このアプリは居酒屋・日本料理・イタリアン・フレンチ・韓国料理など幅広い飲食店を見つけることができます。
            </p>
          </div>
          <div class="question_list_avail_3">
            <h3><span>Q</span>ユーザー登録しないと使えないですか？</h3>
            <p>
              <span>A</span>このアプリはユーザー登録なしでもお使いいただけます。
            </p>
          </div>
          <div class="question_list_avail_4">
            <h3><span>Q</span>対象年齢等ありますでしょうか？</h3>
            <p>
              <span>A</span
              >このアプリには対象年齢はありません。どなたでもご利用いただけます。
            </p>
          </div>
          <div class="question_list_avail_5">
            <h3>
              <span>Q</span>お問い合わせへのご返信にはどれほどかかりますか？
            </h3>
            <p>
              <span>A</span>ご返信には通常1~2日ほどお時間をいただいております。
            </p>
          </div>
        </div>
        <div class="question_list_about">
          <div class="question_list_about_head">
            <h1>アプリについてQ&A</h1>
            <p>Question about App</p>
          </div>
          <div class="question_list_about_1">
            <h3><span>Q</span>アプリのアップデートなどはないのでしょうか？</h3>
            <p>
              <span>A</span
              >毎月末にアプリのアップデータ等行っています。アップデータ中はご利用を制限させていただく場合がございますのでご了承ください。
            </p>
          </div>
          <div class="question_list_about_2">
            <h3><span>Q</span>アプリに新しい機能をつけて欲しいのですが。</h3>
            <p>
              <span>A</span
              >お問い合わせフォームより要望やご意見お待ちしております。具体案などいただけますと幸いです。
            </p>
          </div>
          <div class="question_list_about_3">
            <h3>
              <span>Q</span>新規会員登録などすると何かメリットはありますか？
            </h3>
            <p>
              <span>A</span
              >新規会員登録いただけますとポイントが貯まりますので飲食店へ行かれた際にポイントをご利用いただけるようになります。
            </p>
          </div>
          <div class="question_list_about_4">
            <h3>
              <span>Q</span>このアプリはどの地方の方が多く利用しておりますか？
            </h3>
            <p>
              <span>A</span
              >このアプリは関東ならびに関西地方の方を中心に多くに人にご利用していただいております。
            </p>
          </div>
          <div class="question_list_about_5">
            <h3><span>Q</span>このアプリは無料で利用できますか？</h3>
            <p><span>A</span>はい、このアプリは無料でご利用いただけます。</p>
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
  </div>
</template>

<style lang="scss" scoped>
.header-top_content {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
.header-top {
  border-top: 4px solid #ff8e00;
  background-color: #fff;
}
.header_head {
  display: flex;
  align-items: center;
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
  background: orange;
  transition: 0.8s;
  margin: 0 auto;
}

.header-content_head {
  text-align: center;
  padding: 30px 0;
}

.header-content_head h1 {
  color: #000;
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
  color: #000;
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
.question {
  background-color: #fff;
}
.question_content {
  max-width: 50%;
  margin: 0 auto;
}
.question_head {
  text-align: center;
  padding: 50px 0;
}
.question_head h1 {
  color: #000;
  letter-spacing: 3px;
  font-weight: lighter;
}
.question_list_avail {
  color: #000;
  padding: 15px;
}
.question_list_avail_head {
  text-align: center;
  padding: 0 0 30px 0;
}
.question_list_avail_head h1 {
  letter-spacing: 4px;
  font-weight: Normal;
  color: #ff8e00;
}
.question_list_avail_head p {
  letter-spacing: 3px;
}
.question_list_avail_1 {
  margin: 30px 0;
}
.question_list_avail_1 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_avail_1 h3 span {
  font-size: 32px;
  font-weight: Normal;
  color: #ff8e00;
  margin: 0 8px 0 0;
}
.question_list_avail_1 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_avail_1 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_avail_2 {
  margin: 30px 0;
}
.question_list_avail_2 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_avail_2 h3 span {
  font-size: 32px;
  color: #ff8e00;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_avail_2 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_avail_2 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_avail_3 {
  margin: 30px 0;
}
.question_list_avail_3 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_avail_3 h3 span {
  font-size: 32px;
  color: #ff8e00;
  margin: 0 8px 0 0;
  font-weight: Normal;
}
.question_list_avail_3 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_avail_3 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_avail_4 {
  margin: 30px 0;
}
.question_list_avail_4 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_avail_4 h3 span {
  font-size: 32px;
  color: #ff8e00;
  margin: 0 8px 0 0;
  font-weight: Normal;
}
.question_list_avail_4 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_avail_4 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_avail_1 {
  margin: 30px 0;
}
.question_list_avail_5 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_avail_5 h3 span {
  font-size: 32px;
  color: #ff8e00;
  margin: 0 8px 0 0;
  font-weight: Normal;
}
.question_list_avail_5 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_avail_5 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_about {
  color: #000;
  padding: 15px;
}
.question_list_about_head {
  text-align: center;
  padding: 30px 0;
}
.question_list_about_head h1 {
  letter-spacing: 4px;
  font-weight: Normal;
  color: #ff8e00;
}
.question_list_about_head p {
  letter-spacing: 2px;
}
.question_list_about_1 {
  margin: 30px 0;
}
.question_list_about_1 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_about_1 h3 span {
  font-size: 32px;
  color: #ff8e00;
  margin: 0 8px 0 0;
  font-weight: Normal;
}
.question_list_about_1 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_about_1 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_about_2 {
  margin: 30px 0;
}
.question_list_about_2 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_about_2 h3 span {
  font-size: 32px;
  color: #ff8e00;
  margin: 0 8px 0 0;
  font-weight: Normal;
}
.question_list_about_2 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_about_2 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_about_3 {
  margin: 30px 0;
}
.question_list_about_3 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_about_3 h3 span {
  font-size: 32px;
  color: #ff8e00;
  margin: 0 8px 0 0;
  font-weight: Normal;
}
.question_list_about_3 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_about_3 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_about_4 {
  margin: 30px 0;
}
.question_list_about_4 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_about_4 h3 span {
  font-size: 32px;
  color: #ff8e00;
  margin: 0 8px 0 0;
  font-weight: Normal;
}
.question_list_about_4 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_about_4 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
}
.question_list_about_5 {
  margin: 30px 0;
}
.question_list_about_5 h3 {
  color: #000;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 5px 0;
}
.question_list_about_5 h3 span {
  font-size: 32px;
  color: #ff8e00;
  margin: 0 8px 0 0;
  font-weight: Normal;
}
.question_list_about_5 p {
  color: #000;
  letter-spacing: 3px;
}
.question_list_about_5 p span {
  font-size: 36px;
  color: red;
  font-weight: Normal;
  margin: 0 8px 0 0;
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
</style>
