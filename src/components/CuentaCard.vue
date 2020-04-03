<template>
	<div class="card mb-3">
	  <div class="card-header">
	    <div class="card-title h5">Cuenta #{{ cuenta.id }}</div>
	    <div class="card-subtitle text-gray">Guardada el {{ cuenta.fecha }}</div>
	  </div>
	  <div class="card-body">
	  	<p class="mb-3">
	  		<strong>{{ personas }} personas</strong> <br>
	  		${{ cadaUno }} por persona <br>
	  		El total es de ${{ total }}
	  	</p>
	  </div>
	  <div class="card-footer">
	    <button class="btn btn-dark mr-2" @click="cargarGuardado(cuenta)"><font-awesome-icon icon="eye" class="mr-1" /> Ver</button>
	    <button class="btn btn-link" @click="borrarGuardado(cuenta)"><font-awesome-icon icon="trash" class="mr-1" /> Borrar</button>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'CuentaCard',
		props: {
			cuenta: Object,
		},
		computed: {
			// cantidad de personas en la cuenta
			personas: function() {
				return this.cuenta.personas.length;
			},
			// monto total gastado
			total: function() {
				return this.cuenta.personas.reduce((total, persona) => total + persona.puso, 0).toFixed(2);
			},
			// cuanto paga cada uno
			cadaUno: function() {
				return (this.total / this.personas).toFixed(2);
			},
		},
		methods: {
			// borrar cuenta guardada
			borrarGuardado: function(cuenta) {
				let guardados = this.$store.getters.getGuardados;
				guardados.splice(guardados.indexOf(cuenta), 1);

				this.$store.dispatch('setGuardados', guardados);
				localStorage._db = JSON.stringify(guardados);
			},
			// cargar y mostrar cuenta guardada
			cargarGuardado: function(cuenta) {
				this.$store.dispatch('setPersonas', cuenta.personas);
				this.$router.push('/personas');
			},
		},
	}
</script>