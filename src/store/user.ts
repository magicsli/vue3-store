import { createStore } from "vuex";
import actions from "./action";
interface UserInfo {
    _id: string;
    username: string;
    type: string;
    avatar?: string;
}

export default createStore({
    actions,
    state() {
        return {
            userInfo: {
                _id: "",
                username: "",
                type: "",
                avatar: "",
            },
        };
    },
    mutations: {
        setUserInfo(state: { userInfo: UserInfo }, userInfo: UserInfo) {
            Object.assign(state.userInfo, userInfo);
        },
    },
    getters: {
        userInfo(state) {
            return state.userInfo || {};
        },
    },
});
