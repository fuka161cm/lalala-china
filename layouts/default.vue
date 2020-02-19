<template>
  <div class="wrapper">
    <Header />
    <main>
      <nuxt />
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
  }
};
</script>

<style>
</style>