import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'My EVM',
  description: 'Welcome to your Web3 home.',

  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'rainETH', link: '/raineth' },
      { text: 'Splash', link: 'https://splash.wtf' },
      { text: 'PTBook', link: 'https://ptbook.xyz' },

      // {
      //   text: 'Menu',
      //   items: [
      //     { text: 'About', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/gettingstarted' },
          { text: 'Splash', link: '/splash' },
          { text: 'rainETH', link: '/rainETH' },
          // ...
        ],
      },
    ],
  },
});
