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
	    <button class="btn btn-link" @click="borrarGuardado(cuenta.id)"><font-awesome-icon icon="trash" class="mr-1" /> Borrar</button>
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
			personas: function() {
				return this.cuenta.personas.length;
			},
			total: function() {
				return this.cuenta.personas.reduce((total, persona) => total + persona.puso, 0).toFixed(2);
			},
			cadaUno: function() {
				return (this.total / this.personas).toFixed(2);
			},
		}
	}
</script>