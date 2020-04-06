<template>
  <div class="child-content">
    <article class="article">
      <h2 class="title">Gallery</h2>
      <div class="gallery-nav">
        <ul>
          <li class="title is-4">
            <div class="li-container">
              <div class="line"></div>
              <h3 class="title">China-shirt(short)</h3>
            </div>
          </li>
        </ul>
      </div>
    </article>
    <article class="article">
      <h3 class="title sub-title" id="china-shirt-short">China-shirt(short)</h3>
      <div class="thumbnail">
        <div class="thumbnail-item"><img src="../assets/images/gallery/short/short1.jpg"></div>
        <div class="thumbnail-item"><img src="../assets/images/gallery/short/short2.jpg"></div>
        <div class="thumbnail-item"><img src="../assets/images/gallery/short/short3.jpg"></div>
      </div>
      <p class="item-length">着丈53cm / 袖丈60cm</p>
    </article>
  </div>
</template>

<script>
  export default {
    name: "gallery",
    head() {
      return {
        title: 'Gallery ||'
      }
    }
  }
</script>