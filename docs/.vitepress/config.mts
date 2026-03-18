import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'aniShark Foundation',
  description: 'aniShark基金会 - Building the Foundation of Animation Data',
  lang: 'zh-CN',

  themeConfig: {
    logo: '/anishark.svg',



    sidebar: {
      // 指南文档侧边栏
      '/api/': [
	  
        {
          text: 'API文档',
          items: [
		    { text: 'API列表', link: '/api/API端点列表' },
			{ text: '01-番剧API文档', link: '/api/01-番剧API文档' },
            { text: '02-平台API文档', link: '/api/02-平台API文档' },
			{ text: '03-角色API文档', link: '/api/03-角色API文档' },
			{ text: '04-制作人员API文档', link: '/api/04-制作人员API文档' },
			{ text: '05-季度API文档', link: '/api/05-季度API文档' },
			{ text: '06-标签API文档', link: '/api/06-标签API文档' },
			{ text: '07-声优API文档', link: '/api/07-声优API文档' },
			{ text: '08-PVAPI文档', link: '/api/08-PVAPI文档' },
			{ text: '09-音频流媒体链接API文档', link: '/api/09-流媒体链接API文档' },
			{ text: '10-广播时间表API文档', link: '/api/10-广播时间表API文档' },
			{ text: '11-视觉资源API文档', link: '/api/11-视觉资源API文档' },
			{ text: '12-描述API文档', link: '/api/12-描述API文档' },
          ]
        },
      ],

      // 博客侧边栏
      '/blog/': [

  {
    text: '2026',
    items: [
      { text: 'XinyuuDB 数据引用声明', link: '/blog/2026/xinyuuDB' }
    ],
  },
],

      // 首页侧边栏
      '/': [
        {
          text: '快速导航',
          items: [
            { text: '数据统计', link: '/stats' },
            { text: '博客动态', link: '/blog/2026/xinyuuDB' },
            { text: 'API文档', link: '/api/' },
          ]
        }
      ]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
