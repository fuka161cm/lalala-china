<template>
  <header>
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link @click.native="closeNav()" class="navbar-item" to="/">
            <img src="../assets/images/common/logo.png" />
          </router-link>

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
            <router-link  @click.native="closeNav()" class="navbar-item" to="/">HOME</router-link>
            <router-link  @click.native="closeNav()" class="navbar-item" to="/news">NEWS</router-link>
            <router-link  @click.native="closeNav()" class="navbar-item" to="/product01">China-shirt(short)</router-link>
            <router-link  @click.native="closeNav()" class="navbar-item" to="/product02">China-shirt(long)</router-link>
            <router-link  @click.native="closeNav()" class="navbar-item" to="/product03">China-long-shirt</router-link>
            <router-link  @click.native="closeNav()" class="navbar-item" to="/look-book/tiger">LOOKBOOK-01</router-link>
            <router-link  @click.native="closeNav()" class="navbar-item" to="/look-book/muraya">LOOKBOOK-02</router-link>
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
