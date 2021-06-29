import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "/" */ '../views/Home.vue')
  },
  {
    path: '/propietario',
    name: 'Propietario',
    component: () => import(/* webpackChunkName: "propietario" */ '../views/Propietario.vue')
  },
  {
    path: '/datos',
    name: 'Datos',
    component: () => import(/* webpackChunkName: "datos" */ '../views/Datos.vue')
  },
  {
    path: '/datos2',
    name: 'Datos2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Datos2.vue')
  },
  {
    path: '/vehicle',
    name: 'Vehicle',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vehicle.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

/* {
  path: '/',
  name: 'Home',
  component: () => import('../views/Home.vue')}*/