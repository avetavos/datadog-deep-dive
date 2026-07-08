// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://deep-dive.avetavos.com',
  base: '/datadog',
  output: 'static',
  integrations: [starlight({
      title: 'Datadog — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/datadog/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/datadog/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/datadog/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/datadog/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#632CA6' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Datadog — From Zero to Hero" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/datadog/sw.js',{scope:'/datadog/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/datadog-deep-dive' }],
      sidebar: [
        { label: 'Foundations', items: [{ autogenerate: { directory: 'foundations' } }] },
        { label: 'Infrastructure & Metrics', items: [{ autogenerate: { directory: 'infrastructure-and-metrics' } }] },
        { label: 'Log Management', items: [{ autogenerate: { directory: 'log-management' } }] },
        { label: 'APM & Distributed Tracing', items: [{ autogenerate: { directory: 'apm-and-distributed-tracing' } }] },
        { label: 'Correlating Logs, Traces & Metrics', items: [{ autogenerate: { directory: 'correlating-signals' } }] },
        { label: 'Monitors, Alerting & SLOs', items: [{ autogenerate: { directory: 'monitors-alerting-and-slos' } }] },
        { label: 'Production & Ecosystem', items: [{ autogenerate: { directory: 'production-and-ecosystem' } }] },
      ],
      }), preact()],
});
