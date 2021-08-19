module.exports = [
  {
    title: '安全测试必备',
	path: '/test/safety-test/',
    collapsable: false,
    children: [
			
    ]
  },
  {
    title: 'Web安全测试',
	  path: '/test/safety-test/web-security',
    collapsable: false,
    children: [
			{
				title: 'XSS',
				path: '/test/safety-test/web-security/XSS.md',
				collapsable: true
			},
			{
				title: 'csrf',
				path: '/test/safety-test/web-security/csrf.md',
				collapsable: true
			}
    ]
  }
]
