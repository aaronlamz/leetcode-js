export default {
  title: 'LeetcodeJS',
  description: 'Leetcode solutions written with JavaScript.',
  base:'/leetcode-js/',
  head: [
    ['link', { rel: 'icon', href: '/leetcode-js/favicon.png'}]
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
            { text: 'Introduction', link: '/md/leetcode/intro'},
            { text: '1. 两数之和', link: '/md/leetcode/01/'},
            { text: '2. 两数相加', link: '/md/leetcode/02/'},
            { text: '3. 无重复字符的最长子串', link: '/md/leetcode/03/'},
            { text: '4. 寻找两个正序数组的中位数', link: '/md/leetcode/04/'},
            { text: '5. 最长回文子串', link: '/md/leetcode/05/'},
            { text: '6. Z 字形变换', link: '/md/leetcode/06/'},
          ]
        },
        {
          text: 'Data Structures and Algorithms',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/md/data-structure/intro'},
          ]
        }
      ],
    }
  }
}
