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
  }
</script>

<style>
  @import "./css/libs/spectre.min.css";
  @import "./css/libs/spectre-exp.min.css";
  @import "./css/libs/spectre-icons.min.css";
  @import "./css/libs/b4-utilities.min.css";

  header {
    background-color: #000;
  }
</style>
