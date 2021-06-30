<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title heading-title">about</h2>
      <img src="../assets/images/about/main-img.jpg" /> 
      <div class="intro">
        <p>
          ラララチャイナは、ハンドメイドのチャイナシャツブランドです。<br>
          "ふだん着のチャイナ服"をテーマに、一着一着丁寧に制作しています。<br>
          <br>
        </p>
        <img class="sub-img" src="../assets/images/about/about-illust.jpg" />
      </div>
    </article>  

    <article class="article">
      <h3 class="title is-3 sub-title">- Detail -</h3>
      <ul class="detail-list">
        <li class="detail-content">
          <img src="../assets/images/about/detail-02.jpg" /> 
          <h3>色と素材</h3>
          <p>
            チャイナシャツをふだん着として取り入れやすいよう、派手になりすぎない色を選んでいます。素材は綿を中心に使っているので、おうちで洗ってたくさん着ていただけます。
          </p>
        </li>
        <li  class="detail-content">
          <img src="../assets/images/about/detail-01.jpg" /> 
          <h3>チャイナボタン</h3>
          <p>
            裁断後に残った生地からひとつひとつ手づくりしています。シャツとは違う色のチャイナボタンを選び、新たな組み合わせを考えるのも楽しいです。
          </p>
        </li>
        <li class="detail-content">
          <img src="../assets/images/about/detail-03.jpg" /> 
          <h3>フリーサイズ</h3>
          <p>
            襟ぐりは広めに、袖丈は長めに作っているので、身長や体型を問わず、どなたでも着ていただけます。トップスとして、ジャケットとして、ワンピースとして・・・。様々な着こなしを楽しめます。
          </p>
        </li>
      </ul>
    </article>

    <article class="article">
      <h3 class="title is-3 sub-title">- Profile -</h3>
      <div class="profile">
        <img src="../assets/images/common/illust/lalala_china_03.jpg" alt="" class="profile-image" />
        <div class="profile-content">
          <h3 class="title is-4">Lala Okamoto</h3>
          <p>川島テキスタイルスクール卒業。<br>繊維メーカーを退職後、現在アパレルブランドで勤務中。</p>
          <p>Instagram : <a href="https://www.instagram.com/lala_okamoto/?hl=ja" target="_blank">@lala_okamoto</a></p>
          <p>
            // 展示会のお誘い、お問い合わせ等は<br>DMもしくは下記よりお願いいたします。<br>
            （★→@に変えて送信してください）
          </p>
          <div class="mailto">
            <a href="mailto:umurau★gmail.com">Send an e-mail</a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: "about",
    head() {
      return {
        title: 'about /'
      }
    }
  }
</script>