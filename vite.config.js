import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => ({
  define: {
    [command === 'serve' ? 'global' : '_global']: {},
  },

  server: {
    hmr: {
      clientPort: 5173,
      host: '127.0.0.1',
      protocol: 'ws',
    },
  },

  root: 'src',
  envDir: '..',

  base: '/goit-advancedjs-hw-03/',

  optimizeDeps: {
    entries: ['index.html'],
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,

    rollupOptions: {
      input: glob.sync('./src/*.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },

        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },

  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    SortCss({
      sort: 'mobile-first',
    }),
  ],
}));