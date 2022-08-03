<template>
    <div class="component">
        <h2>User's Info</h2>
        <p>Details...</p>
        <p>User name <strong>{{ reverseName() }}</strong></p>
        <p>Age is <strong>{{age}}</strong></p>
        <button @click="resetName">reset Name</button>
        <button @click="resetNameFn">reset Name (callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
            //default: 'Anonymous'
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // }
        },
        age: Number,
        resetNameFn: Function
    },
    methods: {
        reverseName() {
            return this.name.split('').reverse().join('')
        },
        resetName() {
            this.name = 'Rodrigo'
            this.$emit('nameChange', this.name)
        },
    }
}
</script>

<style scoped>
    .component {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
