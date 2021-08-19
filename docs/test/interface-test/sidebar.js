module.exports = [
  {
    title: '接口测试',
	path: '/test/interface-test/',
    collapsable: false,
    children: []
  },
  {
    title: '抓包工具',
	path: '/test/interface-test/packet-capture-tool/',
    collapsable: false,
    children: [
			{
				title: 'fiddler',
				path: '/test/interface-test/packet-capture-tool/fiddler',
				collapsable: false,
				children: [
					{
						title: '断点',
						path: '/test/interface-test/packet-capture-tool/fiddler/breakpoints.md',
						collapsable: true,
					}
				]
			}
    ]
  }
]
