import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), dts({ tsconfigPath: 'tsconfig.build.json' })],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'leds-conectafapes-biblioteca-componentes',
      fileName: (format) => `leds-conectafapes-biblioteca-componentes.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
