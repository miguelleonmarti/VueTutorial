Vue.component('padre', {
    template: `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre: {{ numeroPadre }}</h2>
        <button class="btn btn-primary" @click="numeroPadre++">Incrementar</button>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
        <h4>{{ nombrePadre }}</h4>
    </div>
    `,
    data() {
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})