import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constRoutes = [
    {
    path: '/',
    redirect: '/index'
    },
    {
    path: '/index',
    name: 'index',
    component: resolve => require(['@/views/index.vue'], resolve)
    }
]
export default new Router({
    mode: 'hash', // hash
    routes: constRoutes
})
