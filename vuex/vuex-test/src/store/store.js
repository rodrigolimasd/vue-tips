import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        amount: 2,
        price: 19.99
    },
    getters: {
        totalValue(state) {
            return state.products.map(p => p.amount * p.price)
                .reduce((total, actual) => total + actual, 0)
        }
    },
    mutations: {
        addProduct(state, payload) {
            state.products.push(payload)
        },
        setAmount(state, payload) {
            state.amount = payload
        },
        setPrice(state, payload) {
            state.price = payload
        }
    },
    actions: {
        addProduct({commit}/*context*/, payload) {
            setTimeout(() => {
                /*context.*/commit('addProduct', payload)
            }, 1000)
        }
    }
})