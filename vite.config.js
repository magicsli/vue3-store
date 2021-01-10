import path from "path";
module.exports = {
  port: 4000,
  open: true,
  module: "common",
  alias: {
    "/@/": path.resolve(__dirname, "src/"),
  },
  optimizeDeps: {
    include: ["lodash"],
  },
  proxy: {
    "/apis": {
      target:
        "https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/apis/, ""),
    },
  },
};
