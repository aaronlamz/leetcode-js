export default {
  title: 'LeetcodeJS',
  description: 'Leetcode solutions written with JavaScript.',
  base:'/leetcode-js/',
  // Theme related configurations.
  themeConfig: {
    logo: '/logo.png',

    head: [['link', { rel: 'icon', href: '/leetcode-js/favicon.ico' }]],
    nav: [
      { text: 'Introduction', link: '/md/leetcode/intro.md'},
      { text: 'Github', link: 'https://github.com/aaronlamz/leetcode-js'}
    ],
    sidebar: {
      '/md/leetcode/':[
        {
          text: 'Algorithm',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/md/leetcode/intro' },
            { text: '1.Two Sum', link: '/md/leetcode/01/index' },
            { text: '2.Add Tow Numbers', link: '/md/leetcode/02/index' },
          ]
        }
      ]
    }
  }
}
