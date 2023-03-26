import { defineConfig } from 'vitepress'
import { tab } from '@mdit/plugin-tab'

export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [{ text: 'Markdown Examples', link: '/markdown-examples' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  markdown: {
    config: md => {
      md.use(tab, { name: 'tabs' })
    },
  },
})
