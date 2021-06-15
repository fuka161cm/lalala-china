<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title is-2 sub-title">2020</h2>
      <h3 class="title is-5 sub-title">autumn</h3>

      <div class="lookbook">
        <div class="lookbook look-block">
            <div class="look-item">
                <img src="../../assets/images/lookbook/autumn/01.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/autumn/02.jpg" alt="">
            </div>
            <div class="look-item frame">
                <img src="../../assets/images/lookbook/autumn/03.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/autumn/04.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/autumn/05.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/autumn/06.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/autumn/07.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/autumn/08.jpg" alt="">
            </div>
            <div class="look-item">
                <img src="../../assets/images/lookbook/autumn/09.jpg" alt="">
            </div>
        </div>
      </div>
    </article>
    <article class="article">
        <div class="lookbooks-table">
            <div class="lookbooks-btn">
                <nuxt-link to="/lookbook/noon" class="link">
                    <img src="../../assets/images/lookbook/btn/noon-btn.jpg" alt="">
                    <h3 class="title">Noon</h3>
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
    name: "autumn",
    head() {
      return {
        title: 'Autumn / Look-Book /'
      }
    }
  }
</script>