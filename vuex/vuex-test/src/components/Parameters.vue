<template>
    <Panel title="Parameters" red>
        <div class="parameters">
            <span>
                <strong>Standard quantity: </strong> 
                <input type="number" v-model="amount">
            </span>
            <span>
                <strong>Standard price: </strong>
                <input type="number" v-model="price">
            </span>
        </div>
    </Panel>
</template>

<script>
export default {
    computed: {
        amount: {
            get() {
                return this.$store.state.amount
            },
            set(value){
                this.$store.commit('setAmount', value)
            }
        },
        price: {
            get() {
                return this.$store.state.price
            },
            set(value){
                this.$store.commit('setPrice', value)
            }
        }
    }
}
</script>

<style>
    .parameters {
        display: flex;
        justify-content: space-around;
    }
</style>
