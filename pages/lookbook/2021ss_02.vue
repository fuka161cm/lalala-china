<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title is-2 sub-title">2021SS</h2>
      <h3 class="title is-5 sub-title">リネンのラララチャイナ</h3>
      <div class="lookbook">
        <div class="lookbook look-block">
            <div class="look-item">
                <img src="../../assets/images/lookbook/2021ss_02/09.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/2021ss_02/02.jpg" alt="">
            </div>
            <div class="look-item frame">
                <img src="../../assets/images/lookbook/2021ss_02/03.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/2021ss_02/04.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/2021ss_02/08.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/2021ss_02/05.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/2021ss_02/06.jpg" alt="">
            </div>
            <div class="look-item frame">
                <img src="../../assets/images/lookbook/2021ss_02/07.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/2021ss_02/01.jpg" alt="">
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
            <nuxt-link to="/lookbook/night" class="link">
                    <img src="../../assets/images/lookbook/btn/night-btn.jpg" alt="">
                    <h3 class="title">Night</h3>
            </nuxt-link>
            </div>
        </div>
   </article>
  </div>
</template>

<script>
  export default {
    name: "2021ss_02",
    head() {
      return {
        title: '2021SS / Look-book /'
      }
    }
  }
</script>