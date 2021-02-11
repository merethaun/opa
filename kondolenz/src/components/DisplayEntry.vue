<template>
  <div class="entry wrapper">
    <div class="entry titlewrapper">
      <h1 class="entry font title" v-if="(title) && (title !== '')">{{ title }}</h1>
      <div style="display: flex; align-items: center;">
        <h1 class="entry font author">{{ author }}</h1>
        <h1 class="entry font date">{{ parsedDate }}</h1>
      </div>
    </div>
    <div class="entry imagewrapper" v-if="(imgs) && (imgs.length > 0)">
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
    imgs: Array,
    date: String
  },
  data () {
    return {
      currentIndexImage: 0,
      showLightbox: false,
      arrLightBox: [],
      parsedDate: ''
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
  },
  mounted () {
    let dateArray = this.date.split(' ')[0].split('-')
    var yearNumber = dateArray[0]
    var monthNumber = dateArray[1]
    var dayNumber = dateArray[2]

    var monthString
    switch (monthNumber) {
      case '01':
        monthString = 'Januar'
        break
      case '02':
        monthString = 'Februar'
        break
      case '03':
        monthString = 'März'
        break
      case '04':
        monthString = 'April'
        break
      case '05':
        monthString = 'Mai'
        break
      case '06':
        monthString = 'Juni'
        break
      case '07':
        monthString = 'Juli'
        break
      case '08':
        monthString = 'August'
        break
      case '09':
        monthString = 'September'
        break
      case '10':
        monthString = 'Oktober'
        break
      case '11':
        monthString = 'November'
        break
      default:
        monthString = 'Dezember'
    }
    this.parsedDate = '- ' + dayNumber + '. ' + monthString + ' ' + yearNumber
  }
}
</script>
