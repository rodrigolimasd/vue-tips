import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('vip', {
	bind(el, binding, vnode){
		//el.style.backgroundColor = 'lightgreen'

		let lazy = 0
		if(binding.modifiers['lazy']) lazy = 3000

		setTimeout(() => {
			if(binding.arg === 'back') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, lazy)

	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
