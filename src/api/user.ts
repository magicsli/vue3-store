import Fetch from "./request";

export const getUser = (data: object) =>
  Fetch({
    url:
      "https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test/getinfo",
    method: "get",
    data: {},
  });
