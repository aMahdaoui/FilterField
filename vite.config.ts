import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

import * as packageJson from './package.json';
// import EsLint from 'vite-plugin-linter';
// const { EsLinter, linterPlugin } = EsLint;

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    dts({
      include: ['src/components/'],
    }),
    tsConfigPaths(),
    cssInjectedByJsPlugin(),
    // linterPlugin({
    //   include: ['./src}/**/*.{ts,tsx}'],
    //   linters: [new EsLinter({ configEnv })],
    // }),
  ],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'react-mui-filter',
      formats: ['es', 'umd'],
      fileName: (format) => `react-mui-filter.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
