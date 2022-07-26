new Vue({
    el: '#test2',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            alert('Hey!')
        },
        alterValue(event) {
            this.value = event.target.value
        }
    }
})