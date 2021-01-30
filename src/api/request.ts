import * as qs from "qs";
import { Toast } from "vant";
import { useRouter } from "vue-router";
const baserURl =
  process.env.VITE_API_URL === undefined ? "/apis" : process.env.VITE_API_URL;

// const qs = require('qs')
interface fetchData {
  url: string;
  method: string;
  data?: Object;
}

export default ({ url, data = {}, method = "GET" }: fetchData) =>
  fetch(baserURl + url, {
    method: method.toUpperCase(), // or 'PUT'
    [method.toUpperCase() == "GET" ? "params" : "body"]: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.code === "1") {
        Toast.fail(res.msg);
        return Promise.reject(res);
      } else if (res.code === "401") {
        Toast.fail(res.msg);
        localStorage.removeItem("token");
        useRouter().push("/login");
        return Promise.reject(res);
      } else {
        if (res && res.token) {
          localStorage.setItem("token", res.token);
        }
        return Promise.resolve(res);
      }
    });
