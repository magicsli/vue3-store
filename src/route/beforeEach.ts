// import { getters, actions } from '/@modules/vuex'
import { Toast } from "vant";
const token = localStorage.getItem("token");

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
    if (!token && !filterRouteName(to.name, whiteList)) {
      // 如果没有token并且不在白名单中， 强制跳转至login页面
      Toast.fail({
        message: "登录超时/登录过期",
        position: "top",
        duration: 3000,
      });
      next("/login");
    } else {
      next();
    }
  });
};
