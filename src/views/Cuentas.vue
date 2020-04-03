<template>
	<div class="columns">
		<div class="column col-12 mb-3" v-if="alerta">
			<div class="toast toast-success">
				<button class="btn btn-clear float-right" @click="cerrarAlerta"></button>
  			Cuenta guardada correctamente
			</div>
		</div>

  	<!-- hero -->
  	<div class="column col-12 mb-4">
      <div class="card">
      	<div class="card-header">
        	<h4 class="card-meta"><strong>${{ cadaUno }}</strong> por persona</h4>
          <h6 class="card-title"><strong>Total:</strong> ${{ total }}</h6>
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
					<tr class="text-center" v-for="(persona, index) in cuentas">
						<td>{{ persona.nombre }}</td>
						<td>${{ persona.puso }}</td>
						<td :class="{'text-error': persona.debe}">{{ persona.debe ? '$' + persona.debe : '-' }}</td>
						<td :class="{'text-success': persona.cobra}">{{ persona.cobra ? '$' + persona.cobra : '-' }}</td>
						<td>
							<div class="form-group d-flex">
						  	<label class="form-switch p-centered">
						    	<input type="checkbox" v-model="persona.listo" :checked="persona.listo">
						    	<i class="form-icon"></i>
						  	</label>
							</div>
						</td>
					</tr>
				</tbody>
	    </table>
	  </div>

		<!-- redondear resultados -->
    <div class="column col-12 mt-2">
      <div class="form-group float-right">
        <label class="form-checkbox">
        	<input type="checkbox" v-model="redondear" :checked="redondear" />
          <i class="form-icon"></i> Redondear
        </label>
      </div>
    </div>

    <!-- guardar -->
    <div class="column col-12 mt-2 text-center">
			<button class="btn btn-dark" @click="guardarCuenta">Guardar</button>
    </div>
  </div>
</template>

<script>
  import { DateTime } from 'luxon';

	export default {
		name: 'Cuentas',
		data: () => ({
			total: 0,
			cadaUno: 0,
			redondear: false,
			alerta: false,
		}),
		computed: {
			// obtener cuentas guardadas
			guardados: function() {
				return this.$store.getters.getGuardados;
			},
			// realizar las cuentas sobre las personas actuales
			cuentas: function() {
				let personas = this.$store.getters.getPersonas;

				this.total = personas.reduce((total, persona) => total + parseFloat(persona.puso), 0);
				this.cadaUno = parseFloat(this.total / personas.length).toFixed(2);

				personas.forEach((persona, index) => {
					persona.puso = parseFloat(persona.puso);

					let plata = (this.cadaUno - persona.puso).toFixed(2);

					// debe
					if (plata > 0) {
						persona.debe = parseFloat(plata);
						if (this.redondear) persona.debe = Math.round(persona.debe);

						persona.cobra = 0;
					}
					// cobra
					else if (plata < 0) {
						persona.cobra = parseFloat(plata * -1);
						if (this.redondear) persona.cobra = Math.round(persona.cobra);

						persona.debe = 0;
					}
					else {
						persona.debe = 0;
						persona.cobra = 0;
						persona.listo = true;
					}
				});

				if (this.redondear) {
					this.total = Math.ceil(this.total);
					this.cadaUno = Math.ceil(this.cadaUno);
				}

				return personas;
			},
		},
		methods: {
			// guardar cuenta en localStorage
			guardarCuenta: function() {
				let cuenta = {
					id: this.guardados.length ? (this.guardados[this.guardados.length-1].id + 1) : 1,
					fecha: DateTime.local().setLocale('es-AR').toFormat('d LLLL, yyyy'),
					personas: JSON.parse(JSON.stringify(this.cuentas)),
				};

				this.$store.dispatch('guardarCuenta', cuenta);
				this.alerta = true;
			},
			// cerrar alerta
			cerrarAlerta: function() {
				this.alerta = false;
			},
		},
		watch: {
			guardados: function() {
				localStorage._db = JSON.stringify(this.guardados);
			},
		},
	}
</script>