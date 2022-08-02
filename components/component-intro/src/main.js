import Vue from 'vue'
import App from './App.vue'
import CountersComponent from './CountersComponent.vue'

Vue.config.productionTip = false
Vue.component('app-counters', CountersComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
