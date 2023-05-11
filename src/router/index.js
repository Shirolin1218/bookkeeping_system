import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('../views/Main.vue')
    },
  ]
})

export default router
