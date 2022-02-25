import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioView from '../views/InicioView.vue'
import PlayasView from '../views/PlayasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
  },
  {
    path: '/CompInicio',
    name: 'Inicio',
    component: InicioView

  },
  {
    path: '/CompPlayas',
    name: 'Playas',
    component: PlayasView
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
