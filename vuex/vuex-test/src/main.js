import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Panel from './components/Panel'
Vue.component('Panel', Panel)

Vue.filter('money', valor => {
	return `$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
