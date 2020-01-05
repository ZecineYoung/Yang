import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import BlogList from '@/components/BlogList'
import Blog from '@/components/Blog'
import TwoWayBuilding from '@/components/TwoWayBuilding'
import form_input from '@/components/form_input'
//
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/BlogList',
      name:'BlogList',
      component:BlogList
    },
    {
      path:'/blog',
      name:'Blog',
      component:Blog
    },
    {
      path:'/TwoWayBuilding',
      name:'TwoWayBuilding',
      component:TwoWayBuilding
    },
    {
      path:'/form_input',
      name:'form_input',
      component:form_input
    }
  ]
})
