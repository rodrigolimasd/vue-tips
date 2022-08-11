export default {
    state: {
        amount: 2,
        price: 19.99
    },
    mutations: {
        setAmount(state, payload) {
            state.amount = payload
        },
        setPrice(state, payload) {
            state.price = payload
        }
    }
}