import Vue from 'vue'
import Router from 'vue-router'
// import Root from 'pages/Root.vue'
// import Help from 'pages/Help.vue'
// unknown reason with above syntax:"export 'Help' was not found in 'pages'
// import {
//     Help
// } from 'pages'
import Pages from 'pages'

Vue.use(Router)
//     创建router实例，定义路由
const router = new Router({
    component: Pages.Help,
    routes: [
        {
            path: '/help',
            component: Pages.Help
        }
    ],
    mode: 'history'
})

export default router
