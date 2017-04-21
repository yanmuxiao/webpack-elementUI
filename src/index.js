import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import syncTask from './components/sync-task.vue'
import stripeTable from './components/stripe-table.vue'


export default new Router({
  routes: [
    {
      path: '/',
      component: syncTask
    },
    {
      path: '/stripeTable',
      component: stripeTable
    }
  ]
})
