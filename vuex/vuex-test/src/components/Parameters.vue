<template>
    <Panel title="Parameters" red>
        <div class="parameters">
            <span>
                <strong>Standard quantity: </strong> 
                <input type="number" v-model="amout">
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
    data() {
        return {
            amout: 0,
            price: 0
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
