import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import parameters from './modules/parameters'

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    //example state with modules
    // state: {
    //     cart: {
    //         products: []
    //     },
    //     parameters: {
    //         amount: 0,
    //         price: 0
    //     }
    // }
    state: {
        version: '1.0.0',
        appName: 'Vue app'
    },
    //getters,
    getters: {
        ...getters
    },
    modules: { cart, parameters}
    
})