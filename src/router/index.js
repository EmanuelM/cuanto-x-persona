import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Personas from '../views/Personas.vue'
import Cuentas from '../views/Cuentas.vue'
import Guardados from '../views/Guardados.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
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
  },
  {
    path: '/guardados',
    name: 'guardados',
    component: Guardados,
  },
]

const router = new VueRouter({
  routes
})

export default router
