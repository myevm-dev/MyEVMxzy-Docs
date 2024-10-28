import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'My EVM',
  description: 'Welcome to your Web3 home.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Casa', link: '/casa' },
      { text: 'Pro', link: '/pro' },
      { text: 'Win', link: '/win' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Getting Started', link: '/gettingstarted' },
          { text: 'Casa', link: '/casa' },
          { text: 'Pro', link: '/pro' },
          { text: 'Win', link: '/win' },
        ],
      },
    ],
  },
});
