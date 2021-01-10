import Fetch from "./request";

export const getUser = (data: object = {}) =>
  Fetch({
    url: '/apis/getinfo',
    method: "get",
    data,
  });
