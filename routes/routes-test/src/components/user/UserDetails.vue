<template>
    <div class="usuario-detalhe">
        <h3>Details</h3>
        <hr>
        <p><strong>Code: {{ id }}</strong></p>
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
    
}
</script>

<style scoped>

</style>