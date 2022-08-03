<template>
    <div class="container">
        <h1>User Component</h1>
        <p>This is a good component!</p>
        <p>Name is <strong>{{name}}</strong></p>
        <p>Age is <strong>{{age}}</strong></p>
        <hr>
        <button @click="alterName">Alter Name</button>
        <div class="components">
            <app-user-info 
                :name="name" 
                :age="age"
                @nameChange="name = $event" 
                :resetNameFn="resetName" />
            <app-user-edit 
                :age="age"
                @changeAge="age = $event"/>
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
            name: 'Rodrigo',
            age: 31
        }
    },
    methods: {
        alterName() {
            this.name = 'Lima'
        },
        resetName() {
            this.name = 'Rodrigo'
            this.$emit('nameChange', this.name)
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
