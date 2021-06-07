<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title is-2 sub-title">2020</h2>
      <h3 class="title is-5 sub-title">night</h3>
      <div class="lookbook">
        <div class="lookbook look-block">
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/17.jpg" alt="">
            </div>
            <div class="side-by-side">
                <div class="lookbook look-item">
                    <img src="../../assets/images/lookbook/night/02.jpg" alt="">
                </div>
                <div class="look-item">
                    <img src="../../assets/images/lookbook/night/03.jpg" alt="">
                </div>
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/04.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/05.jpg" alt="">
            </div>
            <div class="look-item frame">
                <img src="../../assets/images/lookbook/night/18.jpg" alt="">
            </div>
                        <div class="look-item">
                <img src="../../assets/images/lookbook/night/10.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/11.jpg" alt="">
            </div>
            <div class="side-by-side">
                <div class="look-item">
                    <img src="../../assets/images/lookbook/night/14.jpg" alt="">
                </div>
                <div class="look-item">
                    <img src="../../assets/images/lookbook/night/12.jpg" alt="">
                </div>
            </div>
            <div class="look-item frame">
                <img src="../../assets/images/lookbook/night/09.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/15.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/01.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/23.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/07.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/08.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/19.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/20.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/21.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/night/22.jpg" alt="">
            </div>
        </div>
      </div>
    </article>
    <article class="article">
        <div class="lookbooks-table">
            <div class="lookbooks-btn">
                <nuxt-link to="/lookbook/portrait" class="link">
                    <img src="../../assets/images/lookbook/btn/portrait-btn.jpg" alt="">
                    <h3 class="title">Portrait</h3>
                </nuxt-link>
            </div>
            <div class="lookbooks-btn">
                <nuxt-link to="/lookbook/noon" class="link">
                        <img src="../../assets/images/lookbook/btn/noon-btn.jpg" alt="">
                        <h3 class="title">Noon</h3>
                </nuxt-link>
            </div>
        </div>
    </article>
  </div>
</template>


<script>
  export default {
    name: "night",
    head() {
      return {
        title: 'Night / Look-book /'
      }
    }
  }
</script>