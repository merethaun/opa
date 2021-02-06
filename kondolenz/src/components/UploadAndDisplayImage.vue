<template>
  <div
    class="entry imagewrapper uploadimagewrapper"
    style="margin-top: 10px;"
    @drag="preventEvent"
    @dragstart="preventEvent"
    @dragend="preventEvent"
    @dragover="preventEvent"
    @dragenter="preventEvent"
    @dragleave="preventEvent"
    @drop="preventEvent"
  >
    <div>
      <!-- input image -->
      <div class="entry image inputimage">
        <div class="icon wrapper">
          <svg class="icon_" viewBox="0 0 512 512"><path d="M383.6 229l-.5 1.5.7 1.7c-.2-1.1-.2-2.2-.2-3.2zm-119.7-5.4l-.3 1.4.6 1.3c-.2-.8-.3-1.8-.3-2.7zm62.4 3.8l-.2 1 .5 1.1-.3-2.1z"></path><path d="M483 326.2l-43.5-100.5c-3.6-8.4-10.3-14.9-18.7-18.4-8.5-3.6-17.8-3.5-26.1.1L391 209c-3.3 1.4-6.1 3.6-8.4 6.3-3.6-8.2-10.2-14.6-18.6-18-8.5-3.4-17.7-3.3-26.1.3-6.1 2.7-10.9 6.8-13.9 12-3.7-8-10.2-14.3-18.4-17.6-8.5-3.4-17.8-3.3-26.1.3l-3.7 1.6c-6.3 2.7-11.2 7.1-14.3 12.4l-20.3-46.9c-4.2-9.8-10.7-16.8-18.7-20.2-8.1-3.5-17.2-3.2-26.5.8l-3.7 1.6c-8 3.5-13.3 9.3-15.5 16.9-2.1 7.3-1 16.2 3.1 25.6l83.4 188.2-64.7-39.8c-11.2-6.8-25.7-4.7-34.4 5.1-11.3 12.5-10.3 31.9 2 43.3l55.8 51.5 50.8 43.4c17.6 16.7 38.2 28.1 59.6 32.9 7.7 1.7 15.5 2.5 23.2 2.5 14.9 0 29.7-3.1 44.2-9.4l27.9-12.1c31.2-13.5 52.8-37.1 62.6-68.4 9.2-29.2 6.6-63-7.3-95.1zM383.6 229c0 1 .1 2.1.2 3.1l-.7-1.7.5-1.4zM281.7 466.6c-.2-.2-.5-.5-.7-.6l-50.4-43.1-55.6-51.5c-7.3-6.7-7.9-18.2-1.2-25.6 4.7-5.3 12.5-6.4 18.5-2.6l65.6 40.2c4.7 2.9 10.4 2.4 14.5-1.3 4.1-3.6 5.3-9.2 3.2-14.2l-83.7-189c-3.2-7.4-3.9-13.4-2.1-18.1 1.7-4.3 5.2-6.5 7.9-7.7l3.7-1.6c12.3-5.3 22.8-.6 28.6 12.9L310.2 350c1.4 3.2 5.1 4.6 8.3 3.3 3.2-1.4 4.7-5.1 3.3-8.3l-48.7-112.5c-2.2-5.2-3-10.8-2-15.4 1.1-5.4 4.5-9.3 9.9-11.7l3.7-1.6c5.3-2.3 11.1-2.3 16.4-.2 5.3 2.2 9.5 6.3 11.8 11.6l43.9 101.5c.7 1.6 1.9 2.7 3.5 3.4 1.6.6 3.3.6 4.8-.1 3.2-1.4 4.7-5.1 3.3-8.3l-32.8-75.9c-8.2-18.9 4.8-25.6 7.5-26.8 10.8-4.7 23.5.4 28.2 11.3l28.9 66.7c1.4 3.2 5.1 4.7 8.3 3.3 3.2-1.4 4.7-5.1 3.3-8.3l-19.4-44.8c-1.3-3-4.9-13.2 3.8-16.9l3.7-1.6c5.2-2.3 11.1-2.3 16.4 0 5.3 2.3 9.6 6.4 11.9 11.8L471.7 331c12.7 29.3 15.1 59.9 6.8 86.3-8.7 27.6-27.9 48.5-55.6 60.5L395 489.9c-38.9 16.9-80.1 8.4-113.3-23.3zm44.6-239.2l.3 2.1-.5-1.1.2-1zm-62.4-3.8l.3 2.7-.6-1.3.3-1.4zM31 217c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7zm0-66.3c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.1 2.8 5.7 6 5.7zM148 296h-40c-3.2 0-5.7 2.3-5.7 5.5s2.6 5.5 5.7 5.5h40c3.2 0 5.7-2.3 5.7-5.5s-2.6-5.5-5.7-5.5zM37 237.6c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-40zM31 84.4c3.2 0 6-2.6 6-5.7v-40c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.1 2.8 5.7 6 5.7zM81.6 296H49.1c-1.7 0-3.4-.6-5-1.3-2.9-1.3-6.3-.1-7.5 2.8-1.3 2.9 0 6.3 2.9 7.5 3 1.3 6.3 2 9.6 2h32.5c3.2 0 5.7-2.3 5.7-5.5s-2.5-5.5-5.7-5.5zm60.6-281c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.6 6 5.7 6h40z"></path><path d="M323 122.4c-3.2 0-6 2.6-6 5.7v39.2c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-39.2c0-3.1-2.8-5.7-6-5.7zm6-60.6c0-3.2-2.8-5.7-6-5.7s-6 2.6-6 5.7v40c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-40zM301.2 15h3.6c6.8 0 12.2 5.6 12.2 12.4v8.1c0 3.2 2.8 5.7 6 5.7s6-2.6 6-5.7v-8.1C329 14.3 317.9 3 304.8 3h-3.6c-3.2 0-5.7 2.8-5.7 6s2.5 6 5.7 6zm-66.3 0h40c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.5 6 5.7 6zm-60.6 292h40c3.2 0 5.7-2.3 5.7-5.5s-2.6-5.5-5.7-5.5h-40c-3.2 0-5.7 2.3-5.7 5.5s2.5 5.5 5.7 5.5zm-5.8-292h40c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6h-40c-3.2 0-5.7 2.8-5.7 6s2.6 6 5.7 6zM37.1 19.8c1.4 0 2.7-.6 3.8-1.5 2.3-2 5.2-3.2 8.2-3.2h26.8c3.2 0 5.7-2.8 5.7-6s-2.6-6-5.7-6H49.1c-5.9 0-11.5 2.5-15.9 6.5-2.3 2.1-2.5 5.9-.4 8.2 1.1 1.2 2.7 2 4.3 2z"></path></svg>
        </div>
        <div class="text wrapper">
          <label class="sub-text">{{browseText}}</label>
        </div>
        <!-- what happens if click (browse option) -->
        <div class="image-input position-absolute full-width full-height">
          <label :for="idUpload" class="full-width full-height cursor-pointer"/>
        </div>
      </div>

      <!-- image diplay -->
      <div class="entry image" style="border-radius: 5px; height: 100%; position: relative;" v-for="entry in reverseImages" :key="entry.index">
        <img style="border-radius: 5px; height: 100%;" :src="entry.img.path">
        <div class="entry image display label" @click.prevent="deleteImage(entry.index)">
          <svg style="height: 15px; padding: 0; margin: 0;" class="icon_" width="512" height="512" viewBox="0 0 512 512"><path d="M448 64h-96V0H159.9l.066 64H32v32h32v416h384V96h32V64h-32zM192 32h128v32H192V32zm224 448H96V96h320v384zM192 160h32v256h-32V160zm96 0h32v256h-32V160z"></path></svg>
          <label class="text" style="font-size: small; margin-left: -5px; cursor: pointer; color: white; font-weight: 50;">Bild entfernen</label>
        </div>
      </div>

      <div>
        <input style="display: none" :id="idUpload" @change="uploadFieldChange" name="images" :multiple="multiple" :accept="accept" type="file">
        <input style="display: none" :id="idEdit" @change="editFieldChange" name="image" :accept="accept" type="file">
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

  name: 'UploadAndDisplayImage',

  props: {
    dataImages: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data () {
    return {
      currentIndexImage: 0,
      images: [],
      isDragover: false,
      showLightbox: false,
      arrLightBox: [],
      browseText: 'Bild auswählen (einzeln)',
      accept: 'image/gif,image/jpeg,image/png,image/bmp,image/jpg',
      multiple: true,
      showPrimary: true,
      maxImage: 5,
      idUpload: 'image-upload',
      idEdit: 'image-edit'
    }
  },
  components: {
    Popper,
    VueImageLightboxCarousel
  },
  computed: {
    reverseImages () {
      let imgReverse = []
      for (var i = this.images.length - 1; i >= 0; i--) {
        imgReverse.push({
          img: this.images[i],
          index: i
        })
      }
      return imgReverse
    },
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
    deleteImage (idx) {
      this.$emit('before-remove', idx, () => {
        if (this.images[idx].default === 1) {
          this.images[0].default = 1
        }
        this.images.splice(idx, 1)
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
  created () {
    this.images = []
    this.images = cloneDeep(this.dataImages)
  }
}
</script>

<style lang="css" scoped>

  .uploadimagewrapper {
    margin-left: -55px;
    margin-right: -75px;
  }

  .inputimage {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--grey);
    border-radius: 5px;
    min-width: 250px;
  }

  .text.wrapper {
    text-align: center;
  }

  .icon.wrapper {
    margin: 10px;
    height: fit-content;
    width: fit-content;
  }

  .icon_ {
    fill: white;
    width: 50px;
    height: 50px;
  }

  .display.label {
    position: absolute;
    bottom: 0;
    left: -5px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 7px 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
  }
  .display.label:hover {
    background: rgba(0, 0, 0, 0.7);
  }

.text-small {
  font-size: 11px;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.text-center {
  text-align: center;
}
.text-primary {
  color: #2fa3e6;
}
.display-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-end {
  justify-content: flex-end;
}
.align-items-center {
  align-items: center;
}
.full-width {
  width: 100%;
}
.full-height {
  height: 100%;
}
.cursor-pointer {
  cursor: pointer;
}
.centered {
  left: 50%;
  transform: translate(-50%,-50%);
  top: 50%;
  position: absolute;
  display: block;
}
.image-container {
  width: 190px;
  height: 180px;
  border: 1px dashed #D6D6D6;
  border-radius: 4px;
  background-color: #fff;
}
.image-center {
  width: 100%;
  height: 100%;
}
.image-icon-drag {
  fill: #c9c8c8;
  height: 50px;
  width: 50px;
}
.drag-text {
  padding-top: 5px;
  color: #777;
  font-weight: 400;
  line-height: 1.5;
}
.browse-text {
  font-size: 86%;
  color: #206ec5;
  text-decoration: none;
}
.image-input {
  overflow: hidden;
  z-index: 1;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
}
.image-input label {
  display: block;
}
.drag-upload-cover {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FCFEFF;
  opacity: .9;
  z-index: 1;
  margin: 5px;
  border: 2px dashed #268DDD;
}
.drag-upload-cover {
  font-weight: 400;
  font-size: 20px;
}
.icon-drag-drop {
  height: 50px;
  width: 50px;
  fill: #2fa3e6;
}
.drop-text-here {
  margin: 0;
  line-height: 1.5;
}
.display-none {
  display: none;
}

/* list images*/
.image-list {
  border: 1px solid #D6D6D6;
}
.preview-image {
  height: 140px;
  padding: 5px;
  border-radius: 15px;
  box-sizing: border-box;
}
.image-overlay {
  background: rgba(0,0,0,.7);
  z-index: 10;
  border-radius: 5px;
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}
.image-overlay-details {
  position: absolute;
  z-index: 11;
  opacity: 0;
  transform: translate(0,-50%);
  top: 50%;
}
.icon-overlay {
  width: 40px;
  height: 40px;
  fill: #fff;
}
.preview-image:hover .image-overlay, .preview-image:hover .image-overlay-details{
  opacity: 1;
}
.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
.show-img {
  max-height: 100px;
  max-width: 140px;
  display: block;
  vertical-align: middle;
}
/*image bottom*/
.image-bottom {
  bottom: 0;
  left: 0;
  height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
}
.image-primary {
  border-radius: 4px;
  background-color: #e3edf7;
  padding: 3px 7px;
  font-size: 11px;
  margin-right: 5px;
}
.image-icon-primary {
  width: 10px;
  height: 10px;
  margin-right: 2px;
}
.image-icon-delete {
  height: 14px;
  width: 14px;
  fill: #222;
}
.image-edit {
  margin-right: 10px;
}
.image-icon-edit {
  height: 14px;
  width: 14px;
  fill: #222;
}
.image-list-container {
  max-width: 190px;
  min-height: 50px;
  margin-top: 10px;
}
.image-list-container .image-list-item {
  height: 32px;
  width: 32px;
  border-radius: 4px;
  border: 1px solid #D6D6D6;
}
.image-list-container .image-list-item:not(:last-child) {
  margin-right: 5px;
  margin-bottom: 5px;
}
.image-list-container .image-list-item .show-img {
  max-width: 25px;
  max-height: 17px;
}
.image-list-container .image-highlight {
  border: 1px solid #2fa3e7;
}
.add-image-svg {
  width: 12px;
  height: 12px;
  fill: #222;
}
.input-add-image {
  overflow: hidden;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
}
.input-add-image label {
  display: block;
}
.image-icon-info {
  width: 14px;
  height: 14px;
  fill: #222;
}
.mark-text-primary {
  color: #034694;
}
.popper-custom {
  background: #000;
  padding: 10px;
  border: none;
  box-shadow: none;
  color: white;
  text-align: left;
  font-size: 12px;
}
</style>
<style lang="css">
.popper-custom .popper__arrow {
  border-color: #000 transparent transparent transparent !important;
}
</style>
