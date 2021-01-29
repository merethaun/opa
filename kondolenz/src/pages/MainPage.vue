<template>
  <div class="wrapper">
    <Header />
    <div class="entries">
      <!-- maybe a picture ? if yes: after explanation ? -->
      <img :src="images.main">
      <ExplanationEntry />
      <DisplayEntry
        v-for="entry in entries"
        :key="entry.id"
        :text="entry.text"
        :title="entry.title"
        :author="entry.author"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import DisplayEntry from '@/components/DisplayEntry'
import ExplanationEntry from '@/components/ExplanationEntry'

export default {
  name: 'MainPage',
  components: {
    Header,
    DisplayEntry,
    ExplanationEntry
  },
  data () {
    return {
      images: {
        main: require('@/assets/IMG_20170722_101059.jpg')
      }
    }
  },
  computed: {
    entries: function () {
      // entry: title, author, text, photos (email)
      return this.$store.getters.all_displayed_entries
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    background: white;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }
  .entry {
    position: relative;
  }
  img {
    width: 100%;
  }
</style>
