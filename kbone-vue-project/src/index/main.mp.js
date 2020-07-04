import Vue from 'vue'
// 路由
import Router from 'vue-router'
// 不需要.vue的原因，webpack里面做了配置
import App from './App'
import AAA from './AAA.vue'
import BBB from './BBB.vue'

// 通过 export default 对外暴露函数
// 每个小程序的页面编译入口，都需要创建一个sj文件，都要去创建 createApp 函数
export default function createApp() {
    const container = document.createElement('div')
    container.id = 'app'
    document.body.appendChild(container)

    window.onload = function () {
        // 自动获取wx手机页面的宽度
        document.documentElement.style.fontSize = wx.getSystemInfoSync().screenWidth / 16 + 'px'
        // 使用rem的单位
        document.documentElement.style.backgroundColor = '#fffbe7'
    }

    // 错误
    window.onerror = (message, source, lineno, colno, error) => {
        console.log('window.onerror => ', message, source, lineno, colno, error)
    }
    window.addEventListener('error', evt => console.log('error'))

    // 载入插件
    Vue.use(Router)

    // router: {
    // 多个路由，一个页面显示多个路由的信息，，用于页面的跳转
    // index: [
    // entry 作为默认显示哪一个
    // '/test/aaa',
    // '/test/bbb'
    // ],
    const router = new Router({
        mode: 'history',
        routerArr: [
            {
                path: '/test/aaa',
                component: AAA
            }, {
                path: '/test/bbb',
                component: BBB
            }
        ]
    })

    return new Vue({
        el: '#app',
        // 路由的装载
        router: router,
        render: h => h(App)
    })

}