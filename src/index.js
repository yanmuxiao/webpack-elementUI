import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import syncTask from './components/sync-task.vue'
import editForm from './components/edit-form.vue'


export default new Router({
  routes: [
    {
      path: '/',
      component: syncTask
    },
    {
      path: '/editForm',
      component: editForm
    }
  ]
})
