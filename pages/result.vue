<template>
  <div class="result">
    <div class="result_content">
      <div class="result_head">
        <h2>お問い合わせありがとうございます</h2>
      </div>
      <div class="result_description">
        <p>
          内容確認後、メールにてご連絡させていただきます。<br />
          連絡まで今しばらくお待ちください。
        </p>
      </div>
      <div class="result_btn">
        <nuxt-link to="../../search/">
          <button type="button" class="result_btn_click">トップに戻る</button>
        </nuxt-link>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-top_content">
          <ul class="footer-top_content_list">
            <nuxt-link to="../login/login">
              <li>ログイン</li>
            </nuxt-link>
            <nuxt-link to="../question/question">
              <li>よくある質問</li>
            </nuxt-link>
            <nuxt-link to="../form/form">
              <li>お問い合わせ</li>
            </nuxt-link>
            <nuxt-link to="../terms/terms">
              <li>ご利用規約</li>
            </nuxt-link>
            <nuxt-link to="../privacy/privacy">
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
.result {
  background-color: #fff;
  color: #000;
  height: 100%;
}
.result_head {
  margin: 30px 0;
}
.result_head h2 {
  font-weight: lighter;
  letter-spacing: 3px;
}
.result_description {
  margin: 30px 0;
}
.result_description p {
  letter-spacing: 3px;
  line-height: 2;
}
.result_content {
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
}
.result_btn {
  margin: 50px 0;
}
.result_btn_click {
  padding: 8px;
  background-color: green;
  color: #fff;
  width: 250px;
  border-radius: 30px;
}
.footer-top {
  background-color: #123;
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
  background-color: cyan;
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
</style>
