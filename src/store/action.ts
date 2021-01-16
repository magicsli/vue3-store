import { getUser } from "/@/api/user";
export default {
  getUserInfo(ctx) {
    return getUser()
      .then((res) => {
        ctx.commit("setUserInfo", res.data);
      })
      .catch((res) => {
        ctx.commit("setUserInfo", {});
        localStorage.removeItem("token");
      });
  },
};
