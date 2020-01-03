const app = new Vue({
  el: "#app",
  data: {
    titulo: "GYM con Vue",
    tareas: [],
    nuevaTarea: ""
  },
  methods: {
    agregarTarea() {
      console.log("Tarea agregada");
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });
      this.nuevaTarea = "";
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    editarTarea(index) {
      this.tareas[index].estado = true;
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    eliminar(index) {
      this.tareas.splice(index, 1);
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    }
  },
  computed: {},
  created: function() {
      let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
      console.log(datosDB);
      if(datosDB === null) {
          this.tareas = [];
      } else {
          this.tareas = datosDB;
      }
      
  }
});
