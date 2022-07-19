<template>
	<header class="navbar p-3">
    <section class="navbar-section">
      <!-- ir para atrás -->
    	<a v-show="$route.name != 'home'" href="#" @click.prevent="$router.back()" class="btn btn-link text-dark p-0">
    		<font-awesome-icon icon="arrow-left" class="mr-1" />
    	</a>
    </section>
  	<section class="center">
    	<span class="navbar-brand text-dark text-bold">Cuánto x Persona</span>
    </section>
    <section class="navbar-section">
      <!-- ver cuentas guardadas -->
    	<router-link v-show="$route.name != 'guardados'" to="guardados" class="btn btn-link text-dark p-0">
    		<font-awesome-icon icon="history" class="mr-1" />
    	</router-link>
    </section>
	</header>
</template>

<script>
	export default {
		name: 'Navbar',
		data: () => ({
			back: false,
		}),
	}
</script>