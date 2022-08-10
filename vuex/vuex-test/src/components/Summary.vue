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
        },
        products() {
            return this.$store.state.products
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
