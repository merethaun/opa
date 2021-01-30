<template>
  <div class="entry wrapper">
    <h1 class="entry font title">{{title}}</h1>
    <h1 class="entry font author">{{author}}</h1>
    <h1 class="entry font text">{{text}}</h1>
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
