<template>
	<div class="columns">
    <div class="column col-12 text-center mt-2">
    	<h3>¿Cuántos son?</h3>
    	<div class="form-group m-4">
		  	<label class="form-label d-none" for="cantidad-personas">Cantidad de personas:</label>
		  	<input class="form-input" type="number" v-model="totalPersonas">
			</div>
	  	<button class="btn btn-outline-dark" @click="crearPersonas" :disabled="totalPersonas < 2">Siguiente</button>
    </div>
	</div>
</template>

<script>
	export default {
	  name: 'Home',
	  data: () => ({
	  	totalPersonas: 0,
	  }),
	  methods: {
	  	crearPersonas: function() {
	  		this.$store.dispatch('crearPersonas', this.totalPersonas);

	  		this.$router.push('/personas');
	  	},
	  }
	}
</script>