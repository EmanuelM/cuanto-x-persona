<template>
	<div class="columns">
		<div class="column col-12 px-3">
			<CuentaCard v-for="(cuenta, index) in guardados" :key="cuenta.id" :cuenta="cuenta" />

			<div class="empty" v-if="guardados.length == 0">
			  <div class="empty-icon">
					<font-awesome-icon icon="save" />
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
			// obtener guardados y ordenar de manera descendente por ID
			guardados: function() {
				return this.$store.getters.getGuardados.sort((rowA, rowB) => {
					return rowB.id - rowA.id
				});
			},
		},
	}
</script>