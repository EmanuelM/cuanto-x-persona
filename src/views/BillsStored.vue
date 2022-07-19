<template>
	<div class="columns">
		<div class="column col-12 px-3">
			<BillCard v-for="(bill) in billsStored" :key="bill.id" :bill="bill" />

			<div class="empty" v-if="billsStored.length == 0">
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
	import BillCard from '@/components/BillCard.vue';

	export default {
		name: 'BillsStored',
		components: {
			BillCard,
		},
		computed: {
			billsStored: function() {
				return this.$store.getters.getBillsStored.sort((rowA, rowB) => {
					return rowB.id - rowA.id
				});
			},
		},
	}
</script>