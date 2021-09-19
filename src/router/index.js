import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/administrations/user',
        name: 'UserManagement',
        component: () => import('../views/administrations/UserManagement.vue')
      },
      {
        path: '/administrations/role',
        name: 'RoleManagement',
        component: () => import('../views/administrations/RoleManagement.vue')
      },
      {
        path: '/administrations/menu',
        name: 'MenuManagement',
        component: () => import('../views/administrations/MenuManagement.vue')
      },
      {
        path: '/administrations/session',
        name: 'SessionManagement',
        component: () => import('../views/administrations/SessionManagement.vue')
      },
      {
        path: '/administrations/variable',
        name: 'VariableParameters',
        component: () => import('../views/administrations/VariableParameters.vue')
      },
      {
        path: '/administrations/activity',
        name: 'LogActivity',
        component: () => import('../views/administrations/LogActivity.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const loginState = localStorage.getItem('is-auth')
  if (to.name !== 'Login' && !loginState) next({ name: 'Login' })
  else next()
})

export default router
