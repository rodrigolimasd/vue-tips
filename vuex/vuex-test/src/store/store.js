import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
        ]
    },
    getters: {
        totalValue(state) {
            return state.products.map(p => p.amout * p.price)
                .reduce((total, actual) => total + actual, 0)
        }
    }
})