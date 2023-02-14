import { createContext } from "react";
import { theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";

export const defaultTheme = {
  line: {
    token: {
      borderRadius: 4,
      colorPrimary: "pink",
    },
    algorithm: theme.defaultAlgorithm,
  },
  dark: {
    token: {
      borderRadius: 4,
      colorPrimary: "pink",
    },
    algorithm: theme.darkAlgorithm,
  },
};

export const ThemeContext = createContext<{
  theme: ThemeConfig;
  toggle: (isDark: boolean) => void;
}>({
  theme: defaultTheme.line,
  toggle: () => {},
});
