<template>
  <div class="terms">
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
    <div class="terms-top">
      <div class="terms-head">
        <h1>ご利用規約</h1>
      </div>
      <div class="terms-content">
        <div class="terms-content_1">
          <h1>第1条（適用）</h1>
          <p>
            1.本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。<br />
            2.当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。<br />
            3.本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
          </p>
        </div>
        <div class="terms-content_2">
          <h1>第2条（利用登録）</h1>
          <p>
            1.本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。<br />
            2.当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。<br />
          </p>
          <ul>
            <li>1.利用登録の申請に際して虚偽の事項を届け出た場合</li>
            <li>2.本規約に違反したことがある者からの申請である場合</li>
            <li>3.その他，当社が利用登録を相当でないと判断した場合</li>
          </ul>
        </div>
        <div class="terms-content_3">
          <h1>第3条（ユーザーIDおよびパスワードの管理）</h1>
          <p>
            1.ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。<br />
            2.ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。<br />
            3.ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。
          </p>
        </div>
        <div class="terms-content_4">
          <h1>第4条（利用料金および支払方法）</h1>
          <p>
            1.ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本ウェブサイトに表示する利用料金を，当社が指定する方法により支払うものとします。<br />
            2.ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。
          </p>
        </div>
        <div class="terms-content_5">
          <h1>第5条（禁止事項）</h1>
          <p>
            ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
          </p>
          <ul>
            <li>1.法令または公序良俗に違反する行為</li>
            <li>2.犯罪行為に関連する行為</li>
            <li>
              3.本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
            </li>
            <li>
              4.当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
            </li>
            <li>5.本サービスによって得られた情報を商業的に利用する行為</li>
            <li>6.当社のサービスの運営を妨害するおそれのある行為</li>
            <li>7.不正アクセスをし，またはこれを試みる行為</li>
            <li>8.他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>9.不正な目的を持って本サービスを利用する行為</li>
            <li>
              10.本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
            </li>
            <li>11.他のユーザーに成りすます行為</li>
            <li>
              12.当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
            </li>
            <li>13.面識のない異性との出会いを目的とした行為</li>
            <li>
              14.当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
            </li>
            <li>15.その他，当社が不適切と判断する行為</li>
          </ul>
        </div>
        <div class="terms-content_6">
          <h1>第6条（本サービスの提供の停止等）</h1>
          <p>
            1.当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </p>
          <ul>
            <li>
              1.本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              2.地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
            </li>
            <li>3.コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>4.その他，当社が本サービスの提供が困難と判断した場合</li>
          </ul>
          <p style="padding: 0 0 25px 0">
            当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
          </p>
        </div>
        <div class="terms-content_7">
          <h1>第7条（利用制限および登録抹消）</h1>
          <p>
            1.当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
          </p>
          <ul>
            <li>1.本規約のいずれかの条項に違反した場合</li>
            <li>2.登録事項に虚偽の事実があることが判明した場合</li>
            <li>3.料金等の支払債務の不履行があった場合</li>
            <li>4.当社からの連絡に対し，一定期間返答がない場合</li>
            <li>5.本サービスについて，最終の利用から一定期間利用がない場合</li>
            <li>6.その他，当社が本サービスの利用を適当でないと判断した場合</li>
          </ul>
          <p style="padding: 0 0 25px 0">
            2.当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
          </p>
        </div>
        <div class="terms-content_8">
          <h1>第8条（退会）</h1>
          <p style="padding: 0 0 25px 0">
            1.ユーザーは，当社の定める退会手続により，本サービスから退会できるものとします。
          </p>
        </div>
        <div class="terms-content_9">
          <h1>第9条（保証の否認および免責事項）</h1>
          <p style="padding: 0 0 25px 0">
            1.当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。<br />
            2.当社は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。<br />
            3.前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。<br />
            4.当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
          </p>
        </div>
        <div class="terms-content_10">
          <h1>第10条（サービス内容の変更等）</h1>
          <p style="padding: 0 0 25px 0">
            1.当社は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
          </p>
        </div>
        <div class="terms-content_11">
          <h1>第11条（利用規約の変更）</h1>
          <p style="padding: 0 0 25px 0">
            1.当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
          </p>
        </div>
        <div class="terms-content_12">
          <h1>第12条（個人情報の取扱い）</h1>
          <p style="padding: 0 0 25px 0">
            1.当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。
          </p>
        </div>
        <div class="terms-content_13">
          <h1>第13条（通知または連絡）</h1>
          <p style="padding: 0 0 25px 0">
            1.ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
          </p>
        </div>
        <div class="terms-content_14">
          <h1>第14条（権利義務の譲渡の禁止）</h1>
          <p style="padding: 0 0 25px 0">
            1.ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
          </p>
        </div>
        <div class="terms-content_15">
          <h1>第15条（準拠法・裁判管轄）</h1>
          <ul>
            <li>1.本規約の解釈にあたっては，日本法を準拠法とします。</li>
            <li>
              2.本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-top_content">
          <ul class="footer-top_content_list">
            <nuxt-link to="/login">
              <li>新規登録・ログイン</li>
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
  font-weight: Normal;
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
.terms-top {
  background: #fff;
}
.terms-top .terms-head {
  text-align: center;
  padding: 60px 0;
}
.terms-head h1 {
  color: #000;
  letter-spacing: 3px;
  font-weight: lighter;
}
.terms-content {
  max-width: 50%;
  margin: 0 auto;
  padding: 0 0 30px 0;
  color: #000;
}
.terms-content_1 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_1 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
  padding: 0 0 25px 0;
}
.terms-content_2 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_2 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_2 ul li {
  list-style: none;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_2 ul {
  padding: 20px 0;
}
.terms-content_3 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_3 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
  padding: 0 0 25px 0;
}
.terms-content_4 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_4 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
  padding: 0 0 25px 0;
}
.terms-content_5 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_5 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_5 ul {
  padding: 20px 0;
}
.terms-content_5 li {
  letter-spacing: 3px;
  line-height: 2;
  list-style: none;
}
.terms-content_6 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_6 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_6 ul {
  padding: 20px 0;
}
.terms-content_6 li {
  letter-spacing: 3px;
  line-height: 2;
  list-style: none;
}
.terms-content_7 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_7 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_7 ul {
  padding: 20px 0;
}
.terms-content_7 li {
  letter-spacing: 3px;
  line-height: 2;
  list-style: none;
}
.terms-content_8 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_8 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_9 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_9 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_10 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_10 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_11 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_11 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_12 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_12 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_13 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_13 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_14 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_14 p {
  margin: 10px 0;
  letter-spacing: 3px;
  line-height: 2;
}
.terms-content_15 h1 {
  background: #c8c8c8;
  padding: 8px;
  margin: 0 0 30px 0;
  border-left: 12px solid #ff8e00;
  font-weight: Normal;
}
.terms-content_15 ul {
  padding: 20px 0;
}
.terms-content_15 li {
  letter-spacing: 3px;
  line-height: 2;
  list-style: none;
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
