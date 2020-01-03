Vue.component('saludo', {
    template: `
    <div>
    <h1>{{saludo}}</h1>
    <h3>Hola</h3>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola a todos'
        }
    }
})

Vue.component('contador', {
    template: `
    <div>
    <h1>{{contador}}</h1>
    <button @click="contador++">Sumar 1</button>
    </div>
    `,
    data() {
        return {
            contador: 0
        }
    }
})