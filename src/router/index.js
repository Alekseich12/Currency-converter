import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Second from '@/components/Second'
import Third from '@/components/Third'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second
    },
    {
      path: '/Third',
      name: 'Third',
      component: Third,
    }
  ]
})
