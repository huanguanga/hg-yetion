import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routers"

Vue.use(VueRouter)
const router = new VueRouter({
  mode:'hash',
  linkActiveClass:'active',
  routes
})
export default router