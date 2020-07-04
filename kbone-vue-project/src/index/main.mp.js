import Vue from 'vue'
// 不需要.vue的原因，webpack里面做了配置
import App from './App'

// 通过 export default 对外暴露函数
// 每个小程序的页面编译入口，都需要创建一个sj文件，都要去创建 createApp 函数
export default function createApp() {
    const container = document.createElement('div')
    container.id = 'app'
    document.body.appendChild(container)

    return new Vue({
        el: '#app',
        render: h => h(App)
    }) 
    
}