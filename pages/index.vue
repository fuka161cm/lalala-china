<template>
  <div>
    <div class="hero-image"></div>
    <article class="article">
      <h2 class="title is-2">NEWS</h2>
      <ul class="top-news">
        <li class="top-news-item">
          <nuxt-link to="/news">2020.02.21-22<br>『スーパーチャイナ at 壬生モクレン』に参加します。</nuxt-link>
        </li>
      </ul>
    </article>

    <article class="article">
      <h2 class="title is-2">LOOK BOOK</h2>
      <ul class="main-article">
        <li class="main-article-item">
          <nuxt-link to="/lookbook/tiger" class="link">
          <div class="link-imgWrap">
            <img src="../assets/images/top/style-book_01.jpg" alt="">
          </div>
          </nuxt-link>
        </li>
        <li class="main-article-item">
          <nuxt-link to="/lookbook/muraya"  class="link">
          <div class="link-imgWrap">
           <img src="../assets/images/top/style-book_02.jpg" alt="">
          </div>
          </nuxt-link>
        </li>
      </ul>
    </article>
  </div>
</template>
        




<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
