<template>
	<div id="app" class="container">
		<h1>HTTP with Axios</h1>
		<b-card>
			<b-form-group label="Name: ">
				<b-form-input type="text" size="lg"
					v-model="user.name"
					placeholder="Name">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail: ">
				<b-form-input type="email" size="lg"
					v-model="user.email"
					placeholder="E-mail">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="save" variant="primary" size="lg">Save</b-button>
			<b-button @click.prevent="getUsers" variant="success" size="lg" class="ml-2">Get Users</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(u, id) in users" :key="id">
				<strong>Name: </strong> {{ u.name}}<br>
				<strong>Email: </strong> {{ u.email}}<br>
				<strong>ID: </strong> {{ id }}<br>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			user: {
				name: '',
				email: ''
			}
		}
	},
	methods: {
		save() {
			this.$http.post('user.json', this.user)
				.then(res => {
						this.user.name = ''
						this.user.email = ''
					})
		},
		getUsers() {
			this.$http.get('user.json')
				.then(res => this.users = res.data)
		}
	},
	created() {
		// this.$http.post('user.json',{
		// 	name: 'Rodrigo',
		// 	email: 'rodrigolimasd@gmail.com'
		// }).then(res => {
		// 	console.log(res)
		// })
	}

}
</script>


<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
