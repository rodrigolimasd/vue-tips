<template>
    <div class="user">
        <h2>Users</h2>
        <hr>
        <p><strong>Code: {{ id }}</strong></p>
        <button sucesso @click="goHome">Back</button>  
    </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
    methods: {
        goHome() {
            //this.$router.push("/")
            this.$router.push({ path: "/" })
        }
    }
}
</script>

<style scoped>

</style>