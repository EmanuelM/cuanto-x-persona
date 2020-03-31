import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	personas: [],
  },
  mutations: {
  	crearPersonas: function(state, personas) {
  		state.personas = personas;
  	},
  	agregarPersona: function(state) {
  		state.personas.push({
  			nombre: 'Persona ' + (state.personas.length+1),
  			puso: 0,
  			debe: 0,
  			cobra: 0,
  			listo: false,
  		});
  	},
  	sacarPersona: function(state, index) {
  		state.personas.splice(index, 1);
  	},
  },
  actions: {
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
  	agregarPersona: function(context) {
  		context.commit('agregarPersona');
  	},
  	sacarPersona: function(context, index) {
  		context.commit('sacarPersona', index);
  	},
  },
  getters: {
  	getPersonas: function(state) {
  		return state.personas;
  	},
  }
})
