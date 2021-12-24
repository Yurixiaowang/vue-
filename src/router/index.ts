import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

const List = () => import('../views/List.vue')
const Detail = () => import('../views/Detail.vue')

Vue.use(VueRouter)

export enum RouteNames {
  Home = 'Home',
  List = 'List',
  Detail = 'Detail',
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      depth: 1
    }
  },
  {
    path: '/list',
    name: RouteNames.List,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: List,
    meta: {
      depth: 2,
      keepAlive: true
    }
  },
  {
    path: '/detail/:id',
    name: RouteNames.Detail,
    component: Detail,
    meta: {
      depth: 3
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
