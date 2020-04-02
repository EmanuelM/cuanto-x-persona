<template>
	<header class="navbar p-3">
    <section class="navbar-section">
    	<a v-show="$route.name != 'Home'" href="#" @click.prevent="$router.back()" class="btn btn-link text-dark p-0">
    		<font-awesome-icon icon="arrow-left" class="mr-1" />
    	</a>
    </section>
  	<section class="center">
    	<kbd class="navbar-brand">Cuánto x Persona</kbd>
    </section>
    <section class="navbar-section">
    	<router-link v-show="$route.name != 'Guardados'" to="/guardados" class="btn btn-link text-dark p-0">
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