import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	personas: [],
    guardados: [],
  },
  mutations: {
    /**
     * Cargar N personas la cuenta actual
     * @param {array} personas
     */
  	crearPersonas: function(state, personas) {
  		state.personas = personas;
  	},
    /** Agregar una nueva persona a la cuenta actual */
  	agregarPersona: function(state) {
  		state.personas.push({
  			nombre: 'Persona ' + (state.personas.length+1),
  			puso: 0,
  			debe: 0,
  			cobra: 0,
  			listo: false,
  		});
  	},
    /**
     * Sacar a persona de la cuenta actual
     * @param {int} index
     */
  	sacarPersona: function(state, index) {
  		state.personas.splice(index, 1);
  	},
    /**
     * Setear guardados traidos de localStorage
     * @param {array} guardados
     */
    setGuardados: function(state, guardados) {
      state.guardados = guardados;
    },
    /**
     * Guardar cuenta actual
     * @param  {array} cuenta
     */
    guardarCuenta: function(state, cuenta) {
      state.guardados.push(cuenta);
    },
    /**
     * Cargar cuenta previamente guardada
     * @param {array} personas
     */
    setPersonas: function(state, personas) {
      state.personas = personas;
    },
  },
  actions: {
    /**
     * Cargar N personas la cuenta actual
     * @param {int} total
     */
  	crearPersonas: function(context, total) {
  		let personas = [];

  		for (var i = 0; i < total; i++) {
  			personas.push({
  				nombre: 'Persona ' + (i+1),
  				puso: 0,
  				debe: 0,
  				cobra: 0,
  				listo: false,
  			});
  		}

  		context.commit('crearPersonas', personas);
  	},
    /** Agregar una nueva persona a la cuenta actual */
  	agregarPersona: function(context) {
  		context.commit('agregarPersona');
  	},
    /**
     * Sacar a persona de la cuenta actual
     * @param {int} index
     */
  	sacarPersona: function(context, index) {
  		context.commit('sacarPersona', index);
  	},
    /**
     * Setear guardados traidos de localStorage
     * @param {array} guardados
     */
    setGuardados: function(context, guardados) {
      context.commit('setGuardados', guardados);
    },
    /**
     * Guardar cuenta actual
     * @param  {array} cuenta
     */
    guardarCuenta: function(context, cuenta) {
      context.commit('guardarCuenta', cuenta);
    },
    /**
     * Cargar cuenta previamente guardada
     * @param {array} personas
     */
    setPersonas: function(context, personas) {
      context.commit('setPersonas', personas);
    },
  },
  getters: {
    /** Obtener cuenta actual */
  	getPersonas: function(state) {
  		return state.personas;
  	},
    /** Obtener cuentas guardadas */
    getGuardados: function(state) {
      return state.guardados;
    }
  }
})
