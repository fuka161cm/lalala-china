<template>
  <div>
    <div class="hero-image"></div>
    <article class="article">
      <h2 class="title is-2">NEWS</h2>
      <ul class="top-news">
        <li class="top-news-item">
          <router-link to="/news">2020.02.21-22<br>『スーパーチャイナ at 壬生モクレン』に参加します！</router-link>
        </li>
      </ul>
    </article>

    <article class="article">
      <h2 class="title is-2">PRODUCT</h2>
      <ul class="main-article">
        <li class="main-article-item">
          <router-link to="/product01" class="link">
            <div class="link-imgWrap">
              <img src="../assets/images/top/product01.jpg" alt="">
            </div>
          </router-link>
        </li>
        <li class="main-article-item">
          <router-link to="/product02" class="link">
            <div class="link-imgWrap">
              <img src="../assets/images/top/product02.jpg" alt="">
            </div>
          </router-link>
        </li>
        <li class="main-article-item">
          <router-link to="/product03" class="link">
            <div class="link-imgWrap">
              <img src="../assets/images/top/product03.jpg" alt="">
            </div>
          </router-link>
        </li>
      </ul>
    </article>

    <article class="article">
      <h2 class="title is-2">LOOK BOOK</h2>
      <ul class="main-article">
        <li class="main-article-item">
          <router-link to="/look-book/tiger" class="link">
          <div class="link-imgWrap">
            <img src="../assets/images/top/style-book_01.jpg" alt="">
          </div>
          </router-link>
        </li>
        <li class="main-article-item">
          <router-link to="/look-book/muraya"  class="link">
          <div class="link-imgWrap">
           <img src="../assets/images/top/style-book_02.jpg" alt="">
          </div>
          </router-link>
        </li>
      </ul>
    </article>
   


    <article class="article">
        <div class="profile">
          <img src="../assets/images/common/illust/lalala_china_03.jpg" alt="" class="profile-image">
          <div class="profile-content">
            <h2 class="title is-2">ABOUT</h2> 
            <h3 class="title is-4">Lala Okamoto</h3>
            <p>川島テキスタイルスクール卒業。繊維メーカーを退職後、現在アパレルブランドで勤務中。</p>
            <p>Twitter : <a href="https://twitter.com/shosenn" target="_blank">@shosenn</a></p>
            <p>Instagram : <a href="https://www.instagram.com/lala_okamoto/?hl=ja" target="_blank">@lala_okamoto</a></p>  
          </div>
        </div>
    </article>
  </div>
</template>
        




<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
