import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';
import CONFIG from './gitprofile.config';
import { buildThemeInitScript } from './src/utils/theme';

const basePath = CONFIG.basePath || '/';
const gaScript = CONFIG.googleAnalytics?.id
  ? `<!-- Google Analytics -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.id}"></script>\n<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${CONFIG.googleAnalytics.id}');</script>`
  : '';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: CONFIG.seo?.title || '',
          metaDescription: CONFIG.seo?.description || '',
          metaImageURL: CONFIG.seo?.imageURL || '',
          basePath,
          themeInitScript: buildThemeInitScript(CONFIG.themeConfig),
          googleAnalyticsScript: gaScript,
        },
      },
    }),
    ...(CONFIG.enablePWA
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            workbox: {
              navigateFallback: undefined,
            },
            manifest: {
              name: CONFIG.seo?.title || 'Portfolio',
              short_name: 'Portfolio',
              description: CONFIG.seo?.description || 'Personal Portfolio',
              scope: basePath,
              start_url: basePath,
              display: 'standalone',
              theme_color: '#ffffff',
              background_color: '#ffffff',
            },
          }),
        ]
      : []),
  ],
});
