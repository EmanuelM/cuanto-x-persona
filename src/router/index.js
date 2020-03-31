import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Personas from '../views/Personas.vue'
import Cuentas from '../views/Cuentas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personas',
    name: 'personas',
    component: Personas,
  },
  {
    path: '/cuentas',
    name: 'cuentas',
    component: Cuentas,
  }
]

const router = new VueRouter({
  routes
})

export default router
