import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from 'views/home/index.vue'
import Vuex from 'views/vuex/index.vue'
import NotFound from 'views/error/404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'Home'
  },
  {
    name: 'Home',
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    name: 'Vuex',
    path: '/vuex',
    component: Vuex,
    meta: {
      title: 'Vuex页面'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
