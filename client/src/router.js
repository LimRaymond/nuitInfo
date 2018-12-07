import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './views/TodoList.vue'
import Home from './views/Home.vue'
import Geo from './views/Geo.vue'
import Weather from './views/Weather.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: {
        name: "Home"
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/Geo',
      name: 'Geo',
      component: Geo,
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: Weather,
    }

  ]
})
