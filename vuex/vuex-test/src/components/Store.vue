<template>
    <Panel title="Virtual Store" green>
        <div class="store">
            <span>Add</span>
            <input type="number" v-model.number="amount">
            <span>items of <strong>$</strong></span>
            <input type="number" v-model.number="price">
            <button @click="add">Now!</button>
        </div>
    </Panel>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            sequence: 1
        }
    },
    computed: {
        amount() {
            return this.$store.state.parameters.amount
        },
        price() {
            return this.$store.state.parameters.price
        }
    },
    methods: {
        //...mapMutations(['addProduct']),
        ...mapActions(['addProduct']),
        add() {
            const product = {
                id: this.sequence,
                name: `Product ${this.sequence}`,
                amount: this.amount,
                price: this.price
            }
            this.sequence++
            
           //this.$store.state.products.push(product)
          // this.$store.commit('addProduct', product)
          //this.$store.dispatch('addProduct', product)
          this.addProduct(product)
        }
    }
}
</script>

<style>
    .store {
        display: flex;
        justify-content: center;
    }

    .store > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
