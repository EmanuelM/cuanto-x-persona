<template>
	<div class="columns">
		<div class="column col-12 px-3">
			<CuentaCard v-for="cuenta in guardados" :key="cuenta.titulo" :cuenta="cuenta" />

			<div class="empty" v-if="guardados.length == 0">
			  <div class="empty-icon">
			    <i class="icon icon-people"></i>
			  </div>
			  <p class="empty-title h5">No tenés cuentas guardadas</p>
			  <p class="empty-subtitle">Empezá a dividir tus gastos con la aplicación y guardá las cuentas para más tarde.</p>
			</div>
		</div>
	</div>
</template>

<script>
	import CuentaCard from '@/components/CuentaCard.vue';

	export default {
		name: 'Guardados',
		components: {
			CuentaCard,
		},
		computed: {
			guardados: function() {
				return this.$store.getters.getGuardados.sort((rowA, rowB) => {
					return rowB.id - rowA.id
				});
			},
		},
	}
</script>