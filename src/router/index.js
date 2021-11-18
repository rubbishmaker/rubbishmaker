
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'
// import Home from '../views/Home/Home'
// import Mall from '../views/Mall/Mall'
// import User from '../views/User/User'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/Home')

  },
  {
    path: '/mall',
    name: 'mall',
    component: () => import('@/views/Mall/Mall')
  }, {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User/User'),


  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/User/Form'),
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('@/views/Other/Page1'),
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('@/views/Other/Page2'),
  }






]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
