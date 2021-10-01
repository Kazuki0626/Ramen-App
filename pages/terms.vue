<template>
  <section class="terms-page">
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
    </header>
    <div class="terms">
      <div class="terms-content">
        <div class="terms-content_head">
          <h1>ご利用規約</h1>
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
.terms {
  width: 100%;
  background-color: #fff;
}
.terms-content {
  max-width: 60%;
  margin: 0 auto;
  background-color: #ffac6a;
  border-radius: 8px;
}
.terms-content_head {
  padding: 50px 0;
  text-align: center;
}
.terms-content_head h1 {
  font-size: 36px;
  letter-spacing: 8px;
  font-weight: Normal;
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
  background-color: #ffac6a;
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
