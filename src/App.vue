<template>
  <div id="app" class="wrapper">
    <Header />
    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
    <div class="to_top"></div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
@import "./assets/scss/style.scss";
</style>