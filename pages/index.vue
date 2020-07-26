<template>
  <div>
    <div class="hero-image"></div>
    <article class="article">
      <h3 class="title">Look-Book</h3>
      <div class="top-lookbooks-contents">
        <div class="top-lookbooks-btn">
          <nuxt-link to="/lookbook/portrait" class="link">
            <img src="../assets/images/lookbook/btn/portrait-btn.jpg" alt="">
          </nuxt-link>
        </div>
        <nuxt-link to="/lookbooks" class="link-more">More</nuxt-link>
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