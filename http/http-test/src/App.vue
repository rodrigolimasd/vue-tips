<template>
	<div id="app" class="container">
		<h1>HTTP with Axios</h1>
		<b-alert show dismissible v-for="m in messages" 
				:key="m.text"
				:variant="m.type">
			{{ m.text }}
		</b-alert>
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
				<b-button variant="warning" size="lg"
					@click="load(id)">Load</b-button>
					<b-button variant="danger" size="lg"
					class="ml-2" 
					@click="remove(id)">Remove</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			messages: [],
			users: [],
			id: null,
			user: {
				name: '',
				email: ''
			}
		}
	},
	methods: {
		clear() {
			this.user.name = ''
			this.user.email = ''
			this.id = null
			this.messages = []
		},
		load(id){
			this.id = id
			this.user = { ...this.users[id]}
		},
		remove(id){
			this.$http.delete(`/user/${id}`)
			.then(() => {
				this.clear()
				this.getUsers()
			})
			.catch(err => {
				console.log('ERRORR:  ', err)
				this.messages.push({
					text: 'Error on remove!',
					type: 'danger'
				})
			})
		},
		save() {
			const method = this.id ? 'patch' : 'post'
			const endUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[method](`/user${endUrl}`, this.user)
				.then(() => {
					this.clear()
					this.getUsers()
					this.messages.push({
						text: 'Save with success!',
						type: 'success'
					})
				})
			// this.$http.post('user.json', this.user)
			// 	.then(res => this.clear())
		},
		getUsers() {
			this.$http.get('user.json')
				.then(res => this.users = res.data)
		},
		getToken() {
			//get token
			this.$http.defaults.headers.common['Authorization'] = "token"
		}
	},
	created() {
		// this.$http.post('user.json',{
		// 	name: 'Rodrigo',
		// 	email: 'rodrigolimasd@gmail.com'
		// }).then(res => {
		// 	console.log(res)
		// })
		this.getUsers()
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
