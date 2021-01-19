// import { getters, actions } from '/@modules/vuex'
import { Toast } from "vant";
import store from "/@/store/index";

const whiteList = ["login", "register", "active"];

/**
 *  传入的路由
 * @param {string} routerName 路由名
 * @param {Array<string>} whiteList 白名单
 */
function filterRouteName(routerName, whiteList = []) {
  return whiteList.filter((item) => {
    if (item === routerName) {
      return true;
    } else if (item.split("-")[0] === routerName) {
      return true;
    }
  }).length;
}

export default (router) => {
  /**
   * 添加路由配置
   * to: 目标路由
   * from: 当前路由
   */

  router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");
    if (!token) {
      if (!filterRouteName(to.name, whiteList)) {
        // 如果没有token并且不在白名单中， 强制跳转至login页面
        const toStr = encodeURIComponent(to.fullPath);
        Toast.fail({
          message: "登录超时/登录过期",
          position: "top",
          duration: 3000,
        });
        next({
          name: "login",
          query: {
            jump: toStr,
          },
        });
      } else {
        // 没有token， 但是在白名单之中， 允许通过
        next();
      }
    } else {
      // 用户有token(已经登录)
      const userInfo = store.getters.userInfo;
      if (userInfo.username && userInfo.type) {
        // 已经成功获取到用户的信息
        next();
      } else {
        // 未找到用户信息， 重新获取
        store
          .dispatch("getUserInfo")
          .then(() => {
            next();
          })
          .catch(() => {
            next({
              name: "login",
            });
          });
      }
    }
  });
};
