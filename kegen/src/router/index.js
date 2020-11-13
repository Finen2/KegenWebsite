import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/studio',
    name: 'Studio',
    component: () => import('../views/Studio.vue')
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/ceramics',
    name: 'Ceramics',
    component: () => import('../views/Ceramics.vue')
  },
  {
    path: '/reality',
    name: 'Reality',
    component: () => import('../views/Reality.vue')
  },
  {
    path: '/ilustrations',
    name: 'Ilustrations',
    component: () => import('../views/Ilustrations.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
