<template>
    <div class="component">
        <h2>User's Info</h2>
        <p>Details...</p>
        <p>User name <strong>{{ name }}</strong></p>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style scoped>
    .component {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
