import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import GodListPage from '../views/GodListPage.vue'
import PerformanceReport from '../views/PerformanceReport.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/GodsList',
      name: 'Personnages',
      component: GodListPage,
    },
    {
      path: '/PerformanceReport',
      name: 'PerformanceReport',
      component: PerformanceReport,
    },
  ],
})

export default router
