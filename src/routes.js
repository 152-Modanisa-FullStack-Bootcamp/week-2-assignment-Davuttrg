import VueRouter from 'vue-router'
import Vue from 'vue'
import Favorites from './pages/Favorites'
import Watch from './pages/Watch'
import Home from './pages/Home'


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/favorites/:userid', component: Favorites },
        { path: '/watch', component: Watch }
    ]
})
Vue.use(VueRouter)

export default router

