// import { getters, actions } from '/@modules/vuex'
 export default (router) => {
  /**
   * 添加路由配置
   * to: 目标路由
   * from: 
   */
  router.beforeEach((to, from, next) => {
    // ...
    console.log("to", to)
    console.log("from", from)
    console.log("next", next)
    next()
  })
 }