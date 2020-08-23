var CONST = require("./const");

module.exports = {
  title: `Today I Learned (dg.jung)`,
  description: `Donggoo's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
	  {
        title: 'Pytorch',
        children: CONST.PytorchList
      }
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/dgjung0220/'
      }, {
        text: 'Blog',
        link: 'https://dgjung.me'
      }
    ]
  },
}