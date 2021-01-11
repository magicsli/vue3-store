import * as qs from "qs";
// const qs = require('qs')
interface fetchData {
  url: string;
  method: string;
  data?: Object;
}

export default ({ url, data = {}, method = "GET" }: fetchData) =>
  fetch("/apis" + url, {
    method: method.toUpperCase(), // or 'PUT'
    [method.toUpperCase() == "GET" ? "params" : "body"]: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    }),
  }).then((res) => res.json());
