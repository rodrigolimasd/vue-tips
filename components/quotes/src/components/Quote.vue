<template>
    <div class="quote">
        <slot name="author"></slot>
        <slot name="text"></slot>
        <slot name="font"></slot>
    </div>
</template>

<script>
export default {
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
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
