import React, { useContext } from "react";
import { Layout, Switch, theme, Typography } from "antd";
import { defaultTheme, ThemeContext } from "@/context";
import { currentTimeRange } from "@/utils";

const { Header } = Layout;
const { useToken } = theme;
const HeaderComponent = () => {
  const theme = useContext(ThemeContext);

  const { token } = useToken();
  return (
    <Header
      style={{
        position: "relative",
        zIndex: 10,
        background: token.colorBgBase,
        width: "100%",
        boxShadow:
          // "0 1px 2px 0 rgb(0 0 0 / 3%), 0 1px 6px -1px rgb(0 0 0 / 2%), 0 2px 4px 0 rgb(0 0 0 / 2%)",
          `0 1px 2px 0 ${token.colorBorder}, 0 1px 6px -1px ${token.colorBorder}, 0 2px 4px 0 ${token.colorBorder}`,
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography.Title level={1} style={{ margin: 0 }}>
            json-to-ts-typing
          </Typography.Title>
          <div
            style={{
              display: "flex",
              position: "relative",
              top: "10px",
              left: "10px",
              fontWeight: "bold",
            }}
          >
            {currentTimeRange()}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Switch
            checkedChildren="🌜"
            unCheckedChildren="🌞"
            checked={theme.theme === defaultTheme.dark}
            onChange={(v) => theme.toggle(v)}
          />
          <a
            style={{ marginLeft: 20 }}
            target="_blank"
            href="https://github.com/frontend-winter/json-to-ts-typing"
          >
            <h1>Github</h1>
          </a>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
