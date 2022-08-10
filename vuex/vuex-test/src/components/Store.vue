<template>
    <Panel title="Virtual Store" green>
        <div class="store">
            <span>Add</span>
            <input type="number" v-model.number="amout">
            <span>items of <strong>$</strong></span>
            <input type="number" v-model.number="price">
            <button @click="add">Now!</button>
        </div>
    </Panel>
</template>

<script>

export default {
    data() {
        return {
            sequence: 1,
            amout: 1,
            price: 9.99,
        }
    },
    methods: {
        add() {
            const product = {
                id: this.sequence,
                name: `Product ${this.sequence}`,
                amout: this.amout,
                price: this.price
            }
            this.sequence++
            
            this.$store.state.products.push(product)
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
