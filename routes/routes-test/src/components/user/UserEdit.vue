<template>
    <div class="usuario-editar">
        <div>Edit</div>
        <p><strong>Code: {{ id }}</strong></p>
        <p><strong>Comp: </strong>{{ $route.query.comp ? 'Yes': 'Não' }}</p>
        <p><strong>Lang: </strong>{{ $route.query.lang }}</p>
        <button primario @click="confirmed=true">Confirm</button>
       <div id="footer">
            <h3>Welcome Vue</h3>
       </div>
    </div>
    
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if(this.confirmed) {
            next()
        } else {
            if(confirm('Are you sure?')){
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>

<style scoped>
    #footer {
        margin-top: 1000px;
    }
</style>