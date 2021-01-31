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
    </div>
    <div>
      <button class="entry font button" @click="save">{{ button_send }}</button>
      <button class="entry font button cancel" @click="cancel">{{ button_cancel }}</button>
    </div>
    <h1 class="entry font notice">{{ notice }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NewEntry',
  data: function () {
    return {
      title: 'Kondolenz schreiben',
      author: '',
      email: '',
      text: '',
      img: [],
      button_send: 'Kondolenz absenden',
      button_cancel: 'Abbrechen',
      author_label: 'Name',
      text_label: 'Dein Text',
      email_label: 'E-Mail',
      notice: '⚠ Das von Ihnen geschriebene wird veröffentlicht'
    }
  },
  methods: {
    save: function () {
      // TODO send author, text, img
      window.location.href = '/#/'
    },
    cancel: function () {
      window.location.href = '/#/'
    }
  }
}
</script>

<style scoped>
  .entry.wrapper {
    background: white;
    display: flex;
    flex-direction: column;
    position: relative;
    height: fit-content;
    margin: 5vh 2vw;
    width: -webkit-fill-available;
  }
</style>
