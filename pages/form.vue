<template>
  <div class="contact">
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
                    <nuxt-link to="/resister/">
                      <li>新規登録</li>
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
                  <li style="color: #fff">Login</li>
                  <p style="color: #fff">ログイン</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_2">
                <nuxt-link to="/login/">
                  <li style="color: #fff">Resister</li>
                  <p style="color: #fff">新規登録</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_3">
                <nuxt-link to="/question/">
                  <li style="color: #fff">Question</li>
                  <p style="color: #fff">よくある質問</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_4">
                <nuxt-link to="/contact/">
                  <li style="color: #fff">Contact</li>
                  <p style="color: #fff">お問い合わせ</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_5">
                <nuxt-link to="/terms/">
                  <li style="color: #fff">Terms</li>
                  <p style="color: #fff">ご利用規約</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_6">
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
    <div class="contact-form">
      <div class="contact-head">
        <h1>お問い合わせ</h1>
      </div>
      <div class="contact-form_content">
        <div class="contact-form_name">
          名前
          <input
            type="text"
            placeholder="山田太郎"
            class="contact-form_name_item"
          />
        </div>
        <div class="contact-form_email">
          メールアドレス
          <input
            type="text"
            placeholder="example.com"
            class="contact-form_email_item"
          />
        </div>
        <div class="contact-form_tel">
          電話番号
          <input
            type="text"
            placeholder="123-456-789"
            class="contact-form_tel_item"
          />
        </div>
        <div class="contact-form_text">
          お問い合わせ内容
          <textarea
            name="message"
            cols="40"
            rows="10"
            maxlength="2000"
            placeholder="入力"
            required="required"
            class="contact-form_text_item"
          />
        </div>
        <div class="contact-form_btn">
          <nuxt-link to="../form-result/result/">
            <button type="button" class="contact-form_btn_click">送信</button>
          </nuxt-link>
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
.header-center_list_6 {
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
.contact {
  background-color: #fff;
  color: #000;
}
.contact-form {
  max-width: 50%;
  margin: 0 auto;
}
.contact-head {
  text-align: center;
  padding: 50px 0;
}
.contact-head h1 {
  letter-spacing: 3px;
  font-weight: Normal;
}
.contact-form_name_item {
  width: 100%;
  border: 1px solid #999;
  padding: 10px;
  margin: 5px 0 30px 0;
  border-radius: 6px;
}
.contact-form_email_item {
  width: 100%;
  border: 1px solid #999;
  padding: 10px;
  margin: 5px 0 30px 0;
  border-radius: 6px;
}
.contact-form_tel_item {
  width: 100%;
  border: 1px solid #999;
  padding: 10px;
  margin: 5px 0 30px 0;
  border-radius: 6px;
}
.contact-form_text_item {
  width: 100%;
  border: 1px solid #999;
  padding: 10px;
  margin: 5px 0 30px 0;
  border-radius: 6px;
}
.contact-form_btn {
  text-align: center;
  margin: 20px 0 100px 0;
}
.contact-form_btn_click {
  padding: 12px 24px;
  background-color: #ff8e00;
  color: #fff;
  width: 250px;
  border-radius: 30px;
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
