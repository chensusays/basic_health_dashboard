import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';
import { resolve } from "node:path";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}

  return defineConfig({
    plugins: [react()],
    define: {'process.env': process.env},
    resolve: {
      alias: [
        { find: "@", replacement: resolve(__dirname, "./src") },
        { find: "@Actions", replacement: resolve(__dirname, "./src/Services/Actions") },
        { find: "@Components", replacement: resolve(__dirname, "./src/Components") },
        { find: "@Config", replacement: resolve(__dirname, "./src/Config") },
        { find: "@Reducers", replacement: resolve(__dirname, "./src/Services/Reducers") },
        { find: "@Services", replacement: resolve(__dirname, "./src/Services") },
        { find: "@Styles", replacement: resolve(__dirname, "./src/Styles")}
      ]
    },
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  })
}
