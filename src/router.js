import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'
import headerTab from './components/Header.vue'

Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      component: headerTab
    },
    {
      path: '/joke',
      component: jokePage
    },
    {
      path:'/joke-img',
      component:jokeImgPage
    }
  ]
})
