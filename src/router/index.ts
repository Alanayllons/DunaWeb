// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Nosotros from '../views/Nosotros.vue'
import Faqs from '../views/Faqs.vue'
import Registro from '../views/Registro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/faqs',
    name: 'Faqs',
    component: Faqs
  },
    {
    path: '/registro',
    name: 'Registro',
    component: Registro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

