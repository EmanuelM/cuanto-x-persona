import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	people: [],
    billsStored: [],
  },
  mutations: {
  	createPeople: function(state, people) {
  		state.people = people;
  	},
  	addPerson: function(state) {
  		state.people.push({
  			name: 'Persona ' + (state.people.length + 1),
  			put: 0,
  			owe: 0,
  			receive: 0,
  			ready: false,
  		});
  	},
  	removePerson: function(state, index) {
  		state.people.splice(index, 1);
  	},
    setBills: function(state, billsStored) {
      state.billsStored = billsStored;
    },
    saveBill: function(state, bill) {
      state.billsStored.push(bill);
    },
    setPeople: function(state, people) {
      state.people = people;
    },
  },
  actions: {
  	createPeople: function(context, total) {
  		let people = [];

  		for (var i = 0; i < total; i++) {
  			people.push({
  				name: 'Persona ' + (i+1),
  				put: 0,
  				owe: 0,
  				receive: 0,
  				ready: false,
  			});
  		}

  		context.commit('createPeople', people);
  	},
  	addPerson: function(context) {
  		context.commit('addPerson');
  	},
  	removePerson: function(context, index) {
  		context.commit('removePerson', index);
  	},
    setBills: function(context, billsStored) {
      context.commit('setBills', billsStored);
    },
    saveBill: function(context, bill) {
      context.commit('saveBill', bill);
    },
    setPeople: function(context, personas) {
      context.commit('setPeople', personas);
    },
  },
  getters: {
  	getPeople: function(state) {
  		return state.people;
  	},
    getBillsStored: function(state) {
      return state.billsStored;
    }
  }
})
