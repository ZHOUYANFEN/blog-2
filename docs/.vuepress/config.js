module.exports = {
	title: '知码学院',
	description: '军哥带你上王者',
	dest: './dist',
	port: '7777',
	//head: [
	//	['link',{rel: 'icon', href: '/logo.jpg'}]
	//],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: [{
			text: '懵逼指南', 
			link: '/guide/'
		}],
		//siderbar: {
		//	'/guide/': [
		//		{
		//			title: '新手指南',
		//			collapsable: true,
		//			children: [
		//				'/guide/notes/one',
		//			]
		//		},
		//		{
		//			title: '知码学院',
		//			collapsable: true,
		//			children: [
		//				'/guide/notes/two',
		//			]
		//		}
		//	]
		//},
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

