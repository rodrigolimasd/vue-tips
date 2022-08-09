<template>
	<div id="app">
		<h1>Routes with VueRouter</h1>
		<!-- <Menu /> -->
		<router-view name="menu"></router-view>
		<router-view />
		<router-view name="menuBottom"></router-view>
	</div>
</template>

<script>
//import Menu from './components/template/Menu'

export default {
	//components: { Menu }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
