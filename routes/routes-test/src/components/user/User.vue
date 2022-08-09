<template>
    <div class="user">
        <h2>Users</h2>
        <hr>
        <router-view />
        <button sucesso @click="goHome">Back</button>  
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            //this.$router.push("/")
           // this.$router.push({ path: "/" })
            this.$router.push({ name: "homeRoute" })
        }
    }
}
</script>

<style scoped>

</style>