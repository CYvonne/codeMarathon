import Vue from 'vue'
import Router from 'vue-router'
import mainTab1 from '@/components/mainTab1'
import mainTab2 from '@/components/mainTab2'
import mainTab3 from '@/components/mainTab3'
import mainTab4 from '@/components/mainTab4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: mainTab1
    },
    {
      path: '/mainTab1',
      name: 'mainTab1',
      component: mainTab1
    },{
      path: '/mainTab2',
      name: 'mainTab2',
      component: mainTab2
    },{
      path: '/mainTab3',
      name: 'mainTab3',
      component: mainTab3
    },{
      path: '/mainTab4',
      name: 'mainTab4',
      component: mainTab4
    }
  ]
})
