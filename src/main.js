import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import TIM from 'tim-js-sdk'
import tim from './commen/tim/tim.js'
import BaiduMap from 'vue-baidu-map'
import './plugins/BMap.js'
// 导入bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import animated from 'animate.css'

Vue.use(animated)
import VueRouter from 'vue-router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  // vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app')

// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:12345/v1/lot'

// axios 请求拦截器
axios.interceptors.request.use((config) => {
  // 为请求头添加 Token 验证，字段 Authorization
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  // 对请求进行预处理
  return config
})

Vue.config.productionTip = false
Vue.prototype.tim = tim.tim //tim sdk 引入后生成的tim服务
Vue.prototype.$TIM = TIM //tim 的状态/事件 常量
Vue.prototype.$store = store
// 将包挂载到 Vue 的原型对象上
Vue.prototype.$http = axios
const baseU = 'http://127.0.0.1:12345/'
Vue.prototype.$base = baseU

Vue.use(BaiduMap, {
  ak: 'SWV6FpgZgSHd2j71old3Of0RLV5w9zck',
})