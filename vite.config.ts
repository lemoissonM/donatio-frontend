import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';
import StylelintPlugin from 'vite-plugin-stylelint';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin(['API_URL', 'CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_CLOUD_PRESET']),
    StylelintPlugin(),
    eslintPlugin({ fix: true }),
  ],
});
