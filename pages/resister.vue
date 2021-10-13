<template>
  <section class="resister-page">
    <header class="header">
      <div class="header-top">
        <div class="header-top_content">
          <div class="header_head">
            <nuxt-link to="/">
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
    </header>
    <div class="resister">
      <div class="resister-content">
        <div class="resister-content_head">
          <h1>新規登録</h1>
        </div>
        <div class="resister-content_item">
          <div class="resister-content_item_username">
            <div class="resister-content_item_username_list">
              <div class="resister-content_item_username_badge">
                <p>※必須</p>
              </div>
              <div class="resister-content_item_username_text">
                <p>ユーザー名<br /></p>
              </div>
            </div>
            <input type="text" class="resister-content_item_username_textbox" />
          </div>
          <div class="resister-content_item_email">
            <div class="resister-content_item_email_list">
              <div class="resister-content_item_email_badge">
                <p>※必須</p>
              </div>
              <div class="resister-content_item_email_text">
                <p>メールアドレス<br /></p>
              </div>
            </div>
            <input type="text" class="resister-content_item_email_textbox" />
          </div>
          <div class="resister-content_item_address">
            <div class="resister-content_item_address_list">
              <div class="resister-content_item_address_badge">
                <p>※必須</p>
              </div>
              <div class="resister-content_item_address_text">
                <p>住所<br /></p>
              </div>
            </div>
            <input type="text" class="resister-content_item_address_textbox" />
          </div>
          <div class="resister-content_item_phone">
            <div class="resister-content_item_phone_list">
              <div class="resister-content_item_phone_badge">
                <p>※必須</p>
              </div>
              <div class="resister-content_item_phone_text">
                <p>電話番号<br /></p>
              </div>
            </div>
            <input type="text" class="resister-content_item_phone_textbox" />
          </div>
          <div class="resister-content_item_password">
            <div class="resister-content_item_password_list">
              <div class="resister-content_item_password_badge">
                <p>※必須</p>
              </div>
              <div class="resister-content_item_password_text">
                <p>パスワード<br /></p>
              </div>
            </div>
            <input
              type="password"
              class="resister-content_item_password_textbox"
            />
          </div>
          <div class="resister-content_item_password_2">
            <div class="resister-content_item_password_2_list">
              <div class="resister-content_item_password_2_badge">
                <p>※必須</p>
              </div>
              <div class="resister-content_item_password_2_text">
                <p>パスワード(確認用)<br /></p>
              </div>
            </div>
            <input
              type="password"
              class="resister-content_item_password_2_textbox"
            />
          </div>
        </div>
        <div class="resister-content_btn">
          <button type="button" class="resister-content_btn_click">
            新規登録
          </button>
        </div>
        <div class="resister-content_login">
          <nuxt-link to="../login/">
            <p>ログイン</p>
          </nuxt-link>
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

<style lang="scss" scoped>
.resister-page {
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
.resister {
  background-color: #ffac6a;
  padding: 100px;
}
.resister-content {
  max-width: 70%;
  margin: 0 auto;
  padding: 50px;
  background-color: #fff;
  color: #000;
}
.resister-content_head {
  text-align: center;
  padding: 0 0 30px 0;
}
.resister-content_head h1 {
  letter-spacing: 5px;
  font-size: 36px;
  font-weight: Normal;
}
.resister-content_item_username {
  margin: 30px 0;
}
.resister-content_item_username_list {
  display: flex;
  align-items: center;
  padding: 3px 0;
}
.resister-content_item_username_badge {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.resister-content_item_username_text {
  display: flex;
  align-items: center;
}
.resister-content_item_username_text p {
  font-size: 24px;
  font-weight: Normal;
  letter-spacing: 3px;
}
.resister-content_item_username_badge p {
  width: 100%;
  background-color: #dc3545;
  color: #fff !important;
  padding: 0 !important;
  text-align: center;
}
.resister-content_item_username p {
  padding: 8px 0;
  color: #ffac6a;
  font-weight: bolder;
}
.resister-content_item_username_textbox {
  width: 100%;
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
}
.resister-content_item_email {
  margin: 30px 0;
}
.resister-content_item_email_list {
  display: flex;
  align-items: center;
  padding: 3px 0;
}
.resister-content_item_email_badge {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.resister-content_item_email_text {
  display: flex;
  align-items: center;
}
.resister-content_item_email_text p {
  font-size: 24px;
  font-weight: Normal;
  letter-spacing: 3px;
}
.resister-content_item_email_badge p {
  width: 100%;
  background-color: #dc3545;
  color: #fff !important;
  padding: 0 !important;
  text-align: center;
}
.resister-content_item_email p {
  padding: 8px 0;
  color: #ffac6a;
  font-weight: bolder;
}
.resister-content_item_email_textbox {
  width: 100%;
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
}
.resister-content_item_address {
  margin: 30px 0;
}
.resister-content_item_address_list {
  display: flex;
  align-items: center;
  padding: 3px 0;
}
.resister-content_item_address_badge {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.resister-content_item_address_text {
  display: flex;
  align-items: center;
}
.resister-content_item_address_text p {
  font-size: 24px;
  font-weight: Normal;
  letter-spacing: 3px;
}
.resister-content_item_address_badge p {
  width: 100%;
  background-color: #dc3545;
  color: #fff !important;
  padding: 0 !important;
  text-align: center;
}
.resister-content_item_address p {
  padding: 8px 0;
  color: #ffac6a;
  font-weight: bolder;
}
.resister-content_item_address_textbox {
  width: 100%;
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
}
.resister-content_item_phone {
  margin: 30px 0;
}
.resister-content_item_phone_list {
  display: flex;
  align-items: center;
  padding: 3px 0;
}
.resister-content_item_phone_badge {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.resister-content_item_phone_text {
  display: flex;
  align-items: center;
}
.resister-content_item_phone_text p {
  font-size: 24px;
  font-weight: Normal;
  letter-spacing: 3px;
}
.resister-content_item_phone_badge p {
  width: 100%;
  background-color: #dc3545;
  color: #fff !important;
  padding: 0 !important;
  text-align: center;
}
.resister-content_item_phone p {
  padding: 8px 0;
  color: #ffac6a;
  font-weight: bolder;
}
.resister-content_item_phone_textbox {
  width: 100%;
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
}
.resister-content_item_password {
  margin: 30px 0;
}
.resister-content_item_password_list {
  display: flex;
  align-items: center;
  padding: 3px 0;
}
.resister-content_item_password_badge {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.resister-content_item_password_text {
  display: flex;
  align-items: center;
}
.resister-content_item_password_text p {
  font-size: 24px;
  font-weight: Normal;
  letter-spacing: 3px;
}
.resister-content_item_password_badge p {
  width: 100%;
  background-color: #dc3545;
  color: #fff !important;
  padding: 0 !important;
  text-align: center;
}
.resister-content_item_password p {
  padding: 8px 0;
  color: #ffac6a;
  font-weight: bolder;
}
.resister-content_item_password_textbox {
  width: 100%;
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
}
.resister-content_item_password_2 {
  margin: 30px 0;
}
.resister-content_item_password_2_list {
  display: flex;
  align-items: center;
  padding: 3px 0;
}
.resister-content_item_password_2_badge {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.resister-content_item_password_2_text {
  display: flex;
  align-items: center;
}
.resister-content_item_password_2_text p {
  font-size: 24px;
  font-weight: Normal;
  letter-spacing: 3px;
}
.resister-content_item_password_2_badge p {
  width: 100%;
  background-color: #dc3545;
  color: #fff !important;
  padding: 0 !important;
  text-align: center;
}
.resister-content_item_password_2 p {
  padding: 8px 0;
  color: #ffac6a;
  font-weight: bolder;
}
.resister-content_item_password_2_textbox {
  width: 100%;
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #c8c8c8;
}
.resister-content_btn {
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0;
}
.resister-content_btn_click {
  width: 100%;
  background-color: #ffac6a;
  color: #fff;
  padding: 12px 24px;
  border-radius: 30px;
}
.resister-content_login {
  text-align: center;
  padding: 15px 0 30px 0;
}
.resister-content_login a {
  color: #fff;
}
.resister-content_login p {
  color: #ff8e00;
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
