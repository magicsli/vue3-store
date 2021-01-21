import path from "path";
module.exports = {
  port: 5200,
  open: true,
  module: ["common", "es6"],
  alias: {
    "/@/": path.resolve(__dirname, "src/"),
  },
  optimizeDeps: {
    include: ["lodash"],
  },
  proxy: {
    "/apis": {
      target: "http://localhost:4000",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/apis/, ""),
    },
  },
};
