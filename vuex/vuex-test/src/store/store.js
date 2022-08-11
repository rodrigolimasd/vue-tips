import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import parameters from './modules/parameters'

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
    modules: { cart, parameters}
    
})