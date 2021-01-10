import * as qs from "qs";
// const qs = require('qs')
interface fetchData {
  url: string;
  method: string;
  data?: Object;
}

export default ({ url, data = {}, method = "GET" }: fetchData) =>
  fetch(url, {
    method: method.toUpperCase(), // or 'PUT'
    [method.toUpperCase() == "GET" ? "params" : "body"]: qs.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  }).then((res) => res.json());
