import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/common.css'
import './assets/fonts/iconfont.css'
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 导入axios包
import axios from 'axios'
Vue.use(VueQuillEditor /* {default global options} */)
// 配置请求拦截器
axios.interceptors.request.use(config => {
  // 把后端登录时发来的token令牌绑定在请求头上。用来做后端权限的识别
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 把axios包挂在到vue原型上
Vue.prototype.$http = axios
// 设置axios请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)
Vue.filter('dateFormat', originVal => {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d}-${hh}-${mm}-${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
