<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title">news</h2>
      <div v-for="news in allNews" :key="news.id" class="news-info-top">
        <h3>{{ news.date }}</h3>
        <div class="news-images">
          <div v-if="news.image">
            <img :src="news.image.url" class="news-image-w2 frame" alt="image" />
          </div>
          <div v-if="news.image2">
            <img :src="news.image2.url" class="news-image-w2 frame" alt="image" />
          </div>
        </div>
        <span class="news-body" v-html="news.body" />
      </div>
      <!-- <nuxt-link to="/past_exhibition" class="link-more">⇒</nuxt-link> -->
    </article>
  </div>
</template>

<script>
  export default {
    name: "news",
    data () {
      return {
        allNews: []
      }
    },
    head() {
      return {
        title: 'news /'
      }
    },
    mounted () {
      this.$api.getAllNews()
        .then(response => {
          this.allNews = response;
        });
    }
  }
</script>