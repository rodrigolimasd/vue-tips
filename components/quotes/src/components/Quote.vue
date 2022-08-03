<template>
    <div class="quote">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text: String
    }

}
</script>

<style scoped>
    .quote {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
