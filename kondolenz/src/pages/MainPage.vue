<template>
  <div class="mainwrapper">
    <Header />
    <div class="entrieswrapper">
      <div class="entry wrapper" style="padding: 0;">
        <img class="mainimage" :src="images.main">
      </div>
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
        main: require('@/assets/Spinolas.jpg')
      }
    }
  },
  async mounted () {
    window.scrollTo(0, 0)
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
