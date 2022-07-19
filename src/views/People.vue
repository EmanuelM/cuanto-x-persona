<template>
	<div class="columns text-center">
    <div class="column col-12">
    	<table class="table" id="people-table">
      	<thead>
        	<tr>
          	<th>Persona</th>
            <th>Pagó</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in people" :key="index">
          	<td><input type="text" class="form-input" v-model="person.name" /></td>
          	<td>
          		<div class="input-group">
          			<span class="input-group-addon">$</span>
          			<input type="number" class="form-input" v-model="person.put" />
          			<button class="btn btn-dark input-group-btn" @click="removePerson(person, index)"><font-awesome-icon icon="trash" /></button>
          		</div>
          	</td>
          </tr>
				</tbody>
      </table>
	  	<button class="btn btn-link text-dark py-2" @click="addPerson">
	  		<font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon> Agregar persona
	  	</button>
		</div>

		<div class="column col-12 my-4">
			<router-link to="/cuentas" class="btn btn-outline-dark" :disabled="people.length < 2 || total < 1">Calcular</router-link>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'People',
		data: () => ({
			total: 0,
		}),
		methods: {
			addPerson: function() {
				this.$store.dispatch('addPerson');
			},
			removePerson: function(persona, index) {
				this.$store.dispatch('removePerson', index);
			},
		},
		computed: {
			people: function() {
				let bills = this.$store.getters.getPeople;
				this.total = bills.reduce((total, person) => total + parseFloat(person.put), 0);

				return bills;
			}
		}
	}
</script>