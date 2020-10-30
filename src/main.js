import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router';
import store from '@/store'
import '@/api'

// 引入调用
// import {requCategoryList} from '@api'
// requCategoryList()

Vue.config.productionTip = false
import TypeNav from '@/conmponents/TypeNav'
Vue.component('TypeNav',TypeNav)

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
