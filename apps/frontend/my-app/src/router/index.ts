import authRoutes from '@/modules/auth/routes'
import dashboardRoutes from '@/modules/dashboard/routes'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  ...authRoutes,
  ...dashboardRoutes,
  {
    path: '/shadcn',
    name: 'Shadcn comps',
    component: () => import('../components/Shadcn.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
