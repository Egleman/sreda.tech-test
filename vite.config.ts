import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      AutoImport({
        include: [
          /\.[tj]s?$/,
          /\.vue$/,
          /\.vue\?vue/,
          /\.md$/,
        ],
        imports: [
          'vue',
          'vue-router',
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true,
          },
        ],
        ignore: [],
        defaultExportByFilename: false,
        dirs: [
          './src/components/**',
          './src/composables/**',
          './src/types/**'
        ],
        dts: true,
        ignoreDts: [
          'ignoredFunction',
          /^ignore_/
        ],
        vueTemplate: true,
        resolvers: [],
        viteOptimizeDeps: true,
        injectAtEnd: true,
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        biomelintrc: {
          enabled: false,
          filepath: './.biomelintrc-auto-import.json',
        },
      }),
      Components(
          {
            dirs: ["./src/components/**"],
            dts: true
          }
          )
  ],
  resolve: {
    extensions: ['.ts', '.json', '.vue'],
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
})
