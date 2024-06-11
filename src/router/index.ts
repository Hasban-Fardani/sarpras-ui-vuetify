import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/auth/login'
    },

    // === Auth ===
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: {
        auth: false
      }
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
      path: '/admin/kategori',
      name: 'admin-kategori',
      component: () => import('../views/admin/CategoryListView.vue'),
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
      path: '/admin/items/item-in',
      name: 'admin-item-in',
      component: () => import('../views/admin/ItemInListView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/items/item-in/:id',
      name: 'admin-item-in-detail',
      component: () => import('../views/admin/ItemInDetailView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/items/item-out',
      name: 'admin-item-out',
      component: () => import('../views/admin/ItemOutListView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/items/item-out/:id',
      name: 'admin-item-out-detail',
      component: () => import('../views/admin/ItemOutDetailView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/items/so',
      name: 'admin-item-so',
      component: () => import('../views/admin/StockOpnameListView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/pengadaan',
      name: 'admin-pengadaan-list',
      component: () => import('../views/admin/SubmissionListView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/pengadaan/tambah',
      name: 'admin-pengadaan-add',
      component: () => import('../views/admin/SubmissionAddView.vue'),
      meta: {
        auth: true,
        role: 'admin'
      }
    },
    {
      path: '/admin/pengadaan/:id',
      name: 'admin-pengadaan-detail',
      component: () => import('../views/admin/SubmissionDetailView.vue'),
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
      path: '/admin/permintaan/:id',
      name: 'admin-permintaan-detail',
      component: () => import('../views/admin/RequestDetailView.vue'),
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
      redirect: '/user/home'
    },
    {
      path: '/user/home',
      name: 'user-home',
      component: () => import('../views/user/HomeView.vue'),
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
      path: '/user/permintaan/:id',
      name: 'user-permintaan-detail',
      component: () => import('../views/user/RequestDetailView.vue'),
      meta: {
        auth: true,
        role: 'user'
      }
    },
    {
      path: '/user/pengadaan',
      name: 'user-pengadaan',
      component: () => import('../views/user/SubmissionView.vue'),
      meta: {
        auth: true,
        role: 'user'
      },
    },
    {
      path: '/user/pengadaan/tambah',
      name: 'user-pengadaan-add',
      component: () => import('../views/user/SubmissionAddView.vue'),
      meta: {
        auth: true,
        role: 'user'
      },
    },
    {
      path: '/user/pengadaan/:id',
      name: 'user-pengadaan-detail',
      component: () => import('../views/user/SubmissionDetailView.vue'),
      meta: {
        auth: true,
        role: 'user'
      }
    },


    // === account profile ===
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        auth: true
      }
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
router.beforeEach(async (to, _, next) => {
  const user = useUserStore()
  await user.load()

  if (to.meta.auth && !user.isLogin) {
    return next({ path: '/auth/login' })
  }

  if (to.name == 'login' && user.isLogin) {
    return next({ path: '/' + user.data.role })
  }

  if (to.meta.role && to.meta.role != user.data.role) {
    return next({ name: 'forbidden' })
  }

  return next()
})

router.onError((err) => {
  console.log(err)
})

export default router
