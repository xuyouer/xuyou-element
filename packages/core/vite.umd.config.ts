import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "./dist/umd",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "XuYouElement",
      fileName: "index",
      formats: ["umd"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (chunkInfo) => {
          // if (chunkInfo.name === "style.css") return "index.css"
          // return chunkInfo.name as string

          if (chunkInfo.name?.endsWith(".css")) return "index.css"
          return chunkInfo.name as string
        }
      },
    }
  }
})