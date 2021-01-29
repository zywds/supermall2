import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:() => import('../views/home/Home'),
    meta:{
      title:'首页'
    }
  },
  {
    path:'/category',
    component:() => import('../views/category/Category'),
    meta:{
      title:'分类'
    }
  },
  {
    path:'/cart',
    component:() => import('../views/cart/Cart'),
    meta:{
      title:'购物车'
    }
  },
  {
    path:'/profile',
    //懒加载
    component:() => import('../views/profile/Profile'),
    meta:{
      title:'我的'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  //console.log(to);
  document.title = to.matched[0].meta.title
  next()
})

export default router
