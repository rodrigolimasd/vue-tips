<template>
    <Panel title="Cart" blue :notification="products.length">
        <div class="cart">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amout</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="p in products" :key="p.name">
                        <td>{{ p.name }}</td>
                        <td>{{ p.amout }}</td>
                        <td>{{ p.price | money }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | money }}</strong></span>
            </div>
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
                { id: 1, name: 'Product 1', amout: 7, price: 14.55 },
                { id: 2, name: 'Product 2', amout: 10, price: 22.99 },
                { id: 3, name: 'Product 3', amout: 1, price: 43.18 },
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

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
