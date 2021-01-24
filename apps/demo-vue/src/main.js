import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
// import { initWechatSdk } from "nativescript-wechat-login-knotes";

if(TNS_ENV !== 'production') {
  // Vue.use(VueDevtools)
}

// initWechatSdk("wx9b28993d5c8d294b", "https://www.your.app.universal.link");
console.log('init wechatLogin')

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
