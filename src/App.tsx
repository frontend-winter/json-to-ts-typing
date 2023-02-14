import React, { useContext, useEffect, useState } from "react";
import { ConfigProvider, Form, Layout } from "antd";
import json2ts from "@cyly/json2ts";
import ReactCodemirror2 from "./components/ReactCodemirror2";
import ErrorBoundary from "./components/Alert/ErrorBoundary";
import { json, THEMES } from "./constant";
import { useLocation, useNavigate } from "react-router-dom";
import { getURLParameters } from "@/utils";
import Header from "@/components/Layout/Header";
import Content from "./components/Layout/Content";
import Footer from "@/components/Layout/Footer";
import { defaultTheme, ThemeContext } from "@/context";

export declare type CompileOptions = {
  splitType?: boolean;
  parseArray?: boolean;
  required?: boolean;
  semicolon?: boolean;
  typePrefix?: string;
  typeSuffix?: string;
  indent?: number;
  comment?: "inline" | "block" | false | "false";
  optimizeArrayOptional?: boolean;
  genType?: "type" | "interface";
};

function App() {
  const [value, setValue] = useState(json);
  const theme = useContext(ThemeContext);
  const location = useLocation();
  const navigator = useNavigate();
  const urlParams = getURLParameters<{ theme: string } | undefined>(
    location.search
  );

  const [codeMirrorOptions, setCodeMirrorOptions] = useState({
    lineWrapping: true,
    matchBrackets: true,
    mode: "javascript",
    lineNumbers: true,
    theme:
      THEMES.find((item) => item.value === urlParams?.theme)?.value ??
      "material",
  });

  const [json2tsOptions, setJson2tsOptions] = useState<CompileOptions>({
    splitType: true,
    parseArray: true,
    required: true,
    semicolon: true,
    typePrefix: "",
    typeSuffix: "",
    indent: 2,
    comment: "inline",
    optimizeArrayOptional: true,
    genType: "type",
  });

  let result = undefined;
  try {
    result = json2ts(value, json2tsOptions);
  } catch (e) {
    result = e.toString();
  }

  const [form] = Form.useForm();

  return (
    <ConfigProvider theme={theme.theme}>
      <ErrorBoundary>
        <Layout>
          <Header />
          <Content
            form={form}
            onFinish={() => null}
            onValuesChange={(changedFields) => {
              // console.log(changedFields);
              if (changedFields.theme) {
                setCodeMirrorOptions({
                  ...codeMirrorOptions,
                  ...changedFields,
                });
                navigator("/?theme=" + changedFields.theme);
              } else {
                setJson2tsOptions({
                  ...json2tsOptions,
                  ...changedFields,
                });
              }
            }}
            initialValues={{
              ...json2tsOptions,
              theme: codeMirrorOptions.theme,
            }}
            codeMirrorOptions={codeMirrorOptions}
            factory={() => (
              <ReactCodemirror2
                value={value}
                onBeforeChange={(editor, data, value) => {
                  if (!value) return;
                  setValue(value);
                }}
                options={codeMirrorOptions}
              />
            )}
            value={result}
          />
          <Footer />
        </Layout>
      </ErrorBoundary>
    </ConfigProvider>
  );
}

function HOCApp() {
  // 设置初始皮肤
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? defaultTheme.dark
      : defaultTheme.line
  );

  useEffect(() => {
    // 监听系统颜色切换
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          setTheme(defaultTheme.dark);
        } else {
          setTheme(defaultTheme.line);
        }
      });
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggle: (isDark) => {
          setTheme(() => {
            return isDark ? defaultTheme.line : defaultTheme.dark;
          });
        },
      }}
    >
      <App />
    </ThemeContext.Provider>
  );
}

export default HOCApp;
