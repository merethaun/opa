<template>
  <div class="entry wrapper">
    <h1 class="entry font title">{{ title }}</h1>
    <h1 class="entry font description">{{ description }}</h1>
    <button class="entry font button" @click="redirect_to_new_entry">{{ button_title }}</button>
  </div>
</template>

<script>
export default {
  name: 'ExplanationEntry',
  data: () => ({
    title: 'Explaining the world',
    button_title: 'Add entry',
    description: 'Beschreibung'
  }),
  methods: {
    redirect_to_new_entry: function () {
      window.location.href = '/#/add/'
    }
  }
}
</script>
