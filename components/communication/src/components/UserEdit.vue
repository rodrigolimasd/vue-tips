<template>
    <div class="component">
        <h2>Edit user data</h2>
        <p>Edit information</p>
        <p>Age is <strong>{{age}}</strong></p>
        <button @click="alterAge">Alter age</button>
    </div>
</template>

<script>
export default {
    props:{
         age: Number
    },
    methods: {
        alterAge() {
           // this.age = 33
           this.$emit('changeAge', 33)
        }
    }
}
</script>

<style scoped>
    .component {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
