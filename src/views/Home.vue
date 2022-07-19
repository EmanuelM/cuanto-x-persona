<template>
	<div class="columns">
    <div class="column col-12 text-center mt-2">
    	<h3>¿Cuántos son?</h3>
    	<div class="form-group m-4">
		  	<label class="form-label d-none">Cantidad de personas:</label>
		  	<input class="form-input" type="number" v-model="totalPeople">
			</div>
	  	<button class="btn btn-outline-dark" @click="createPeople" :disabled="totalPeople < 2">Siguiente</button>
    </div>
	</div>
</template>

<script>
	export default {
	  name: 'Home',
	  data: () => ({
	  	totalPeople: 0,
	  }),
	  methods: {
	  	createPeople: function() {
	  		this.$store.dispatch('createPeople', this.totalPeople);
	  		this.$router.push('/personas');
	  	},
	  }
	}
</script>