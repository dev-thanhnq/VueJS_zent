import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Homeworks/Session5/LoginLayout'),
    children: [
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
    ]
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
    path: '/admin',
    name: 'Admin',
    component: () => import('../components/Homeworks/Session5/Admin'),
    children: [{
      path: 'products',
      components: {
        main: () => import('../components/Homeworks/Session5/Products'),
        title: () => import('../components/Homeworks/Session5/ProductsTitle')
      },
    },
    {
      path: 'bills',
      name: 'Bills',
      components: {
        main: () => import('../components/Homeworks/Session5/Bill'),
        title: () => import('../components/Homeworks/Session5/BillsTitle')
      }
    },]
  },
  {
    path: '/products',
    name: 'Products',
    components: {
      main: () => import('../components/Homeworks/Session5/Products'),
      title: () => import('../components/Homeworks/Session5/ProductsTitle')
    }
  },
  {
    path: '/bills',
    name: 'Bills',
    components: {
      main: () => import('../components/Homeworks/Session5/Bill'),
      title: () => import('../components/Homeworks/Session5/BillsTitle')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
