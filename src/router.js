import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import City from './pages/city/City'
//路由的功能就是根据网址的不同，让返回的页面也不同
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
