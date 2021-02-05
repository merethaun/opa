<template>
  <div
    class="entry imagewrapper uploadimagewrapper"
    @drag="preventEvent"
    @dragstart="preventEvent"
    @dragend="preventEvent"
    @dragover="preventEvent"
    @dragenter="preventEvent"
    @dragleave="preventEvent"
    @drop="preventEvent"
  >
    <div>
      <div class="entry image inputimage" v-if="isDragover">
        <div class="icon wrapper">
          <svg class="icon" viewBox="0 0 512 512"><path d="M444.5 15C407.7 15 378 44.8 378 81.5s29.8 66.5 66.5 66.5S511 118.2 511 81.5 481.2 15 444.5 15zm29.4 72.4h-23.5l.1 25.9c0 3.2-2.6 5.8-5.8 5.9-3.2 0-5.8-2.6-5.8-5.8l-.1-26h-23.6c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8h23.5l-.1-25.9c0-3.2 2.6-5.8 5.8-5.9 3.2 0 5.8 2.6 5.8 5.8l.1 26h23.6c3.3 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8zM199.3 191.3c21.5 0 38.9 17.6 38.9 39.3s-17.4 39.3-38.9 39.3-38.9-17.6-38.9-39.3c0-21.7 17.5-39.3 38.9-39.3zm185.4 201.3H86.3c-6.5 0-11.9-5.3-11.9-11.9v-32.4c0-2.5.7-4.8 2.1-6.9l41.3-58.4c3.7-5.2 10.8-6.5 16.1-3.1l56.4 36.8c4.5 3 10.3 2.5 14.4-1L313 220.1c5.1-4.5 13.1-3.8 17.2 1.7l61.5 79.7c1.6 2 2.5 4.6 2.5 7.2v74.4c0 5.2-4.3 9.5-9.5 9.5zm7.9 117.6h-58.8v-12h58.8v12zm-78.4 0h-58.8v-12h58.8v12zm-78.5 0h-58.8v-12h58.8v12zm-78.4 0H98.4v-12h58.8v12h.1zm-78.5 0H57.7c-14.3 0-27.9-5.4-38.3-15.3l8.3-8.7c8.2 7.8 18.8 12 30.1 12h21.1l-.1 12zm333.6-.1l-.3-12c17.8-.4 33.4-11.5 39.8-28.2l11.2 4.3c-8.1 21.3-28 35.4-50.7 35.9zM6.8 477c-3.2-7.1-4.7-14.7-4.7-22.5v-38.2h12v38.2c0 6.1 1.3 12.1 3.7 17.6l-11 4.9zm459.9-24.1h-12v-58.8h12v58.8zM14.1 396.7h-12v-58.8h12v58.8zm452.6-22.3h-12v-58.8h12v58.8zM14.1 318.3h-12v-58.8h12v58.8zM466.7 296h-12v-58.8h12V296zM14.1 239.8h-12V181h12v58.8zm452.6-22.2h-12v-58.8h12v58.8zM14.1 161.4h-12v-58.8h12v58.8zm2.4-76.1L5.3 81.2C13 59.9 33.4 45.5 56.1 45.5h.2v12h-.2c-17.7 0-33.6 11.2-39.6 27.8zm353.6-27.8h-58.8v-12h58.8v12zm-78.5 0h-58.8v-12h58.8v12zm-78.4 0h-58.8v-12h58.8v12zm-78.5 0H75.9v-12h58.8v12z"></path></svg>
        </div>
        <div class="text wrapper">
          <label class="text">{{dropText}}</label>
        </div>
        <div class="dropfield" @drop="onDrop"/>
      </div>
      <div class="entry image inputimage" v-else @dragover.prevent="onDragover">
        <div class="icon wrapper">
          <svg class="icon" viewBox="0 0 512 512"><path d="M383.6 229l-.5 1.5.7 1.7c-.2-1.1-.2-2.2-.2-3.2zm-119.7-5.4l-.3 1.4.6 1.3c-.2-.8-.3-1.8-.3-2.7zm62.4 3.8l-.2 1 .5 1.1-.3-2.1z"></path><path d="M483 326.2l-43.5-100.5c-3.6-8.4-10.3-14.9-18.7-18.4-8.5-3.6-17.8-3.5-26.1.1L391 209c-3.3 1.4-6.1 3.6-8.4 6.3-3.6-8.2-10.2-14.6-18.6-18-8.5-3.4-17.7-3.3-26.1.3-6.1 2.7-10.9 6.8-13.9 12-3.7-8-10.2-14.3-18.4-17.6-8.5-3.4-17.8-3.3-26.1.3l-3.7 1.6c-6.3 2.7-11.2 7.1-14.3 12.4l-20.3-46.9c-4.2-9.8-10.7-16.8-18.7-20.2-8.1-3.5-17.2-3.2-26.5.8l-3.7 1.6c-8 3.5-13.3 9.3-15.5 16.9-2.1 7.3-1 16.2 3.1 25.6l83.4 188.2-64.7-39.8c-11.2-6.8-25.7-4.7-34.4 5.1-11.3 12.5-10.3 31.9 2 43.3l55.8 51.5 50.8 43.4c17.6 16.7 38.2 28.1 59.6 32.9 7.7 1.7 15.5 2.5 23.2 2.5 14.9 0 29.7-3.1 44.2-9.4l27.9-12.1c31.2-13.5 52.8-37.1 62.6-68.4 9.2-29.2 6.6-63-7.3-95.1zM383.6 229c0 1 .1 2.1.2 3.1l-.7-1.7.5-1.4zM281.7 466.6c-.2-.2-.5-.5-.7-.6l-50.4-43.1-55.6-51.5c-7.3-6.7-7.9-18.2-1.2-25.6 4.7-5.3 12.5-6.4 18.5-2.6l65.6 40.2c4.7 2.9 10.4 2.4 14.5-1.3 4.1-3.6 5.3-9.2 3.2-14.2l-83.7-189c-3.2-7.4-3.9-13.4-2.1-18.1 1.7-4.3 5.2-6.5 7.9-7.7l3.7-1.6c12.3-5.3 22.8-.6 28.6 12.9L310.2 350c1.4 3.2 5.1 4.6 8.3 3.3 3.2-1.4 4.7-5.1 3.3-8.3l-48.7-112.5c-2.2-5.2-3-10.8-2-15.4 1.1-5.4 4.5-9.3 9.9-11.7l3.7-1.6c5.3-2.3 11.1-2.3 16.4-.2 5.3 2.2 9.5 6.3 11.8 11.6l43.9 101.5c.7 1.6 1.9 2.7 3.5 3.4 1.6.6 3.3.6 4.8-.1 3.2-1.4 4.7-5.1 3.3-8.3l-32.8-75.9c-8.2-18.9 4.8-25.6 7.5-26.8 10.8-4.7 23.5.4 28.2 11.3l28.9 66.7c1.4 3.2 5.1 4.7 8.3 3.3 3.2-1.4 4.7-5.1 3.3-8.3l-19.4-44.8c-1.3-3-4.9-13.2 3.8-16.9l3.7-1.6c5.2-2.3 11.1-2.3 16.4 0 5.3 2.3 9.6 6.4 11.9 11.8L471.7 331c12.7 29.3 15.1 59.9 6.8 86.3-8.7 27.6-27.9 48.5-55.6 60.5L395 489.9c-38.9 16.9-80.1 8.4-113.3-23.3zm44.6-239.2l.3 2.1-.5-1.1.2-1zm-62.4-3.8l.3 2.7-.6-1.3.3-1.4zM31 217c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7zm0-66.3c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.1 2.8 5.7 6 5.7zM148 296h-40c-3.2 0-5.7 2.3-5.7 5.5s2.6 5.5 5.7 5.5h40c3.2 0 5.7-2.3 5.7-5.5s-2.6-5.5-5.7-5.5zM37 237.6c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-40zM31 84.4c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.1 2.8 5.7 6 5.7zM81.6 296H49.1c-1.7 0-3.4-.6-5-1.3-2.9-1.3-6.3-.1-7.5 2.8-1.3 2.9 0 6.3 2.9 7.5 3 1.3 6.3 2 9.6 2h32.5c3.2 0 5.7-2.3 5.7-5.5s-2.5-5.5-5.7-5.5zm60.6-281c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.6 6 5.7 6h40z"></path><path d="M323 122.4c-3.2 0-6 2.6-6 5.7v39.2c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-39.2c0-3.1-2.8-5.7-6-5.7zm6-60.6c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-40zM301.2 15h3.6c6.8 0 12.2 5.6 12.2 12.4v8.1c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-8.1C329 14.3 317.9 3 304.8 3h-3.6c-3.2 0-5.7 2.8-5.7 6s2.5 6 5.7 6zm-66.3 0h40c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.5 6 5.7 6zm-60.6 292h40c3.2 0 5.7-2.3 5.7-5.5s-2.6-5.5-5.7-5.5h-40c-3.2 0-5.7 2.3-5.7 5.5s2.5 5.5 5.7 5.5zm-5.8-292h40c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.6 6 5.7 6zM37.1 19.8c1.4 0 2.7-.6 3.8-1.5 2.3-2 5.2-3.2 8.2-3.2h26.8c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6H49.1c-5.9 0-11.5 2.5-15.9 6.5-2.3 2.1-2.5 5.9-.4 8.2 1.1 1.2 2.7 2 4.3 2z"></path></svg>
        </div>
        <div class="text wrapper">
          <label class="text">{{dragText}}</label>
          <br>
          <label class="sub-text">{{browseText}}</label>
        </div>
        <div class="image-input field">
          <label :for="idUpload">
          </label>
        </div>
      </div>

      <div class="image-preview">
        <div
          class="entry image"
          v-for="img in images"
          :key="img.caption">
            <img class="show-img img-responsive" :src="img.path">
            <a class="image-delete display-flex cursor-pointer" @click.prevent="deleteImage(currentIndexImage)">
              <svg class="image-icon-delete" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M448 64h-96V0H159.9l.066 64H32v32h32v416h384V96h32V64h-32zM192 32h128v32H192V32zm224 448H96V96h320v384zM192 160h32v256h-32V160zm96 0h32v256h-32V160z"></path></svg>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { forEach, findIndex, orderBy, cloneDeep } from 'lodash'
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/vue-popper.css'
import VueImageLightboxCarousel from 'vue-image-lightbox-carousel'
export default {
  name: 'UploadImages',
  props: {
    idUpload: {
      type: String,
      default: 'image-upload'
    },
    idEdit: {
      type: String,
      default: 'image-edit'
    }
  },
  data: function () {
    return {
      currentIndexImage: 0,
      images: [],
      isDragover: false,
      showLightbox: false,
      arrLightBox: [],
      count: 0,
      dragText: 'Bild hierauf ziehen (mehrfach)',
      browseText: '(oder) Wählen Sie',
      dropText: 'Legen Sie Ihre Datei hier ab ...',
      accept: 'image/gif,image/jpeg,image/png,image/bmp,image/jpg',
      maxImage: 10
    }
  },
  components: {
    Popper,
    VueImageLightboxCarousel
  },
  computed: {
    imagePreview () {
      let index = findIndex(this.images, { highlight: 1 })
      if (index > -1) {
        return this.images[index].path
      } else {
        return this.images.length ? this.images[0].path : ''
      }
    },
    imageDefault () {
      if (this.images[this.currentIndexImage]) {
        return this.images[this.currentIndexImage].default
      } else {
        return null
      }
    }
  },
  methods: {
    preventEvent (e) {
      e.preventDefault()
      e.stopPropagation()
    },
    onDrop (e) {
      this.isDragover = false
      e.stopPropagation()
      e.preventDefault()
      let files = e.dataTransfer.files
      if (!files.length) {
        return false
      }
      if (!this.isValidNumberOfImages(files.length)) {
        return false
      }
      forEach(files, (value, index) => {
        this.createImage(value)
        if (!this.multiple) {
          return false
        }
      })
      if (document.getElementById(this.idUpload)) {
        document.getElementById(this.idUpload).value = []
      }
    },
    onDragover () {
      this.isDragover = true
    },
    createImage (file) {
      let reader = new FileReader()
      let formData = new FormData()
      formData.append('file', file)
      reader.onload = (e) => {
        let dataURI = e.target.result
        if (dataURI) {
          if (!this.images.length) {
            this.images.push({name: file.name, path: dataURI, highlight: 1, default: 1})
            this.currentIndexImage = 0
          } else {
            this.images.push({name: file.name, path: dataURI, highlight: 0, default: 0})
          }
          this.$emit('upload-success', formData, this.images.length - 1, this.images)
        }
      }
      reader.readAsDataURL(file)
    },
    editImage (file) {
      let reader = new FileReader()
      let formData = new FormData()
      formData.append('file', file)
      reader.onload = (e) => {
        let dataURI = e.target.result
        if (dataURI) {
          if (this.images.length && this.images[this.currentIndexImage]) {
            this.images[this.currentIndexImage].path = dataURI
            this.images[this.currentIndexImage].name = file.name
          }
        }
      }
      reader.readAsDataURL(file)
      this.$emit('edit-image', formData, this.currentIndexImage, this.images)
    },
    uploadFieldChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return false
      }
      if (!this.isValidNumberOfImages(files.length)) {
        return false
      }
      forEach(files, (value, index) => {
        this.createImage(value)
      })
      if (document.getElementById(this.idUpload)) {
        document.getElementById(this.idUpload).value = []
      }
    },
    editFieldChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return false
      }
      if (!this.isValidNumberOfImages(files.length)) {
        return false
      }
      forEach(files, (value, index) => {
        this.editImage(value)
      })
      if (document.getElementById(this.idEdit)) {
        document.getElementById(this.idEdit).value = ''
      }
    },
    changeHighlight (currentIndex) {
      this.currentIndexImage = currentIndex
      let arr = this.images
      this.images = []
      arr.map((item, index) => {
        if (currentIndex === index) {
          item.highlight = 1
        } else {
          item.highlight = 0
        }
        return item
      })
      this.images = arr
    },
    markIsPrimary (currentIndex) {
      this.images.map((item, index) => {
        if (currentIndex === index) {
          item.highlight = 1
          item.default = 1
        } else {
          item.highlight = 0
          item.default = 0
        }
        return item
      })
      this.currentIndexImage = 0
      this.images = orderBy(this.images, 'default', 'desc')
      this.$emit('mark-is-primary', currentIndex, this.images)
    },
    deleteImage (currentIndex) {
      this.$emit('before-remove', currentIndex, () => {
        if (this.images[currentIndex].default === 1) {
          this.images[0].default = 1
        }
        this.images.splice(currentIndex, 1)
        this.currentIndexImage = 0
        if (this.images.length) {
          this.images[0].highlight = 1
        }
      }, this.images)
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
    },
    isValidNumberOfImages (amount) {
      if (amount > this.maxImage) {
        this.$emit('limit-exceeded', amount)
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    dataImages: {
      handler: function (newVal) {
        this.images = newVal
      },
      deep: true
    }
  },
  mounted () {
    document.addEventListener('dragleave', (event) => {
      event.stopPropagation()
      event.preventDefault()
      this.isDragover = false
    })
  },
  created () {
    this.images = []
    this.images = cloneDeep(this.dataImages)
  }
}
</script>

<style scoped>
  .uploadimagewrapper {
    margin-left: -55px;
    margin-right: -75px;
  }

  .inputimage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--grey);
    border-radius: 5px;
    width: 250px;
  }

  .icon.wrapper {
    width: 50px;
    height: 50px;
  }

  .text.wrapper {
    text-align: center;
  }

  .dropfield {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .image-input {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    opacity: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .image-input>label {
    display: block;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 750px) {
    .uploadimagewrapper {
      margin-left: -25px;
      margin-right: -25px;
    }
  }
</style>
