import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Destination from '@/pages/destination/Destination'
import Detail from '@/pages/detail/Detail'
import View from '@/pages/view/View'
import Payment from '@/pages/payment/Payment'
import Paymentsucc from '@/pages/paymentsucc/Paymentsucc'
import Signupsucc from '@/pages/signupsucc/Signupsucc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/destination',
      name: 'Destination',
      component: Destination
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/view/:id',
      name: 'View',
      component: View
    },{
      path: '/payment',
      name: 'Payment',
      component: Payment
    },{
      path: '/paymentsucc',
      name: 'Paymentsucc',
      component: Paymentsucc
    },{
      path: '/signupsucc',
      name: 'Signupsucc',
      component: Signupsucc
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
