<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title">lookbook</h2>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/2021ss_01" class="link">
            <img src="../assets/images/lookbook/btn/2021ss_01.jpg" alt="">
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/2021ss_02" class="link">
            <img src="../assets/images/lookbook/btn/2021ss_02.jpg" alt="">
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/2021ss_03" class="link">
            <img src="../assets/images/lookbook/btn/2021ss_03.jpg" alt="">
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/autumn" class="link">
            <img src="../assets/images/lookbook/btn/autumn.jpg" alt="">
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/portrait" class="link">
            <img src="../assets/images/lookbook/portrait/14.jpg" alt="">
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/noon" class="link">
            <img src="../assets/images/lookbook/noon/05.jpg" alt="">
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/night" class="link">
            <img src="../assets/images/lookbook/night/19.jpg" alt="">
          </nuxt-link>
        </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: "lookbook",
    head() {
      return {
        title: 'lookbook /'
      }
    }
  }
</script>
