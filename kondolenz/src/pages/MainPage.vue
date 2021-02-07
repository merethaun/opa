<template>
  <div class="mainwrapper">
    <Header />
    <div class="entrieswrapper">
      <img class="mainimage" :src="images.main">
      <ExplanationEntry />
      <DisplayEntry
        v-for="entry in entries"
        :key="entry.id"
        :text="entry.text"
        :title="entry.title"
        :author="entry.author"
        :id="entry.id"
        :imgs="entry.imgs"
        :date="entry.created_at"
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
        main: require('@/assets/IMG_20170722_135316.jpg')
      }
    }
  },
  async mounted () {
    console.log('MOUNTED')
    this.$store.dispatch('query')
  },
  computed: {
    entries: function () {
      // entry: title, author, text, photos (email)
      return this.$store.getters.all_displayed_entries
    }
  }
}
</script>

<style>
  .entrieswrapper {
    position: relative;
  }
  .mainimage {
    width: 100%;
  }
</style>
