<template>
	<div id="app">
		<h1>Directives</h1>
		<hr>
		<p v-text="'usign directive v-text'"></p>
		<p v-html="'Usign directive <strong>v-html</strong>'"></p>
		<hr>
		<p v-vip="'red'">Usign custom directive</p>
		<p v-vip:back.lazy="color">Usign custom directive</p>
		<hr>
		<p v-vip-local.lazy="{color1: 'blue', lazy: 3500}">Usign custom directive</p>
		<p v-vip-local:back.lazy.toggle="{color1: 'blue', color2: 'red', lazy: 2000, interval: 500}">
			Fortaleza 🦁 !!!</p>
	</div>
</template>

<script>
export default {
	directives: {
		'vip-local': {
			bind(el, binding, vnode){
				const applyColor = color => {
					if(binding.arg === 'back') {
						el.style.backgroundColor = color
					} else {
						el.style.color = color
					}
				}
				let lazy = 0
				if(binding.modifiers['lazy']) lazy = binding.value.lazy

				const color1 = binding.value.color1
				const color2 = binding.value.color2
				let actualColor = color1

				setTimeout(() => {
					
					
					if(binding.modifiers['toggle']){
						setInterval(()=> {
							actualColor = actualColor === color1 ? color2 : color1
							applyColor(actualColor)
						}, binding.value.interval)
					} else {
						applyColor(binding.value.color1)
					}
				}, lazy)
			}
	  	}
	},
	data() {
		return {
			color: 'blue'
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
</style>
