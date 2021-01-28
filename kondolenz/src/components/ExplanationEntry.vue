<template>
  <div class="entry wrapper">
    <h1 class="entry title">{{title}}</h1>
    <button class="entry button">{{button_title}}</button>
    <h1 class="entry text">{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ExplanationEntry',
  data: () => ({
    title: 'Explaining the world',
    button_title: 'Add entry',
    text: 'I don\'t know what to say'
  })
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
