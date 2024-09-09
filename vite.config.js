import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Confirma que o build vai para a pasta 'dist'
    assetsDir: 'Assets', // Garante que a pasta Assets seja gerada corretamente
  },
  server: {
    open: true, // Abre automaticamente no navegador
  },
  base: './',
})
