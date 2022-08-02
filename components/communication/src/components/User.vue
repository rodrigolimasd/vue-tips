<template>
    <div class="container">
        <h1>User Component</h1>
        <p>This is a good component!</p>
        <hr>
        <button @click="alterName">Alter Name</button>
        <div class="components">
            <app-user-info :name="name" />
            <app-user-edit />
        </div>
    </div>
</template>

<script>
import AppUserInfo from './UserInfo'
import AppUserEdit from './UserEdit'

export default {
    components: { AppUserInfo, AppUserEdit },
    data() {
        return {
            name: 'Rodrigo'
        }
    },
    methods: {
        alterName() {
            this.name = 'Lima'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .components {
        display: flex;
    }

    .components > * {
        margin: 10px;
    }
</style>
