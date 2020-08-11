module.exports = {
	title: "XueF's 测试笔记",
	description: '一个测试小白的进阶之路',
	dest: './dist',
	port: '7777',
	head: [
		['link',{rel: 'stylesheet', href: '/css/style.css'}]
	],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: require('./nav.js'),
		sidebar: require('./sidebar.js'),
		//sidebarDepth: 2,
		//lastUpdated: 'Last Updated',
		//searchMaxSuggestions: 10,
		//serviceWorker: {
		//	updatePopup: {
		//		message: '有新的内容',
		//		buttonText: '更新'
		//	}
		//},
		//editLinks: true,
		//editLinkText: '在github上编辑此页'
	}
}

