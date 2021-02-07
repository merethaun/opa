import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

/* eslint no-unused-vars: "off" */

Vue.use(Vuex)

var urlQuery = '/query.php'
var urlSave = '/save.php'

var _storeMock = new Vuex.Store({
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
        {id: '0', title: 'Entry 0', author: 'a chicken', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', imgs: [pic01]},
        {id: '1', title: 'Entry 1', author: 'mister bean', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', imgs: [pic01, pic02]},
        {id: '2', title: 'Entry 2', author: 'i\'m elfo', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
        {id: '3', title: 'Entry 3', author: 'sauro - the father of darkness', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nStet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\najklsdjflkajfklajl;k', imgs: [pic01, pic02, pic03, pic04, pic01, pic02, pic03, pic04]}
      ]
    }
  },
  async query (context) {
  }

})

var storeBackEnd = new Vuex.Store({
  state: {
    entries: []
  },
  getters: {
    all_displayed_entries: state => {
      return state.entries
    }
  },
  mutations: {
    set_entries (state, newEntries) {
      state.entries = newEntries
    }
  },
  actions: {
    async query (context) {
      axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
      var a = await axios.get(urlQuery)
      if (a.status === 200) {
        var allData = a.data
        allData.forEach(data => {
          data['imgs'] = []
          for (var i = 0; i < data['num_imgs']; i++) {
            var idx = '00' + i
            idx = idx.substr(0, 2)
            let pic = {
              path: 'images/' + data['id'] + '_' + idx + '.jpg',
              caption: i.toString()
            }
            data['imgs'].push(pic)
          }
        })
        console.info(allData)
        context.commit('set_entries', allData)
      } else {
        console.info('Query php was not sucessful ' + a.status)
        context.commit('set_entries', [
          {id: '0', title: 'Entry 0', author: 'a chicken', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', imgs: []},
          {id: '1', title: 'Entry 1', author: 'mister bean', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', imgs: []},
          {id: '2', title: 'Entry 2', author: 'i\'m elfo', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
          {id: '3', title: 'Entry 3', author: 'sauro - the father of darkness', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nStet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\najklsdjflkajfklajl;k', imgs: []}
        ])
      }
    },
    async save (context, data) {
      console.info(data)
      var r = await axios.post(urlSave, data)
      console.info('Save status ' + r.status)
    }
  }
})

var store = storeBackEnd

export default store
