module.exports = {
    title: "XueF's 测试笔记",
    description: '一名测试女生的进阶之路',
    dest: './dist',
    port: '7777',
    head: [
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { charset: "utf-8", src: "/js/main.js" }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
        smoothScroll: true
    },
    plugins: ['@vuepress/back-to-top']
}