import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import ResetPassword from '../components/ResetPassword.vue'
import Cards from '../components/Cards.vue'

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
    },
    {
      path: '/cards',
      component: Cards
    },
    {
      path: '/overview',
      redirect: '/cards'
    },
    {
      path: '/friends',
      redirect: '/cards'
    }
  ]
})

export default router