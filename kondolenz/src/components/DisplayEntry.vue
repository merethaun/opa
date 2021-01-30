<template>
  <div class="entry wrapper">
    <div class="entry titlewrapper">
      <h1 class="entry font title">{{ title }}</h1>
      <h1 class="entry font author">{{ author }}</h1>
    </div>
    <div class="entry imagewrapper" v-if="imgs">
      <div>
        <img
          class="entry image"
          v-for="img in imgs"
          :key="img.caption"
          :src="img.path"
        >
      </div>
    </div>
    <h1 class="entry font text">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'DisplayEntry',
  props: {
    text: String,
    title: String,
    author: String,
    id: String,
    imgs: Array
  }
}
</script>
