<template>
	<dir>
		<ul>
			<li v-for="f in fruits" :key="f">
				{{ f }}
			</li>
			<input type="text" v-model="fruit" @keydown.enter="add">
		</ul>
	</dir>
</template>

<script>
import fruitsMixin from './fruitsMixin'

export default {
	mixins: [fruitsMixin]
}
</script>

<style>

</style>
