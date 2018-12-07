import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import App from './App.vue'
import Home from './views/Home.vue'
import TodoList from './views/TodoList.vue'

Vue.config.productionTip = false

new Vue({
  router,
  TodoList,
  Home,
  render: function (h) { return h(App) }
}).$mount('#app')
