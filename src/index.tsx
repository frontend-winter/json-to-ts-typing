import "./polyfills";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <BrowserRouter
    // 生产环境配置二级路径
    basename={"/" + import.meta.env.BASE_URL.replaceAll("/", "")}
  >
    <App />
  </BrowserRouter>
);
