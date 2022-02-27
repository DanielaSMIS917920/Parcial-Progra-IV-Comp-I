import Vue from 'vue'
import VueRouter from 'vue-router'
import platillos from '../views/platillos.vue'
import InicioView from '../views/InicioView.vue'
import PlayasView from '../views/PlayasView.vue'
import simbolosPatrios from '../components/simbolosPatrios.vue'
import Turismo from '../views/Turismo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CompInicio',
    component: InicioView
  },
  {
    path: '/CompPlayas',
    name: 'CompPlayas',
    component: PlayasView
  },
  {
    path: '/platillos_tipicos',
    name: 'platillos_tipicos',
    component: platillos
  },
   {
    path: '/simbolosPatrios',
    name: 'simbolosPatrios',
    component: simbolosPatrios
  },
    {
    path: '/viajes',
    name: 'viajes',
    component: Turismo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
