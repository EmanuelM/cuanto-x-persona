<template>
	<div class="card mb-3">
	  <div class="card-header">
	    <div class="card-title h5">Cuenta #{{ bill.id }}</div>
	    <div class="card-subtitle text-gray">Guardada el {{ bill.fecha }}</div>
	  </div>
	  <div class="card-body">
	  	<p class="mb-3">
	  		<strong>{{ peopleCount }} personas</strong> <br>
	  		${{ amountPerPerson }} por persona <br>
	  		El total es de ${{ billTotalAmount }}
	  	</p>
	  </div>
	  <div class="card-footer">
	    <button class="btn btn-dark mr-2" @click="loadBillStored(bill)"><font-awesome-icon icon="eye" class="mr-1" /> Ver</button>
	    <button class="btn btn-link" @click="removeBillStored(bill)"><font-awesome-icon icon="trash" class="mr-1" /> Borrar</button>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'BillCard',
		props: {
			bill: Object,
		},
		computed: {
			peopleCount: function() {
				return this.bill.people.length;
			},
			billTotalAmount: function() {
				return this.bill.people.reduce((total, person) => total + person.put, 0).toFixed(2);
			},
			amountPerPerson: function() {
				return (this.billTotalAmount / this.peopleCount).toFixed(2);
			},
		},
		methods: {
			removeBillStored: function(bill) {
				let billStored = this.$store.getters.getBillsStored;
				billStored.splice(billStored.indexOf(bill), 1);

				this.$store.dispatch('setBills', billStored);
				localStorage._db = JSON.stringify(billStored);
			},
			loadBillStored: function(bill) {
				this.$store.dispatch('setPeople', bill.people);
				this.$router.push('/personas');
			},
		},
	}
</script>