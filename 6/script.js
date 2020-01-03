const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Hola a todos'
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    },
    computed: {},
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }

});