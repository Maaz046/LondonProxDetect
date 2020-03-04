const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// const response = proxy{
//   target: "https://bpdts-test-app.herokuapp.com",
//   changeOrigin: true,
//   ws: true,
//   logLevel: "debug"
// };

app.use(
  "/user/3",
  createProxyMiddleware({
    target: "https://bpdts-test-app.herokuapp.com",
    changeOrigin: true,
    ws: true,
    logLevel: "debug"
  })
);

app.listen(3000, () => console.log("Server runnning on 3000"));
