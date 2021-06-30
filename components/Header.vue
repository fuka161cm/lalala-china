<template>
  <header>
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link @click.native="closeNav()" class="navbar-item" to="/">
            <img src="../assets/images/common/logo.png" />
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger burger"
            :class="{ 'is-active': isActive }"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="toggleNav()"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <nuxt-link  @click.native="closeNav()" class="navbar-item" to="/">home</nuxt-link>
            <nuxt-link  @click.native="closeNav()" class="navbar-item" to="/lookbooks">lookbook</nuxt-link>
            <nuxt-link  @click.native="closeNav()" class="navbar-item" to="/gallery">gallery</nuxt-link>
            <nuxt-link  @click.native="closeNav()" class="navbar-item" to="/news">news</nuxt-link>
            <nuxt-link  @click.native="closeNav()" class="navbar-item" to="/about">about</nuxt-link>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav () {
      this.isActive = !this.isActive;
    },
    closeNav () {
      if (this.isActive) {
        this.isActive = false;
      }
    }
  }
}
</script>