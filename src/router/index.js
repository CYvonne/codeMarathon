import Vue from 'vue'
import Router from 'vue-router'
import teamList from '@/components/teamList'
import teamDetail from '@/components/teamDetail'
import applyForm from '@/components/applyForm'
import QRCode from '@/components/QRCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: teamList
    },
    {
      path: '/teamList',
      name: 'teamList',
      component: teamList
    },{
      path: '/teamDetail',
      name: 'teamDetail',
      component: teamDetail
    },{
      path: '/applyForm',
      name: 'applyForm',
      component: applyForm
    },{
      path: '/QRCode',
      name: 'QRCode',
      component: QRCode
    }
  ]
})
