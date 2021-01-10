import {createRouter,  createWebHistory} from 'vue-router'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('/@/page/login')
    },
    {
      path: '/tabbar',
      component: () => import('/@/page/home/index')
    },
    {
      path: '/',
      redirect: '/tabbar'
    }
  ]
})

export default router