<template>
  <div id="app" class="app-container">
    <NavBar />
    <main class="main-content">
      <AboutSection />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AboutSection from './components/AboutSection.vue'
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F2F3ED; /* color secundario para fondo */
  color: #151513; /* color negro para texto principal */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

main.main-content {
  flex: 1; /* Ocupa todo el espacio restante */
  padding: 2rem;
  text-align: center;
  margin-top: 80px; /* para dejar espacio debajo del navbar fijo */
}
</style>
