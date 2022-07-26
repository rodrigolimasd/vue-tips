new Vue({
    el: '#test1',
    data: {
        name: 'Rodrigo Lima',
        age: 31,
        image: 'https://i.pinimg.com/564x/05/d1/fc/05d1fcc6658452dcd7105ec213cee2d5.jpg'
    },
    methods: {
        age3times() {
            return this.age * 3
        },
        random() {
            return Math.random()
        }
    }
})