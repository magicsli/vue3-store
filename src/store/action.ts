import { getUser } from "/@/api/user";
import { initIo } from "/@/api/socket";
export default {
  getUserInfo(ctx) {
    return getUser()
      .then(async (res) => {
        await ctx.commit("setUserInfo", res.data);
        initIo()
      })
      .catch((res) => {
        ctx.commit("setUserInfo", {});
        localStorage.removeItem("token");
      });
  },
};
