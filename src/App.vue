<template>
  <div id="app">
    <Navbar />

    <div class="container mt-3">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'Home',
    components: {
      Navbar,
    },
    mounted: function() {
      if (!localStorage._db) localStorage._db = JSON.stringify([]);
      this.$store.dispatch('setGuardados', JSON.parse(localStorage._db));
    },
  }
</script>

<style>
  @import "./css/libs/spectre.min.css";
  @import "./css/libs/spectre-exp.min.css";
  @import "./css/libs/spectre-icons.min.css";
  @import "./css/libs/b4-utilities.min.css";

  @import "./css/cuanto-x-persona.css";
</style>
