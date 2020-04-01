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

<style>
	.btn-dark {
		background: #303742;
		color: #fff !important;
		border: .05rem solid #303742;
	}

	.btn-dark:focus, .btn-dark:active, .btn-dark:hover {
		background: #fff;
		color: #303742 !important;
		border: .05rem solid #303742;
	}

	.btn-dark:disabled {
		background-color: #fff;
		color: #000;
		border: .05rem solid #999;
	}

	.btn-outline-dark {
		background: #fff;
		color: #303742 !important;
		border: .05rem solid #303742;
	}

	.btn-outline-dark:focus, .btn-outline-dark:active, .btn-outline-dark:hover {
		background: #303742;
		color: #fff !important;
		border: .05rem solid #303742;
	}

	.btn-outline-dark:disabled {
		background-color: #fff;
		color: #000;
		border: .05rem solid #999;
	}

	.form-input:focus {
		border-color: #7d7d7d;
		box-shadow: 0 0 .1rem 0 #30374247;
	}

	.form-checkbox input:checked+.form-icon,
	.form-radio input:checked+.form-icon,
	.form-switch input:checked+.form-icon
	{
		background: #303742;
		border-color: #000;
		box-shadow: none;
	}

	.form-checkbox input:focus+.form-icon,
	.form-radio input:focus+.form-icon,
	.form-switch input:focus+.form-icon
	{
		border-color: #bcc3ce;
		box-shadow: 0 0 .1rem 0 #6d6d6d;
	}
</style>