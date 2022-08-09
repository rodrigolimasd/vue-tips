import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/Start'
import User from './components/user/User'
import UserList from './components/user/UserList'
import UserDetails from './components/user/UserDetails'
import UserEdit from './components/user/UserEdit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
    {
        path: '/',
        component: Start,
        name: 'homeRoute'
    },
    {
        path: '/user',
        component: User,
        props: true,
        children: [
            { path: '', component: UserList },
            { path: ':id', component: UserDetails, props: true },
            { path: ':id/edit', component: UserEdit, props: true,
            name: 'editUserRoute' },
        ]
    }
    ]
})
