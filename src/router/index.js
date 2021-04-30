import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home.vue'
import circle from '../views/circle/circle.vue'
import chat from '../views/chat/chat.vue'
import mine from '../views/mine/mine.vue'
import start from '../views/start/start.vue'
import guide from '../views/start/guide.vue'
import login from '../views/start/login.vue'
import yzm from '../views/start/yzm.vue'
import password from '../views/start/password.vue'
import opinion from '../views/common/opinion.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/start'
    },
    {
      path: '/start',
      component: start
    },
    {
      path: '/guide',
      component: guide
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/password',
      component: password
    },
    {
      path: '/yzm',
      component: yzm
    },
    {
      path: '/opinion',
      component: opinion
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/circle',
      component: circle
    },
    {
      path: '/chat',
      component: chat
    },
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/publish',
      name: 'Publish',
      component: () => import( /* webpackChunkName: "publish" */ '../views/circle/publish.vue')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import( /* webpackChunkName: "detail" */ '../views/mine/detail.vue')
    },
    {
      path: '/setting',
      meta: {
        requiresAuth: true,
        keepAlive: true,
      },
      name: 'Setting',
      component: () => import( /* webpackChunkName: "setting" */ '../views/mine/setting.vue')
    },
  ]
})

export default router