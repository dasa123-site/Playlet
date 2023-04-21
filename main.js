import App from './App.vue'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
import store from './store';
import tools from '@/main_modules/tools/index.js'
import check from '@/main_modules/check/index.js'
import http from '@/main_modules/request/method.js'
Vue.prototype.$http = http
Vue.prototype.$store = store
Vue.prototype.$tools = tools
Vue.prototype.$check = check
Vue.config.productionTip = false
//多语言
import messages from './locale/index'
let i18nConfig = {
	locale: uni.getLocale(),
	messages
}
uni.setStorageSync('lang', uni.getLocale())
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
export const i18n = new VueI18n(i18nConfig)
//全局引入组件
import MNavbar from '@/main_modules/main-ui/m-navbar/index.vue'
Vue.component('m-navbar', MNavbar)

App.mpType = 'app'
const app = new Vue({
	i18n,
	store,
	...App
})
// 引入请求封装
require('./utils/request/index')(app)
app.$mount()
