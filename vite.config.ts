import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  publicDir: "public",
  plugins: [react()],
  base: "/miniproject",
});


