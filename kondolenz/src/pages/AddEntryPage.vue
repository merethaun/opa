<template>
  <div class="wrapper">
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
</style>
