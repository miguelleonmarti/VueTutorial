const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola Mundo con Vue",
    frutas: [
      { nombre: "Pera", cantidad: 0 },
      { nombre: "Manzana", cantidad: 5 },
      { nombre: "Platano", cantidad: 10 }
    ],
    nuevaFruta: "",
    total: 0
  },
  methods: {
    agregarFruta() {
        this.frutas.push({
            nombre: this.nuevaFruta,
            cantidad: 0
        });        
        this.nuevaFruta = '';
    },
    sumarCantidad() {

    }
  },
  computed: {
      sumarFrutas() {
          return this.frutas.reduce((sum, fruta) => {return sum + fruta.cantidad}, 0);
      }
  }
});