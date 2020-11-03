import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router';
import store from '@/store'
import '@/mock/mockServer'
// import '@/api'
// 引入调用
// import {requCategoryList} from '@api'
// requCategoryList()
import 'swiper/css/swiper.css'
Vue.config.productionTip = false

import TypeNav from '@/conmponents/TypeNav'
Vue.component('TypeNav',TypeNav)
import SliderLoop from '@/conmponents/SliderLoop';
Vue.component('SliderLoop',SliderLoop)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el:'#app',
  render: h => h(App),
  router,
  store
})
