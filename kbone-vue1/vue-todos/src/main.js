import Vue from 'vue'
// import App from './App.vue'
import Todos from './Todos.vue'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(Todos) },
}).$mount('#app')
