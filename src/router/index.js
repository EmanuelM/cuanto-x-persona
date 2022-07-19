import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import People from '../views/People.vue'
import Bills from '../views/Bills.vue'
import BillsStored from '../views/BillsStored.vue'

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
    component: People,
  },
  {
    path: '/cuentas',
    name: 'cuentas',
    component: Bills,
  },
  {
    path: '/guardados',
    name: 'guardados',
    component: BillsStored,
  },
]

const router = new VueRouter({
  routes
})

export default router
