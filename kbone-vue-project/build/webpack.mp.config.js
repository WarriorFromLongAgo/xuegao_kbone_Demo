const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// 构建小程序代码
const MpPlugin = require('mp-webpack-plugin')

module.exports = {
    // mode 我们是打包成生产环境的信息，还是开发环境的，
    // development 开发，可以进行优化，不进行压缩
    // production 生产环境，进行代码压缩，或者是打包的优化
    mode: 'production',

    // extry 入口文件
    // 定义webpack的入口
    // 定义多少个，就是小程序多少个页面，
    // 对象的key顺序，也对应着 小程序json，也就是app.js文件里面的，pages里面数组元素的顺序
    // 谁是第一个，就是谁先打包
    entry: {
        index: path.resolve(__dirname, '../src/index/main.mp.js')
    },

    // 出口，编译完以后的信息
    // 第一个表示存放的是，静态的js文件
    // 第二个，文件名，[name].js
    // library，暴露的函数
    // libraryExport，暴露的方法
    // libraryTarget 挂载的位置，挂载到window下面
    output: {
        path: path.resolve(__dirname, '../dist/mp/common'),
        filename: '[name].js',
        library: 'createApp',
        libraryExport: 'default',
        libraryTarget: 'window'
    },

    // webpack的配置，必须
    target: 'web',

    // 配置编译vue的信息，配置loder
    // 载入一些插件
    module: {
        // 规则，多个规则，
        rules: [
            {
                // 解析css，将css文件编译并且抽离成.css文件，放到项目里面
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }, {
                // 解析vue
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                // 解析js，es5，es6语法
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                // 不处理
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    // 设置哪些可以编译的扩展名
    resolve: {
        // 所有的文件
        extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [
        new MiniCssExtractPlugin({
            // name 是 index里面的路径，css转wxss
            filenam: '[name].wxss'
        }),
        new VueLoaderPlugin(),
        // 编译小程序的配置文件，kbone官网推荐的
        new MpPlugin(require('./miniprogram.config.js'))
    ]

}