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
    path: '/illustratinons',
    name: 'Illustratinons',
    component: () => import('../views/Illustratinons.vue')
  },
  {
    path: '/reality',
    name: 'Reality',
    component: () => import('../views/Reality.vue')
  },
  {
    path: '/studio',
    name: 'Studio',
    component: () => import('../views/Studio.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
