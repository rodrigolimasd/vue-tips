new Vue({
    el: '#test3',
    data: {
        value: 0
    },
    computed: {
        result() {
            return this.value == 37 ? 'Valor Igual' : 'Valor Diferente'
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
})