<template>
	<header class="navbar p-3">
    <section class="navbar-section">
    	<a v-show="$route.name != 'Home'" href="#" @click="$router.back()" class="btn btn-link text-dark p-0">
    		<font-awesome-icon icon="arrow-left" class="mr-1" />
    	</a>
    </section>
  	<section class="center">
    	<kbd class="navbar-brand">Cuánto x Persona</kbd>
    </section>
    <section class="navbar-section">
    	<a v-show="$route.name != 'Guardados'" href="#" @click="$router.back()" class="btn btn-link text-dark p-0">
    		<font-awesome-icon icon="history" class="mr-1" />
    	</a>
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

<style>
	header.navbar {
		background-color: #cfd8dc;
		color: #fff;
	}

	kbd {
		font-size: 1em !important;
	}

	a.p-0 {
		height: auto;
	}
</style>