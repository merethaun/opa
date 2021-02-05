<template>
  <div class="entry wrapper">
    <h1 class="entry font title">{{title}}</h1>
    <div class="entry formwrapper">
      <div class="entry formwrapper row">
        <label class="entry font label">{{ author_label }}</label>
        <input type="text" class="entry font input" v-model="author">
      </div>
      <div class="entry formwrapper row">
        <label class="entry font label">{{ email_label }}</label>
        <input type="text" class="entry font input" v-model="email">
      </div>
      <div class="entry formwrapper row">
        <label class="entry font label">{{ text_label }}</label>
        <textarea type="text" class="entry font input multiline" v-model="text"></textarea>
      </div>
      <div class="entry formwrapper imagerow">
        <label class="entry font imagelabel">{{ imgs_label }}</label>
        <UploadAndDisplayImage
          :data-images="images"
          @upload-succes="imgs_upload_success"
          @edit-image="imgs_edit_image"
          @before-remove="imgs_before_remove"
        />
      </div>
    </div>
    <div>
      <button class="entry font button" @click="save">{{ button_send }}</button>
      <button class="entry font button cancel" @click="cancel">{{ button_cancel }}</button>
    </div>
    <h1 class="entry font noticewrapper">
      <h1 class="entry font notice" v-for="line in notice.split('\n')" :key="line">{{ line }}<br></h1>
    </h1>
  </div>
</template>

<script>
import UploadAndDisplayImage from '@/components/UploadAndDisplayImage'

export default {
  name: 'NewEntry',
  components: {
    UploadAndDisplayImage
  },
  data: function () {
    return {
      title: 'Kondolenz schreiben',
      author: '',
      email: '',
      text: '',
      images: [],
      button_send: 'Kondolenz absenden',
      button_cancel: 'Abbrechen',
      author_label: 'Name',
      text_label: 'Kondolenznachricht verfassen',
      email_label: 'Kontaktmöglichkeit',
      imgs_label: 'Zusätzlich Bilder hochladen',
      notice: '⚠ Dieses Online-Kondolenzbuch ist ein privates Projekt zu Ehren von Peter Spinola. Mit dem Absenden bestätigen Sie, dass Ihr Name, Kondolenznachricht und hochgeladene Bilder veröffentlicht werden dürfen.\nIhre Kontaktdaten werden nicht veröffentlicht und nur für den Fall von Rückfragen zu Ihrer Kondolenz verwendet. Ihre Kontakdaten werden anschließend gelöscht.\nDie Angaben von Namen und Kontaktmöglichkeit sind freiwillig. Das Hochladen von Bildern ist ebenfalls freiwillig.\nEs besteht kein Anspruch auf die Veröffentlichung Ihrer Nachricht.',
      images_changed: false
    }
  },
  methods: {
    save: function () {
      // TODO send author, text, img
      console.log(this.text)
      window.location.href = '/#/'
    },
    cancel: function () {
      window.location.href = '/#/'
    },
    imgs_upload_success: function (formData, index, fileList) {
      this.images_changed = true
    },
    imgs_edit_image: function (formData, index, fileList) {
      this.images_changed = true
    },
    imgs_before_remove: function (index, done, fileList) {
      done()
      this.images_changed = false
    }
  }
}
</script>

<style>
  .entry.formwrapper {
    padding: 5px 75px 5px 55px;
    display: flex;
    flex-direction: column;
  }
  .entry.formwrapper.row {
    padding: 5px 0;
    flex-direction: row;
  }
  .entry.formwrapper.imagerow {
    padding: 5px 0;
    flex-direction: column;
    padding-bottom: 10px;
  }
  .entry.font.label {
    width: 175px;
    min-width: 175px;
    text-align: left;
  }
  .entry.font.imagelabel {
    width: 100%;
    padding-bottom: 10px;
  }
  .entry.font.input {
    padding: 5px;
    outline: none;
    width: 350px;
    font-size: medium;
  }
  .entry.font.input.multiline {
    width: 100%;
    height: 100px;
    font-family: inherit;
    font-weight: inherit;
    font-size: 15px;
  }
  .entry.font.input.multiline::-webkit-scrollbar {
    width: 10px;
    cursor: pointer;
  }
  .entry.font.input.multiline::-webkit-scrollbar-thumb {
    background: rgb(138, 138, 138);
    border-radius: 4px;
    margin: 1px;
    cursor: pointer;
  }
  .entry.font.input.multiline::-webkit-scrollbar-thumb:hover {
    background: rgb(110, 110, 110);
  }
  .entry.font.input.multiline::-webkit-scrollbar-thumb:active {
    background: rgb(110, 110, 110);
  }

  @media only screen and (max-width: 750px) {
    .entry.formwrapper {
      padding-left: 25px;
      padding-right: 25px;
    }
    .entry.font.input {
      width: fill-available;
      font-size: small;
    }
    .entry.font.input.multiline {
      font-size: 12px;
    }
    .entry.font.input.multiline::-webkit-scrollbar {
      width: 7px;
    }
    .entry.formwrapper.row {
      flex-direction: column;
    }
    .entry.font.label {
      font-size: small;
      margin-bottom: 2px;
      margin-top: 3px;
    }
  }
</style>
