import Vue from 'vue'
import Router from 'vue-router'
import about from '@/views/about.vue'
import contact from '@/views/contact.vue'
import service from '@/views/service.vue'
import recruitment from '@/views/recruitment.vue'
import recruitment_apply from '@/views/recruitment_apply.vue'
import recruitment_medical from '@/views/recruitment_medical.vue'


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
    },
    {
      path : '/recruitment',
      name : 'recruitment',
      component : recruitment
    },
    {
      path : '/recruitment_apply',
      name : 'recruitment_apply',
      component : recruitment_apply
    },
    {
      path : '/recruitment_medical',
      name : 'recruitment_medical',
      component : recruitment_medical
    }

  ]
})
