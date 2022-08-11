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
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters({
        total: 'totalValue'
    })
    //computed: mapGetters(['totalValue'])
    // computed: {
    //     total() {
    //         return this.$store.getters.totalValue
    //     }
    //     // products() {
    //     //     return this.$store.state.products
    //     // }
    // }
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
