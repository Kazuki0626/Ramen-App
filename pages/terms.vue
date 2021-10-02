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
        <div class="terms-content_text">
          <p class="text-justify">
            この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
          </p>
        </div>
        <div class="terms-content_1">
          <div class="terms-content_1_head">
            <h1>第1条（適用）</h1>
          </div>
          <div class="terms-content_1_list">
            <ul>
              <li>
                1.本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
              </li>
              <li>
                2.当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
              </li>
              <li>
                3.本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
              </li>
            </ul>
          </div>
        </div>
        <div class="terms-content_2">
          <div class="terms-content_2_head">
            <h1>第2条（利用登録）</h1>
          </div>
          <div class="terms-content_2_list">
            <p>
              1.本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。
            </p>
            <p>
              2.当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
            </p>
            <ul>
              <li>1.利用登録の申請に際して虚偽の事項を届け出た場合</li>
              <li>2.本規約に違反したことがある者からの申請である場合</li>
              <li>3.その他，当社が利用登録を相当でないと判断した場合</li>
            </ul>
          </div>
        </div>
        <div class="terms-content_3">
          <div class="terms-content_3_head">
            <h1>第3条（ユーザーIDおよびパスワードの管理）</h1>
          </div>
          <div class="terms-content_3_list">
            <ul>
              <li>
                1.ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
              </li>
              <li>
                2.ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。
              </li>
              <li>
                3.ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。
              </li>
            </ul>
          </div>
        </div>
        <div class="terms-content_4">
          <div class="terms-content_4_head">
            <h1>第4条（利用料金および支払方法）</h1>
          </div>
          <div class="terms-content_4_list">
            <ul>
              <li>
                1.ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本ウェブサイトに表示する利用料金を，当社が指定する方法により支払うものとします。
              </li>
              <li>
                2.ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。
              </li>
            </ul>
          </div>
        </div>
        <div class="terms-content_5">
          <div class="terms-content_5_head">
            <h1>第5条（禁止事項）</h1>
          </div>
          <div class="terms-content_5_list">
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
        </div>
        <div class="terms-content_6">
          <div class="terms-content_6_head">
            <h1>第6条（本サービスの提供の停止等）</h1>
          </div>
          <div class="terms-content_6_list">
            <P
              >1.当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</P
            >
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
            <p>
              2.当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
            </p>
          </div>
        </div>
        <div class="terms-content_7">
          <div class="terms-content_7_head">
            <h1>第7条（利用制限および登録抹消）</h1>
          </div>
          <div class="terms-content_7_list">
            <p>
              1.当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
            </p>
            <ul>
              <li>1.本規約のいずれかの条項に違反した場合</li>
              <li>2.登録事項に虚偽の事実があることが判明した場合</li>
              <li>3.料金等の支払債務の不履行があった場合</li>
              <li>4.当社からの連絡に対し，一定期間返答がない場合</li>
              <li>
                5.本サービスについて，最終の利用から一定期間利用がない場合
              </li>
              <li>
                6.その他，当社が本サービスの利用を適当でないと判断した場合
              </li>
            </ul>
            <p>
              2.当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
            </p>
          </div>
        </div>
        <div class="terms-content_8">
          <div class="terms-content_8_head">
            <h1>第8条（退会）</h1>
          </div>
          <div class="terms-content_8_list">
            <p>
              ユーザーは，当社の定める退会手続により，本サービスから退会できるものとします。
            </p>
          </div>
        </div>
        <div class="terms-content_9">
          <div class="terms-content_9_head">
            <h1>第9条（保証の否認および免責事項）</h1>
          </div>
          <div class="terms-content_9_list">
            <ul>
              <li>
                1.当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </li>
              <li>
                2.当社は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
              </li>
              <li>
                3.前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
              </li>
              <li>
                4.当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
              </li>
            </ul>
          </div>
        </div>
        <div class="terms-content_10">
          <div class="terms-content_10_head">
            <h1>第10条（サービス内容の変更等）</h1>
          </div>
          <div class="terms-content_10_list">
            <p>
              当社は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </div>
        </div>
        <div class="terms-content_11">
          <div class="terms-content_11_head">
            <h1>第11条（利用規約の変更）</h1>
          </div>
          <div class="terms-content_11_list">
            <p>
              当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
            </p>
          </div>
        </div>
        <div class="terms-content_12">
          <div class="terms-content_12_head">
            <h1>第12条（個人情報の取扱い）</h1>
          </div>
          <div class="terms-content_12_list">
            <p>
              当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>
          </div>
        </div>
        <div class="terms-content_13">
          <div class="terms-content_13_head">
            <h1>第13条（通知または連絡）</h1>
          </div>
          <div class="terms-content_13_list">
            <p>
              ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
            </p>
          </div>
        </div>
        <div class="terms-content_14">
          <div class="terms-content_14_head">
            <h1>第14条（権利義務の譲渡の禁止）</h1>
          </div>
          <div class="terms-content_14_list">
            <p>
              ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
            </p>
          </div>
        </div>
        <div class="terms-content_15">
          <div class="terms-content_15_head">
            <h1>第15条（準拠法・裁判管轄）</h1>
          </div>
          <div class="terms-content_15_list">
            <ul>
              <li>1.本規約の解釈にあたっては，日本法を準拠法とします。</li>
              <li>
                2.本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </li>
            </ul>
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
  padding: 100px 0;
}
.terms-content {
  max-width: 60%;
  margin: 0 auto;
  background-color: #ffac6a;
  border-radius: 8px;
}
.terms-content_head {
  max-width: 60%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
}
.terms-content_head h1 {
  font-size: 36px;
  letter-spacing: 8px;
  font-weight: Normal;
}
.terms-content_text {
  max-width: 70%;
  margin: 0 auto;
  padding: 0 0 30px 0;
}
.terms-content_text p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_1 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_1_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_1_list ul {
  list-style: none;
  padding-left: 0;
}
.terms-content_1_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
}
.terms-content_2 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_2_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_2_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_2_list ul {
  list-style: none;
  padding-left: 24px;
}
.terms-content_2_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
}
.terms-content_3 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_3_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_3_list ul {
  list-style: none;
  padding-left: 0;
}
.terms-content_3_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
}
.terms-content_4 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_4_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_4_list ul {
  list-style: none;
  padding-left: 0;
}
.terms-content_4_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
}
.terms-content_5 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_5_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_5_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_5_list ul {
  list-style: none;
  padding-left: 15px;
}
.terms-content_5_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
}
.terms-content_6 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_6_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_6_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_6_list ul {
  list-style: none;
  padding-left: 15px;
}
.terms-content_6_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
}
.terms-content_7 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_7_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_7_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_7_list ul {
  list-style: none;
  padding-left: 15px;
}
.terms-content_7_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
}
.terms-content_8 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_8_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_8_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_9 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_9_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_9_list ul {
  list-style: none;
  padding-left: 15px;
}
.terms-content_9_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
}
.terms-content_10 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_10_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_10_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_11 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_11_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_11_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_12 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_12_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_12_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_13 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_13_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_13_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_14 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;
}
.terms-content_14_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_14_list p {
  letter-spacing: 3px;
  line-height: 2;
  padding: 10px 0;
}
.terms-content_15 {
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0 75px 0;
}
.terms-content_15_head h1 {
  letter-spacing: 5px;
  font-weight: Normal;
}
.terms-content_15_list ul {
  list-style: none;
  padding-left: 15px;
}
.terms-content_15_list ul li {
  padding: 10px 0;
  line-height: 2;
  letter-spacing: 3px;
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
