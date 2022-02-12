module.exports = [
  {
    title: '基础理论',
	path: '/test/interface-test/',
    collapsable: false,
    children: [
    	{
			title: 'Restful规范',
			path: '/test/interface-test/Restful规范',
			collapsable: true,
		},
		{
			title: '三种状态机制',
			path: '/test/interface-test/三种状态机制',
			collapsable: true,
		},
    ]
  },
  {
    title: '测试工具',
	path: '/test/interface-test/tools/',
    collapsable: false,
    children: [
			{
				title: 'fiddler',
				path: '/test/interface-test/tools/packet-capture-tool/fiddler',
				collapsable: false,
				children: [
					{
						title: '断点',
						path: '/test/interface-test/tools/packet-capture-tool/fiddler/breakpoints.md',
						collapsable: true,
					}
				]
			}
    ]
  }
]
