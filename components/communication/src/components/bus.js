import Vue from 'vue'
export default new Vue({
    methods: {
        alterAge(age) {
            this.$emit('changedAge', age)
        },
        whenAgeChange(callback) {
            this.$on('changedAge', callback)
        }
    }
})