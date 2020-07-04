// 将代码配置成小程序

// exports对外暴露
module.exports = {
    // 源 kbone的源
    // 所有的页面走唯一的地址，否则会跨域
    // 写公司的域名、
    origin: 'https://test.miniprogram.com',
    // 入口文件，有多个文件，在页面上规定，显示哪一部分路由
    entry: '/test/aaa',
    // 路由
    router: {
        // 多个路由，一个页面显示多个路由的信息，，用于页面的跳转
        index: [
            // entry 作为默认显示哪一个
            '/test/aaa',
            '/test/bbb'
        ],
        // 特殊服务的跳转
        redirct: {
            // 当页面没有发现的时候，跳转
            notFound: 'index',
            // 访问被拒绝的时候
            occessDenied: 'index'
        },
        // 构建输出的配置
        generate: {
            // 属性，全局的，公共的。子元素，可以在应用里面使用
            globalVars: [
                // 可以全局的使用
                ['TEST_VAR_STRING', '\'miniprogram\''],
                ['TEST_VAR_NUMBER', '123']
            ],
            // 自动安装小程序的依赖，安装全局的依赖or变量，或者是公共的变量
            // 自动的build
            autoBuildNpm: 'npm'
        }
    },

    app: {
        // 小程序的头部就可以了看到了
        navigationBarTitleText: 'kbone-vue-project'
    },
    // 所有页面的全部配置
    global: {
        // 页面是不是可以使用rem
        rem: true,
        // 页面的样式是否可以修改
        pageStyle: true,
    },
    // 项目的配置，合并到 project.config.json
    projectConfig: {
        // 小程序的appid
        appid: '',
        projectname: 'kbone-vue-proejct'
    },
    // 合并到package.json里面
    packageConfig: {
        author: 'xuegao'

    }

}