import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//添加全局CSS
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/*
$mount('#app')
  如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。
  可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
render: h => h(App)：
  Vue在创建Vue实例时，通过调用render方法来渲染实例的DOM树,Vue在调用render方法时，会传入一个createElement函数作为参数，
  也就是这里的h的实参是createElement函数，然后createElement会以App为参数进行调用
*/