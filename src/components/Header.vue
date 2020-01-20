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
            <router-link  @click.native="closeNav()" class="navbar-item" to="/">Home</router-link>
            <router-link  @click.native="closeNav()" class="navbar-item" to="/news">News</router-link>
            <router-link  @click.native="closeNav()" class="navbar-item" to="/product">Product</router-link>
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
