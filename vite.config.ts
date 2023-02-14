import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginCompression from "vite-plugin-compression";
// @ts-ignore
import path from "node:path";
const baseUrl = "json-to-ts-typing";

// https://vitejs.dev/config/
export default defineConfig((config) => {
  return {
    resolve: {
      alias: {
        // @ts-ignore
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      react(),
      vitePluginCompression({
        threshold: 1024 * 10, // 对大于 10kb 的文件进行压缩
        // deleteOriginFile: true,
      }),
    ],
    server: {
      open: true,
    },

    base: config.mode === "development" ? "/" : `/${baseUrl}/`,
    build: {
      minify: false,
      outDir: baseUrl,
      //   关闭文件计算
      reportCompressedSize: false,
      sourcemap: false,
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
          entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
          assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  };
});
