import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

function FooterComponent() {
  return (
    <Footer>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <h3 style={{ textAlign: "center" }}>
          @2023 - 2023 系统由 TypeScript + React + Ant Design + Nodejs驱动
        </h3>
      </div>
    </Footer>
  );
}

export default FooterComponent;
