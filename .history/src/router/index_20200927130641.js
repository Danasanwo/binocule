import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/Activity'),
    children: [
      {
        path: '/',
        name: 'Active',
        component: () => import('../views/Active'),
      },
    ],
  },

  {
    path: '/logger',
    name: 'Logger',
    component: () => import('../views/Logger.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('../views/Signup.vue'),
      },
      {
        path: 'retrieve',
        name: 'Retrieve',
        component: () => import('../views/Retrieve.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
