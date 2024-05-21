import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // === Auth ===
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/auth/reset-password',
      name: 'reset-password',
      component: () => import('../views/auth/ResetPasswordView.vue')
    },

    // === Admin ===
    {
      path: '/admin',
      redirect: '/admin/dashboard'
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/admin/DashboardView.vue')
    },
    {
      path: '/admin/items',
      name: 'admin-item-list',
      component: () => import('../views/admin/ItemListView.vue')
    },
    {
      path: '/admin/pengajuan',
      name: 'admin-pengajuan-list',
      component: () => import('../views/admin/SubmissionListView.vue')
    },
    {
      path: '/admin/permintaan',
      name: 'admin-permintaan-list',
      component: () => import('../views/admin/RequestListView.vue')
    },
    {
      path: '/admin/users',
      name: 'admin-user-list',
      component: () => import('../views/admin/UserListView.vue')
    },

    // === Exceptions ===
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
