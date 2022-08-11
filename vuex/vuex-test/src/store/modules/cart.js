export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        totalValue(state, getters, rootState) {
            return state.products.map(p => p.amount * p.price)
                .reduce((total, actual) => total + actual, 0)
        }
    },
    mutations: {
        addProduct(state, payload) {
            state.products.push(payload)
        }
    },
    actions: {
        addProduct({commit, state, rootState}/*context*/, payload) {
            setTimeout(() => {
                /*context.*/commit('addProduct', payload)
            }, 1000)
        }
        // addProduct: {
        //     root: true,
        //     handler({commit, state, rootState}/*context*/, payload) {
        //         setTimeout(() => {
        //             /*context.*/commit('addProduct', payload)
        //         }, 1000)
        //     }
        // }
    }
}