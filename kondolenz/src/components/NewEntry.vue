<template>
  <div class="entry wrapper">
    <h1 class="entry font title">{{title}}</h1>
    <input type="text" class="entry font description" v-model="author">
    <input type="text" class="entry font description" v-model="text">
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
