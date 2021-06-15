<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title is-2 sub-title">2020</h2>
      <h3 class="title is-5 sub-title">noon</h3>
      <div class="lookbook">
        <div class="lookbook look-block">
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/01.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/02.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/03.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/04.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/05.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/06.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/10.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/07.jpg" alt="">
            </div>
            <div class="look-item frame">
                <img src="../../assets/images/lookbook/noon/09.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/11.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/12.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/13.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/14.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/noon/15.jpg" alt="">
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
    name: "noon",
    head() {
      return {
        title: 'Noon / Look-book /'
      }
    }
  }
</script>