<template>
  <div class="entry wrapper">
    <h1 class="entry title">{{title}}</h1>
    <h1 class="entry author">{{author}}</h1>
    <h1 class="entry text">{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'DisplayEntry',
  props: {
    text: String,
    title: String,
    author: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    background: gray;
    display: flex;
    position: relative;
    height: fit-content;
    margin: 5vh 2vw;
    width: -webkit-fill-available;
  }
</style>
