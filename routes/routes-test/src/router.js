import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/Start'
import User from './components/user/User'
import UserList from './components/user/UserList'
import UserDetails from './components/user/UserDetails'
import UserEdit from './components/user/UserEdit'
import Menu from './components/template/Menu'
import MenuPt from './components/template/MenuPt'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            { path: ':id', component: UserDetails, props: true },
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
