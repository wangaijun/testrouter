import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // path: '/about/:topic', //传参方式一
      path: '/about',  //传参方式三
      name: 'about', //传参方式二
      component: About
    }
  ]
})
