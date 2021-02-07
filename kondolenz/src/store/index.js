import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var storeMock = new Vuex.Store({
  getters: {
    all_displayed_entries () {
      let pic01 = {
        path: require('../assets/01.jpg'),
        caption: '01'
      }
      let pic02 = {
        path: require('../assets/02.jpg'),
        caption: '02'
      }
      let pic03 = {
        path: require('../assets/03.jpg'),
        caption: '03'
      }
      let pic04 = {
        path: require('../assets/04.jpg'),
        caption: '04'
      }
      return [
        {id: '0', title: 'Entry 0', author: 'a chicken', created_at: '2021-02-07 08:13:47', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', imgs: [pic01]},
        {id: '1', title: 'Entry 1', author: 'mister bean', created_at: '2021-02-07 08:13:47', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', imgs: [pic01, pic02]},
        {id: '2', title: 'Entry 2', author: 'i\'m elfo', created_at: '2021-02-07 08:13:47', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
        {id: '3', title: 'Entry 3', author: 'sauro - the father of darkness', created_at: '2021-02-07 08:13:47', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nStet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\najklsdjflkajfklajl;k', imgs: [pic01, pic02, pic03, pic04, pic01, pic02, pic03, pic04]}
      ]
    }
  }
})

var store = storeMock

export default store
