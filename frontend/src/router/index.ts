import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import ResetPassword from '../components/ResetPassword.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/reset-password',
      component: ResetPassword
    }
  ]
})

export default router