module.exports = [
  {
    title: '接口测试',
	  path: '/test/interface-test/',
    collapsable: false
  },
  {
    title: '抓包',
    path: '/test/interface-test/packet-capture-tool',
    collapsable: false,
    children: [
      {
        title: 'fiddler',
        path: '/test/interface-test/packet-capture-tool/fiddler',
        collapsable: true,
          children: [
            {
              title: '基础',
              path: '/test/interface-test/packet-capture-tool/fiddler/Fiddler.md',
              collapsable: true
            },
            {
            title: '断点',
            path: '/test/interface-test/packet-capture-tool/fiddler/breakpoints.md',
            collapsable: true
            }

        ]
      }
    ]
  }
]