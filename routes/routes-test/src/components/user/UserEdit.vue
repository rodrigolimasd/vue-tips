<template>
    <div class="usuario-editar">
        <div>Edit</div>
        <p><strong>Code: {{ id }}</strong></p>
        <p><strong>Comp: </strong>{{ $route.query.comp ? 'Yes': 'Não' }}</p>
        <p><strong>Lang: </strong>{{ $route.query.lang }}</p>
    </div>
    
</template>

<script>
export default {
    props: ['id']
}
</script>

<style scoped>

</style>