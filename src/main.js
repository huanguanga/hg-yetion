import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import "lib-flexible/flexible"
import "./static/iconfont/iconfont.css"

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
