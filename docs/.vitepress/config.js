export default {
  title: 'LeetcodeJS',
  description: 'Leetcode solutions written with JavaScript.',
  base:'/leetcode-js/',
  head: [
    ['link', { rel: 'icon', href: '/leetcode-js/favicon.ico'}]
  ],
  // Theme related configurations.
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Introduction', link: '/md/leetcode/intro.md'},
      { text: 'Github', link: 'https://github.com/aaronlamz/leetcode-js'}
    ],
    sidebar: {
      '/md/':[
        {
          text: 'Leetcode',
          collapsible: true,
          items: [
            { text: '简介', link: '/md/leetcode/intro' },
            { text: '1.Two Sum', link: '/md/leetcode/01/index' },
            { text: '2.Add Tow Numbers', link: '/md/leetcode/02/index' },
          ]
        },
        {
          text: '数据结构与算法',
          collapsible: true,
          items: [
            { text: '简介', link: '/md/data-structure/intro' },
          ]
        }
      ],
    }
  }
}
