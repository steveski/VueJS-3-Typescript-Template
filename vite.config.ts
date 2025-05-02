import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vueDevTools(), vue()],
  resolve: {
    alias: {
      // Now `@/components/Foo.vue` → `src/components/Foo.vue`
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts', // optional: global test setup
  },
});
