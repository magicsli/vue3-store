
import { getUser } from '/@/api/user'
export default {
    getUserInfo(ctx) {
        getUser().then(res => {
            ctx.commit("setUserInfo", res)
        })
    }
}