<template>
  <div class="privacy">
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
                    <nuxt-link to="/login/login/">
                      <li>ログイン</li>
                    </nuxt-link>
                    <nuxt-link to="/question/question/">
                      <li>よくある質問</li>
                    </nuxt-link>
                    <nuxt-link to="/form/form/">
                      <li>お問い合わせ</li>
                    </nuxt-link>
                    <nuxt-link to="/terms/terms/">
                      <li>ご利用規約</li>
                    </nuxt-link>
                    <nuxt-link to="/privacy/privacy/">
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
                <nuxt-link to="/login/login/">
                  <li style="color: #fff">Resister・Login</li>
                  <p style="color: #fff">新規登録・ログイン</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_2">
                <nuxt-link to="/question/question/">
                  <li style="color: #fff">Question</li>
                  <p style="color: #fff">よくある質問</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_3">
                <nuxt-link to="/contact/contact/">
                  <li style="color: #fff">Contaqct</li>
                  <p style="color: #fff">お問い合わせ</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_4">
                <nuxt-link to="/terms/terms/">
                  <li style="color: #fff">Terms</li>
                  <p style="color: #fff">ご利用規約</p>
                </nuxt-link>
              </div>
              <div class="header-center_list_5">
                <nuxt-link to="/privacy/privacy/">
                  <li style="color: #fff">Privacy</li>
                  <p style="color: #fff">プライバシーポリシー</p>
                </nuxt-link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="privacy-head">
      <h1>プライバシーポリシー</h1>
    </div>
    <div class="privacy-content">
      <div class="privacy-content_1">
        <div class="privacy-content_1_head">
          <h1>第1条（個人情報）</h1>
        </div>
        <p>
          「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </p>
      </div>
      <div class="privacy-content_2">
        <div class="privacy-content_2_head">
          <h1>第2条（個人情報の収集方法）</h1>
        </div>
        <p>
          当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
        </p>
      </div>
      <div class="privacy-content_3">
        <div class="privacy-content_3_head">
          <h1>第3条（個人情報を収集・利用する目的）</h1>
        </div>
        <p>当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
        <ul>
          <li>1.当社サービスの提供・運営のため</li>
          <li>
            2.ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
          </li>
          <li>
            3.ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため
          </li>
          <li>4.メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
          <li>
            5.利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
          </li>
          <li>
            6.ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため
          </li>
          <li>7.有料サービスにおいて，ユーザーに利用料金を請求するため</li>
          <li style="padding: 0 0 25px 0">8.上記の利用目的に付随する目的</li>
        </ul>
      </div>
      <div class="privacy-content_4">
        <div class="privacy-content_4_head">
          <h1>第4条（利用目的の変更）</h1>
        </div>
        <p>
          1.当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。<br />
          2.利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
        </p>
      </div>
      <div class="privacy-content_5">
        <div class="privacy-content_5_head">
          <h1>第5条（個人情報の第三者提供）</h1>
        </div>
        <p>
          1.当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
        </p>
        <ul>
          <li>
            1.人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき
          </li>
          <li>
            2.公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき
          </li>
          <li>
            3.国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
          </li>
          <li>
            4.予め次の事項を告知あるいは公表し，かつ当社が個人情報保護委員会に届出をしたとき
          </li>
        </ul>
        <p>
          2.前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。
        </p>
        <ul>
          <li>
            1.当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
          </li>
          <li>
            2.合併その他の事由による事業の承継に伴って個人情報が提供される場合
          </li>
          <li style="padding: 0 0 25px 0">
            3.個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合
          </li>
        </ul>
      </div>
      <div class="privacy-content_6">
        <div class="privacy-content_6_head">
          <h1>第6条（個人情報の開示）</h1>
        </div>
        <p>
          1.当社は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。なお，個人情報の開示に際しては，1件あたり1，000円の手数料を申し受けます。
        </p>
        <ul>
          <li>
            1.本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合
          </li>
          <li>2.当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
          <li>3.その他法令に違反することとなる場合</li>
        </ul>
        <p style="padding: 0 0 25px 0">
          2.前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。
        </p>
      </div>
      <div class="privacy-content_7">
        <div class="privacy-content_7_head">
          <h1>第7条（個人情報の訂正および削除）</h1>
        </div>
        <p>
          1.ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。<br />
          2.当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。<br />
          3.当社は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，これをユーザーに通知します。
        </p>
      </div>
      <div class="privacy-content_8">
        <div class="privacy-content_8_head">
          <h1>第8条（個人情報の利用停止等）</h1>
        </div>
        <p>
          1.当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。<br />
          2.前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。<br />
          3.当社は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。<br />
          4.前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。
        </p>
      </div>
      <div class="privacy-content_9">
        <div class="privacy-content_9_head">
          <h1>第9条（プライバシーポリシーの変更）</h1>
        </div>
        <p>
          1.本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。<br />
          2.当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
        </p>
      </div>
      <div class="privacy-content_10">
        <div class="privacy-content_10_head">
          <h1>第10条（お問い合わせ窓口）</h1>
        </div>
        <p>
          本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
        </p>
        <p style="margin-bottom: 30px; padding-top: 0px">
          住所：<br />
          社名：<br />
          担当部署：<br />
          Eメールアドレス：
        </p>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-top_content">
          <ul class="footer-top_content_list">
            <nuxt-link to="../login/login">
              <li>新規登録・ログイン</li>
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
.privacy {
  background-color: #fff;
}
.privacy-content {
  max-width: 50%;
  margin: 0 auto;
}
.privacy-head {
  text-align: center;
  padding: 60px 0;
}
.privacy-head h1 {
  color: #000;
  font-weight: Normal;
  letter-spacing: 3px;
}
.privacy-content_1 {
  color: #000;
}
.privacy-content_1 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: lighter;
}
.privacy-content_1 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0;
}
.privacy-content_2 {
  color: #000;
}
.privacy-content_2 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.privacy-content_2 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0;
}
.privacy-content_3 {
  color: #000;
}
.privacy-content_3 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: lighter;
}
.privacy-content_3 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0 0 0;
}
.privacy-content_3 ul {
  margin: 15px 0;
}
.privacy-content_3 ul li {
  list-style: none;
  letter-spacing: 3px;
  line-height: 2;
}
.privacy-content_4 {
  color: #000;
}
.privacy-content_4 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.privacy-content_4 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0;
}
.privacy-content_5 {
  color: #000;
}
.privacy-content_5 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: lighter;
}
.privacy-content_5 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0 0 0;
}
.privacy-content_5 ul {
  margin: 15px 0;
}
.privacy-content_5 ul li {
  list-style: none;
  letter-spacing: 3px;
  line-height: 2;
}
.privacy-content_6 {
  color: #000;
}
.privacy-content_6 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.privacy-content_6 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0 0 0;
}
.privacy-content_6 ul {
  margin: 15px 0;
}
.privacy-content_6 ul li {
  list-style: none;
  letter-spacing: 3px;
  line-height: 2;
}
.privacy-content_7 {
  color: #000;
}
.privacy-content_7 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.privacy-content_7 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0;
}
.privacy-content_8 {
  color: #000;
}
.privacy-content_8 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.privacy-content_8 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0;
}
.privacy-content_9 {
  color: #000;
}
.privacy-content_9 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.privacy-content_9 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0;
}
.privacy-content_10 {
  color: #000;
}
.privacy-content_10 h1 {
  background-color: #c8c8c8;
  border-left: 12px solid #ff8e00;
  padding: 8px;
  letter-spacing: 3px;
  font-weight: Normal;
}
.privacy-content_10 p {
  margin: 15px 0;
  line-height: 2;
  letter-spacing: 3px;
  padding: 25px 0;
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
