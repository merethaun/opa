import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import AddEntryPage from '@/pages/AddEntryPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/add/',
      name: 'AddEntryPage',
      component: AddEntryPage
    }
  ]
})
