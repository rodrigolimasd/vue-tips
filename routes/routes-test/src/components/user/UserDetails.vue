<template>
    <div class="usuario-detalhe">
        <h3>Details</h3>
        <hr>
        <p><strong>Code: {{ id }}</strong></p>
        <!-- <router-link tag="button" primario
            :to="`/user/${$route.params.id}/edit`">
            Edit
        </router-link> -->
        <router-link tag="button" primario
            :to="{ name: 'editUserRoute', params: {id }, 
            query: { comp: true, lang: 'en'} }">
            Edit
        </router-link>
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