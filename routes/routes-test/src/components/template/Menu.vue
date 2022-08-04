<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                 <a>Home</a>
            </router-link>
            <router-link to="/user/10" tag="li" active-class="active">
                <a>Users 1</a>
            </router-link>
            </router-link>
            <router-link to="/user/20" tag="li" active-class="active">
                <a>Users 2</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>