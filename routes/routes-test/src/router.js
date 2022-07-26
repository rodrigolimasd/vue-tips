import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/Start'
import User from './components/user/User'
import UserList from './components/user/UserList'
//import UserDetails from './components/user/UserDetails'
//import UserEdit from './components/user/UserEdit'
import Menu from './components/template/Menu'
import MenuPt from './components/template/MenuPt'

Vue.use(Router)

//lazy load user.js
const UserEdit = () => import(/* webpackChunkName: "user" */'./components/user/UserEdit')
const UserDetails = () => import(/* webpackChunkName: "user" */'./components/user/UserDetails')

 const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition) {
            return savedPosition
        }
        // else if (to.hash) {
        //     return {
        //       selector: to.hash,
        //       behavior: 'smooth'
        //       // , offset: { x: 0, y: 10 }
        //     }
        // } 
        else {
            return { x:0, y: 0 }
        }
    },
    routes:[
    {
        path: '/',
       // component: Start,
        name: 'homeRoute',
        components: {
            default: Start,
            menu: Menu
        }
    },
    {
        path: '/user',
        //component: User,
        components: {
            default: User,
            menu: MenuPt,
            menuBottom: MenuPt
        },
        props: true,
        children: [
            { path: '', component: UserList },
            { path: ':id', component: UserDetails, props: true,
            beforeEnter: (to, from, next) => {
                next()
            } },
            { path: ':id/edit', component: UserEdit, props: true,
            name: 'editUserRoute' },
        ]
    }, {
        path: "/redirect",
        redirect: "/user"
    }, {
        path: "/*",
        redirect: "/"
    }
    ]
})

router.beforeEach((to, from, next) => {

    next()
})

export default router
