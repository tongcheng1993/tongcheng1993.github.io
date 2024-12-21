import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'contain',
    redirect: '/dashboard',
    component: () => import(/* webpackChunkName: "contain" */ '@/views/layout/contain.vue'),
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/dashboard.vue'),
      },
      {
        path: '/english',
        name: 'english',
        component: () => import(/* webpackChunkName: "english" */ '@/views/english/english.vue'),
      },
    ]
  },
  {
    path: '/lost404',
    name: 'lost404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "lost404" */ '@/views/err/lost404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
