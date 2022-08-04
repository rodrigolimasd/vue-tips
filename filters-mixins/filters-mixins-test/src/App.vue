<template>
	<div id="app">
		<h1>Filter & Mixins </h1>
		<h6>{{ version }}</h6>
		<hr>
		<p>{{ userLoged }}</p>
		<p>{{ cpf | cpf | inverse}}</p>
		<input type="text" :value="cpf | cpf">
		<hr>
		<Fruits />
		<hr>
		<dir>
			<ul>
				<li v-for="f in fruits" :key="f">
					{{ f }}
				</li>
				<input type="text" v-model="fruit" @keydown.enter="add">
			</ul>
		</dir>
	</div>
</template>

<script>
import Fruits from './Fruits.vue'
import fruitsMixin from './fruitsMixin'
import userMixin from './userMixin'

export default {
	components: {Fruits},
	mixins: [fruitsMixin, userMixin],
	filters: {
		cpf(value) {
			const arr = value.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '92179437030',
			fruits: ['avocado']
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
