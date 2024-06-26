import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
