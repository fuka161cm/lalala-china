<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title">Gallery</h2>
      <div class="thumbnail-item">
        <div v-for="gallery in allGallery" :key="gallery.id">
          <div v-if="gallery.pic">
            <img :src="gallery.pic.url" alt="pic" />
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: "gallery",
    data () {
      return {
        allGallery: []
      }
    },
    head() {
      return {
        title: 'Gallery /'
      }
    },
    mounted () {
      this.$api.getAllGallery()
        .then(response => {
          this.allGallery = response;
        });
    }
  }
</script>