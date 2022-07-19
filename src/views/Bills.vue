<template>
	<div class="columns">
		<div class="column col-12 mb-3" v-if="alert">
			<div class="toast toast-success">
				<button class="btn btn-clear float-right" @click="closeAlert"></button>
  			Cuenta guardada correctamente
			</div>
		</div>

  	<!-- hero -->
  	<div class="column col-12 mb-4">
      <div class="card">
      	<div class="card-header">
        	<h4 class="card-meta"><strong>${{ amountPerPerson }}</strong> por persona</h4>
          <h6 class="card-title">El total es <strong>${{ total }}</strong></h6>
        </div>
      </div>
    </div>

    <!-- tabla -->
    <div class="column col-12 table-responsive">
    	<table class="table table-striped">
      	<thead>
        	<tr class="text-center">
          	<th></th>
          	<th>Puso</th>
          	<th>Debe</th>
          	<th>Le deben</th>
          	<th>Listo</th>
          </tr>
        </thead>
	      <tbody>
					<tr class="text-center" v-for="(person, index) in bills" :key="index">
						<td>{{ person.name }}</td>
						<td>${{ person.put }}</td>
						<td :class="{'text-error': person.owe}">{{ person.owe ? '$' + person.owe : '-' }}</td>
						<td :class="{'text-success': person.receive}">{{ person.receive ? '$' + person.receive : '-' }}</td>
						<td>
							<div class="form-group d-flex">
						  	<label class="form-switch p-centered">
						    	<input type="checkbox" v-model="person.ready" :checked="person.ready">
						    	<i class="form-icon"></i>
						  	</label>
							</div>
						</td>
					</tr>
				</tbody>
	    </table>
	  </div>

    <div class="column col-12 mt-2">
      <div class="form-group float-right">
        <label class="form-checkbox">
        	<input type="checkbox" v-model="round" :checked="round" />
          <i class="form-icon"></i> Redondear
        </label>
      </div>
    </div>

    <!-- guardar -->
    <div class="column col-12 mt-2 text-center">
			<button class="btn btn-dark" @click="saveBill">Guardar</button>
    </div>
  </div>
</template>

<script>
  import { DateTime } from 'luxon';

	export default {
		name: 'Bills',
		data: () => ({
			total: 0,
			amountPerPerson: 0,
			round: false,
			alert: false,
		}),
		computed: {
			billsStored: function() {
				return this.$store.getters.getBillsStored;
			},
			bills: function() {
				let people = this.$store.getters.getPeople;

				this.total = people.reduce((total, person) => total + parseFloat(person.put), 0);
				this.amountPerPerson = parseFloat(this.total / people.length).toFixed(2);

				people.forEach((person, index) => {
					person.put = parseFloat(person.put);

					let money = (this.amountPerPerson - person.put).toFixed(2);

					// debe
					if (money > 0) {
						person.owe = parseFloat(money);
						if (this.round) person.owe = Math.round(person.owe);

						person.receive = 0;
					}
					// cobra
					else if (money < 0) {
						person.receive = parseFloat(money * -1);
						if (this.round) person.receive = Math.round(person.receive);

						person.owe = 0;
					}
					else {
						person.owe = 0;
						person.receive = 0;
						person.ready = true;
					}
				});

				if (this.round) {
					this.total = Math.ceil(this.total);
					this.amountPerPerson = Math.ceil(this.amountPerPerson);
				}

				return people;
			},
		},
		methods: {
			saveBill: function() {
				let bill = {
					id: this.billsStored.length ? (this.billsStored[this.billsStored.length-1].id + 1) : 1,
					fecha: DateTime.local().setLocale('es-AR').toFormat('d LLLL, yyyy'),
					people: JSON.parse(JSON.stringify(this.bills)),
				};

				this.$store.dispatch('saveBill', bill);
				this.alert = true;
			},
			closeAlert: function() {
				this.alert = false;
			},
		},
		watch: {
			billsStored: function() {
				localStorage._db = JSON.stringify(this.billsStored);
			},
		},
	}
</script>