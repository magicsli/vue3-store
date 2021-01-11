import Fetch from "./request";
import * as types from "./user.type";

// 获取用户信息
export const getUser = (data: object = {}) =>
  Fetch({
    url: "/user",
    method: "get",
    data,
  });

// 登录
export const login = (data: object = {}) =>
  Fetch({
    url: "/login",
    method: "post",
    data,
  });

// 注册
export const register = (data: types.registerData) =>
  Fetch({
    url: "/register",
    method: "post",
    data,
  });
