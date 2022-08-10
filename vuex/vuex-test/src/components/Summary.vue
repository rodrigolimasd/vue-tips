<template>
    <Panel title="Summary" purple>
        <div class="summary">
            <span>Total: <strong>{{ total | money }}</strong></span>
            <hr>
            <button>Finalize!</button>
        </div>
    </Panel>
</template>

<script>
export default {
    computed: {
        total() {
            return this.products.map(p => p.amout * p.price)
                .reduce((total, actual) => total + actual, 0)
        }
    },
    data() {
        return {
            products: [
                { name: 'Product 1', amout: 7, price: 14.55 },
                { name: 'Product 2', amout: 10, price: 22.99 },
                { name: 'Product 3', amout: 1, price: 43.18 },
            ]
        }
    }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
