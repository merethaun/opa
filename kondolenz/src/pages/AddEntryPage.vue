<template>
  <div class="mainwrapper">
    <Header />
    <NewEntry />
  </div>
</template>

<script>
import Header from '@/components/Header'
import NewEntry from '@/components/NewEntry'

export default {
  name: 'AddEntryPage',
  components: {
    Header,
    NewEntry
  }
}
</script>
