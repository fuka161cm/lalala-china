<template>
  <div>
    <div class="hero-image"></div>
    <article class="article news">
      <h2 class="title is-2">NEWS</h2>
      <ul class="top-news">
        <li class="top-news-item">
          <router-link to="/news">2020.02.22 展示会を開催します</router-link>
        </li>
      </ul>
    </article>

   

    <article class="article">
      <h2 class="title is-2">LOOK BOOK</h2>
      <ul class="style-book">
        <li class="style-book-item">
          <router-link to="/look-book/tiger" class="link">
            <img src="../assets/images/top/style-book_01.jpg" alt="">
            <span class="icon icon-link">
              <i class="fas fa-arrow-right"></i>
          </span>
          </router-link>
        </li>
        <li class="style-book-item">
          <router-link to="/look-book/muraya"  class="link">
           <img src="../assets/images/top/style-book_03.jpg" alt="">
           <span class="icon icon-link">
              <i class="fas fa-arrow-right"></i>
           </span>
          </router-link>
        </li>
      </ul>
    </article>

    <article class="article">
      <h2 class="title is-2">PRODUCT</h2>
      <router-link to="/product" class="link">
        <img src="../assets/images/top/product.jpg" alt="">
        <span class="icon icon-link">
          <i class="fas fa-arrow-right"></i>
        </span>
      </router-link>
    </article>

    <article class="article">
      <h2 class="title is-2">ABOUT</h2>
        <p>ラララチャイナは性別や体型を問わず、シャツのように毎日着ることができる、ふだんぎのチャイナ服です。</p>
        <div class="profile">
          <img src="../assets/images/common/illust/lalala_china_03.jpg" alt="" class="profile-image">
          <div class="profile-content">
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
