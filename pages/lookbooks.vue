<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title">Look-Book</h2>
      <div class="lookbooks-contents">
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/2021ss_01" class="link">
            <img src="../assets/images/lookbook/btn/portrait-btn.jpg" alt="">
            <h3 class="title">vivit</h3>
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/2021ss_02" class="link">
            <img src="../assets/images/lookbook/btn/portrait-btn.jpg" alt="">
            <h3 class="title">linen</h3>
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/2021ss_03" class="link">
            <img src="../assets/images/lookbook/btn/portrait-btn.jpg" alt="">
            <h3 class="title">はんそで</h3>
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/portrait" class="link">
            <img src="../assets/images/lookbook/btn/portrait-btn.jpg" alt="">
            <h3 class="title">Portrait</h3>
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/noon" class="link">
            <img src="../assets/images/lookbook/btn/noon-btn.jpg" alt="">
            <h3 class="title">Noon</h3>
          </nuxt-link>
        </div>
        <div class="lookbooks-btn">
          <nuxt-link to="/lookbook/night" class="link">
            <img src="../assets/images/lookbook/btn/night-btn.jpg" alt="">
            <h3 class="title">Night</h3>
          </nuxt-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: "lookbook",
    head() {
      return {
        title: 'Look-Book /'
      }
    }
  }
</script>
