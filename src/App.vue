<template>
  <div id="app">
    <header class="navbar py-2 px-3">
      <section class="navbar-section">
        <a href="..." class="navbar-brand mr-2">Cuánto x Persona</a>
      </section>
      <section class="navbar-section">
        <a href="#" class="btn btn-link">Menu</a>
      </section>
    </header>

    <div class="container mt-3">
      <router-view/>
    </div>
  </div>
</template>

<style>
  @import "./css/libs/spectre.min.css";
  @import "./css/libs/spectre-exp.min.css";
  @import "./css/libs/spectre-icons.min.css";
  @import "./css/libs/b4-utilities.min.css";

  header {
    background-color: #000;
  }
</style>
