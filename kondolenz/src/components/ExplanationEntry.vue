<template>
  <div class="entry wrapper">
    <div class="entry font description">
      <h1 class="entry font" v-bind="l" v-for="line in description.split('\n')" :key="line">{{ line }}<br></h1>
    </div>
    <button class="entry font button" @click="redirect_to_new_entry">{{ button_title }}</button>
    <h1 class="entry font noticewrapper">
      <h1 class="entry font notice" v-bind="l" v-for="line in notice.split('\n')" :key="line">{{ line }}<br></h1>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ExplanationEntry',
  data: () => ({
    button_title: 'Kondolenz schreiben',
    description: 'Mit 79 Jahren ist Peter Spinola am 25. Januar 2021 verstorben.\nWir, die einen großen oder kleinen Teil seines Lebens mit ihm teilen durften, müssen nun Abschied nehmen. Wir trauern und erinnern uns an gemeinsame Zeiten mit Peter Spinola und kondolieren auf den folgenden Seiten.',
    notice: 'Wenn eine gesendete Kondolenz bearbeitet werden soll, sende bitte eine Email, die dein Problem beschreibt, an ...'
  }),
  methods: {
    redirect_to_new_entry: function () {
      window.location.href = '/#/add/'
    }
  }
}
</script>
