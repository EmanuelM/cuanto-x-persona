<template>
  <div class="home">
		<div class="container">
	  	<div class="columns">
		    <div class="column col-xs-12">
		    	<h3>¿Cuántos son?</h3>
		    	<div class="form-group m-y-big">
				  	<label class="form-label d-none" for="cantidad-personas">Cantidad de personas:</label>
				  	<input class="form-input" type="number" name="cantidad-personas" v-model="totalPersonas">
				</div>
			  	<button class="btn btn-primary" id="calcular-personas" @click="crearPersonas" :disabled="totalPersonas < 2">Siguiente</button>
		    </div>
	  	</div>
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

<style>
	div.home {
		text-align: center;
	}
</style>