import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores/user'

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
      component: () => import('../views/admin/DashboardView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/items',
      name: 'admin-item-list',
      component: () => import('../views/admin/ItemListView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/pengajuan',
      name: 'admin-pengajuan-list',
      component: () => import('../views/admin/SubmissionListView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/permintaan',
      name: 'admin-permintaan-list',
      component: () => import('../views/admin/RequestListView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/users',
      name: 'admin-user-list',
      component: () => import('../views/admin/UserListView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },

    // === User ===
    {
      path: '/user',
      redirect: '/user/dashboard'
    },
    {
      path: '/user/dashboard',
      name: 'user-dashbaord',
      component: () => import('../views/user/DashboardView.vue'),
      meta: {
        auth: true,
        role: 'user'
      }
    },
    {
      path: '/user/permintaan',
      name: 'user-permintaan',
      component: () => import('../views/user/RequestView.vue'),
      meta: {
        auth: true,
        role: 'user'
      }
    },
    {
      path: '/user/pengajuan',
      name: 'user-pengajuan',
      component: () => import('../views/user/SubmissionView.vue'),
      meta: {
        auth: true,
        role: 'user'
      }
    },

    // === account profile ===
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },

    // === Exceptions ===
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/error/NotFoundView.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: () => import('../views/error/ForbiddenView.vue')
    }
  ]
})

// Login middleware
router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  await user.load()

  if (to.meta.auth && !user.isLogin) {
    return next({ path: '/auth/login' })
  }

  if (to.meta.role && to.meta.role != user.data.role) {
    return next({ name: 'forbidden' })
  }

  return next()
})

export default router
