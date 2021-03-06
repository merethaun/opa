<template>
  <div class="entry wrapper">
    <div class="entry titlewrapper">
      <h1 class="entry font title">{{ description_title }}</h1>
    </div>
    <div class="entry formwrapper">
      <div class="entry formwrapper row">
        <div class="entry font labelwrapper">
          <label class="entry font label">{{ title_label }}</label>
          <br>
          <label class="entry font label advice">maximal 255 Zeichen</label>
        </div>
        <input type="text" class="entry font input" v-model="title" maxlength="255">
      </div>
      <div class="entry formwrapper row">
        <div class="entry font labelwrapper">
          <label class="entry font label">{{ author_label }}</label>
          <br>
          <label class="entry font label advice">maximal 255 Zeichen</label>
        </div>
        <input type="text" class="entry font input" v-model="author" maxlength="255">
      </div>
      <div class="entry formwrapper row">
        <div class="entry font labelwrapper">
          <label class="entry font label">{{ email_label }}</label>
          <br>
          <label class="entry font label advice">maximal 255 Zeichen</label>
        </div>
        <input type="text" class="entry font input" v-model="email" maxlength="255">
      </div>
      <div class="entry formwrapper row">
        <div class="entry font labelwrapper">
          <label class="entry font label">{{ text_label }}</label>
          <br>
          <label class="entry font label advice">maximal 4096 Zeichen</label>
        </div>
        <textarea type="text" class="entry font input multiline" v-model="text" maxlength="4096" spellcheck="true"></textarea>
      </div>
      <div class="entry formwrapper imagerow">
        <div class="entry font imagelabelwrapper">
          <label class="entry font imagelabel">{{ imgs_label }}</label>
          <label class="entry font label advice">maximal 5 Bilder</label>
        </div>
        <UploadAndDisplayImage
          ref="get_images"
          :data-images="images"
          @upload-succes="imgs_upload_success"
          @edit-image="imgs_edit_image"
          @before-remove="imgs_before_remove"
        />
      </div>
      <div class="entry formwrapper row">
        <div class="entry font labelwrapper">
          <label class="entry font label">{{ password_label }}</label>
          <br>
          <label class="entry font label advice">Das Passwort findest du auf der Trauerkarte</label>
        </div>
        <input type="text" class="entry font input" v-model="entered_password" maxlength="255">
      </div>
    </div>
    <div>
      <button class="entry font button" @click="save" :disabled='save_action'>{{ button_send }}</button>
      <button class="entry font button cancel" @click="cancel" :disabled='save_action'>{{ button_cancel }}</button>
    </div>
    <h1 class="entry font noticewrapper">
      <h1 class="entry font notice" v-for="line in notice.split('\n')" :key="line">{{ line }}<br></h1>
    </h1>
    <b-toast id="save-toast" class="toaster-top-center warning" title="Achtung" no-close-button no-auto-hide>
      Nachricht wird gespeichert
    </b-toast>
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
      title: '',
      author: '',
      email: '',
      text: '',
      images: [],
      entered_password: '',
      password_label: 'Passwort eingeben',
      description_title: 'Kondolenz schreiben',
      button_send: 'Kondolenz absenden',
      button_cancel: 'Abbrechen',
      title_label: 'Überschrift',
      author_label: 'Name',
      save_action: false,
      text_label: 'Kondolenznachricht verfassen',
      email_label: 'Email',
      imgs_label: 'Zusätzlich Bilder hochladen',
      notice: '⚠ Dieses digitale Kondolenzbuch ist ein privates Projekt zu Ehren von Peter Spinola. Mit dem Absenden wird bestätigt, dass die eingegebenen Daten auf dieser Seite veröffentlicht werden dürfen. Ausgenommen sind die Kontaktdaten, die nur für den Fall von Rückfragen zur Kondolenz verwendet und nach der Prüfung gelöscht werden.\nEs besteht kein Anspruch auf die Veröffentlichung der Nachricht.\nAus allen Wort- und Bildmeldungen wird ein Kondolenz-Fotobuch für Gudrun erstellt.\nDas Projekt ist ein Werk von Meret, Jörg, Peter und Iris Unbehaun.',
      images_changed: false
    }
  },
  methods: {
    save: async function () {
      // TODO send author, text, img
      if ((this.author === '') && (this.text === '') && (this.images.length === 0)) {
        window.alert('Gib bitte deinen Name, eine Kodolenznachricht oder Bilder ein.')
        return
      }

      var passwordHash = require('password-hash')
      var hashedPassword = 'sha1$41a7485c$1$76466d75e79d01714a08103ceba20313a3f9e688'
      if (!passwordHash.verify(this.entered_password, hashedPassword)) {
        window.alert('Dein eingegebenes Passwort ist nicht korrekt.')
        return
      }

      var data = {
        title: this.title,
        author: this.author,
        email: this.email,
        text: this.text,
        images: []}
      var images = this.$refs.get_images.images
      console.info(images)
      if (images !== undefined) {
        images.forEach(element => {
          data.images.push(element.path)
        })
      }
      var fut = this.$store.dispatch('save', data)
      this.save_action = true
      this.$bvToast.show('save-toast')
      var success = await fut
      this.save_action = false
      this.$bvToast.hide('save-toast')
      if (success) {
        window.location.href = '/#/'
      } else {
        window.alert('Es gab Probleme beim Hochladen deiner Kondolenz. Versuche, weniger Bilder hochzuladen oder sie auf mehrere Einträge zu verteilen.\nVielen Dank für dein Verständnis.')
      }
    },
    cancel: function () {
      window.location.href = '/#/'
    },
    imgs_upload_success: function (formData, index, fileList) {
      this.images_changed = true
    },
    imgs_edit_image: function (formData, index, fileList) {
      console.log(fileList)
      this.images_changed = true
    },
    imgs_before_remove: function (index, done, fileList) {
      console.log(fileList)
      done()
      this.images_changed = false
    }
  }
}
</script>

<style>
  button {
    disabled{
      cursor: not-allowed;
    }
  }
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
  .entry.font.labelwrapper {
    width: 175px;
    min-width: 175px;
  }
  .entry.font.imagelabelwrapper {
    width: fill-available;
  }
  .entry.font.label {
    text-align: left;
  }
  .entry.font.label.advice {
    font-size: x-small;
    color: var(--grey);
  }
  .entry.font.imagelabel {
    width: 100%;
    padding-top: 10px;
  }
  .entry.font.input {
    padding: 5px;
    outline: none;
    width: 350px;
    font-size: medium;
    margin-left: 10px;
  }
  .entry.font.input.multiline {
    width: fill-available;
    max-width: fill-available;
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
  .uploadimagewrapper {
    margin-left: -55px!important;
    margin-right: -75px!important;
  }

  @media only screen and (max-width: 1000px) {
    .entry.font.input {
      width: fill-available;
    }
  }

  @media only screen and (max-width: 750px) {
    .uploadimagewrapper {
      margin-left: -25px!important;
      margin-right: -25px!important;
    }
    .inputimage {
      min-width: 200px!important;
    }
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
      margin-bottom: 3px;
      margin-top: 3px;
      width: fill-available;
    }
    .entry.font.imagelabel {
      font-size: small;
      margin-top: 3px;
      padding-bottom: 0;
      margin-bottom: 0;
      width: fill-available;
    }
  }
</style>
