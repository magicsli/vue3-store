import {createRouter,  createWebHistory} from 'vue-router'
import beforeEach from "./beforeEach"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('/@/page/login.vue')
    },
    {
      path: '/tabbar',
      component: () => import('/@/page/home/index.vue')
    },
    {
      path: '/',
      redirect: '/tabbar'
    }
  ]
})
beforeEach(router)
export default router