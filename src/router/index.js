import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>import('../components/Homeworks/Session5/LoginForm')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../components/Homeworks/Session5/ForgotPassword')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../components/Homeworks/Session5/Admin')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
