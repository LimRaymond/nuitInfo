import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import App from './App.vue'
import Home from './views/Home.vue'
import TodoList from './views/TodoList.vue'
import Geo from './views/Geo.vue'
import Weather from './views/Weather.vue'

Vue.config.productionTip = false

new Vue({
  Geo,
  router,
  TodoList,
  Home,
  Weather,
  render: function (h) { return h(App) }
}).$mount('#app')
