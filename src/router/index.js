import Vue from 'vue'
import Router from 'vue-router'
import about from '@/views/about.vue'
import contact from '@/views/contact.vue'
import service from '@/views/service.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '',
      name : 'about',
      component : about
    },
    {
        path : '/about',
        name : 'about',
        component : about
      },
    {
      path : '/contact',
      name : 'contact',
      component : contact
    },
    {
      path : '/service',
      name : 'service',
      component : service
    }
  ]
})
