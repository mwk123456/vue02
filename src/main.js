import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/common.css'
import './assets/fonts/iconfont.css'
// 导入axios包
import axios from 'axios'
// 把axios包挂在到vue原型上
Vue.prototype.$http = axios
// 设置axios请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
