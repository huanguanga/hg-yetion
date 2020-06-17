import Buy from "@/pages/Buy"
import Cart from "@/pages/Cart"
import Classify from "@/pages/Classify"
import Home from "@/pages/Home"
import Personal from "@/pages/Personal"

export default [
  {
    path:'',
    redirect:'/Home'
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/buy',
    component:Buy
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/home',
    component:Home,
    name:Home
  },
  {
    path:'/personal',
    component:Personal
  }
]