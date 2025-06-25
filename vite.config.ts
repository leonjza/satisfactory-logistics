import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/highs/build/highs.wasm',
          dest: 'highs',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  define: {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    APP_VERSION: JSON.stringify(require('./package.json').version),
  },
  build: {
    sourcemap: true,
  },
});
