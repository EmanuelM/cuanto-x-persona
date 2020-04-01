<template>
	<div class="columns text-center">
    <div class="column col-12">
    	<table class="table" id="tabla-personas">
      	<thead>
        	<tr>
          	<th>Persona</th>
            <th>Pagó</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(persona, index) in personas">
          	<td><input type="text" class="form-input nombre" v-model="persona.nombre" /></td>
          	<td>
          		<div class="input-group">
          			<span class="input-group-addon">$</span>
          			<input type="number" class="form-input" v-model="persona.puso" />
          			<button class="btn btn-dark input-group-btn" @click="sacarPersona(persona, index)"><font-awesome-icon icon="trash" /></button>
          		</div>
          	</td>
          </tr>
				</tbody>
      </table>
	  	<button class="btn btn-link text-dark" @click="agregarPersona">
	  		<font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon> &nbsp;Agregar persona
	  	</button>
		</div>

		<!-- volver -->
		<div class="column col-12 my-4">
			<router-link to="/cuentas" class="btn btn-outline-dark" :disabled="personas.length < 2 || total < 1">Calcular</router-link>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'Personas',
		data: () => ({
			total: 0,
		}),
		methods: {
			agregarPersona: function() {
				this.$store.dispatch('agregarPersona');
			},
			sacarPersona: function(persona, index) {
				this.$store.dispatch('sacarPersona', index);
			},
		},
		computed: {
			personas: function() {
				let cuentas = this.$store.getters.getPersonas;
				this.total = cuentas.reduce((total, persona) => total + parseFloat(persona.puso), 0);

				return cuentas;
			}
		}
	}
</script>