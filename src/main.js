import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import waterfall from 'vue-waterfall2'
import VueScroller from 'vue-scroller'
import store from "@/store"
import 'swiper/css/swiper.css'
import "lib-flexible/flexible"
import "./static/iconfont/iconfont.css"

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(waterfall)
Vue.use(VueScroller)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
