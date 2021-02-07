<template>
  <div class="entry wrapper">
    <div class="entry titlewrapper">
      <h1 class="entry font title">{{ title }}</h1>
      <h1 class="entry font author">{{ author }}</h1>
    </div>
    <div class="entry imagewrapper" v-if="(imgs)">
      <div>
        <img
          class="entry image"
          v-for="(img, index) in imgs"
          :key="id + '__' + index + '__' + img.caption"
          :src="img.path"
          @click="openGallery(index)"
        >
      </div>
    </div>
    <p class="entry font text">{{ text }}</p>

    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="imgs"
      @change="changeHighlight"
      :showCaption="false"
      >
    </vue-image-lightbox-carousel>
  </div>
</template>

<script>
import VueImageLightboxCarousel from 'vue-image-lightbox-carousel'

export default {
  name: 'DisplayEntry',
  props: {
    text: String,
    title: String,
    author: String,
    id: String,
    imgs: Array
  },
  data () {
    return {
      currentIndexImage: 0,
      showLightbox: false,
      arrLightBox: []
    }
  },
  components: {
    VueImageLightboxCarousel
  },
  methods: {
    changeHighlight (currentIndex) {
      this.currentIndexImage = currentIndex
      let arr = this.imgs
      arr.map((item, index) => {
        if (currentIndex === index) {
          item.highlight = 1
        } else {
          item.highlight = 0
        }
        return item
      })
    },
    openGallery (index) {
      this.showLightbox = true
      this.$refs.lightbox.showImage(index)
    },
    onOpenedLightBox (value) {
      if (value) {
        this.showLightbox = true
      } else {
        this.showLightbox = false
      }
    }
  }
}
</script>
