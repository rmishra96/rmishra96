import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import CONFIG from './gitprofile.config';

const gaScript = CONFIG.googleAnalytics?.id
  ? `<!-- Google Analytics -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.id}"></script>\n<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${CONFIG.googleAnalytics.id}');</script>`
  : '';

export default defineConfig({
  base: CONFIG.basePath || '/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: CONFIG.seo?.title || '',
          metaDescription: CONFIG.seo?.description || '',
          metaImageURL: CONFIG.seo?.image || '',
          googleAnalyticsScript: gaScript,
        },
      },
    }),
  ],
});
