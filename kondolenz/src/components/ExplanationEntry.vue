<template>
  <div class="entry wrapper">
    <div class="entry font description wrapper-inner" style="position: relative; margin-bottom: 0;">
      <img class="entry portrait" :src="images.portrait">
      <h1 class="entry font" v-for="line in description.split('\n')" :key="line">{{ line }}<br><br></h1>
    </div>
    <button class="entry font button" @click="redirect_to_new_entry">{{ button_title }}</button>
    <div class="entry font noticewrapper" style="display: flex;">
      <h1 class="entry font notice">{{ notice }}
      <a href= "mailto:info@peter-spinola.de" style="margin: 0;">info@peter-spinola.de</a></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExplanationEntry',
  data: () => ({
    button_title: 'Kondolenz schreiben',
    description: 'Mit 79 Jahren ist Peter Spinola am 25. Januar 2021 verstorben.\nWir, die einen großen oder kleinen Teil seines Lebens mit ihm teilen durften, müssen nun Abschied nehmen. Wir trauern und erinnern uns an gemeinsame Zeiten mit Peter Spinola und kondolieren auf den folgenden Seiten.',
    notice: 'Wenn eine gesendete Kondolenz bearbeitet werden soll, sende bitte eine Email, die dein Problem beschreibt, an ',
    images: {
      portrait: require('@/assets/portrait_main.jpg')
    }
  }),
  methods: {
    redirect_to_new_entry: function () {
      window.location.href = '/#/add/'
    }
  },
  mounted () {
    if (screen.width <= 500) {
      this.images.portrait = require('@/assets/portrait_thinner.jpg')
    }
  }
}
</script>

<style>
  .entry.portrait {
    float: left;
    max-width: 15%;
    max-height: 100%;
    height: auto;
    width: auto;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    padding: 0;
    margin-right: 25px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 1250px) {
    .entry.portrait {
      max-width: 20%;
    }
  }
  @media only screen and (max-width: 1150px) {
    .entry.portrait {
      max-width: 25%;
    }
  }
  @media only screen and (max-width: 1000px) {
    .entry.portrait {
      max-width: 20%;
    }
  }
  @media only screen and (max-width: 850px) {
    .entry.portrait {
      max-width: 35%;
    }
  }
  @media only screen and (max-width: 750px) {
    .entry.portrait {
      margin-right: 15px;
      max-width: 20%;
    }
  }
  @media only screen and (max-width: 600px) {
    .entry.portrait {
      max-width: 35%;
    }
  }
  @media only screen and (max-width: 500px) {
    .entry.portrait {
      max-width: 100%;
    }
  }
</style>
