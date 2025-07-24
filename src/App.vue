<template>
  <div id="app" class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view /> <!-- Aquí se renderiza la vista actual -->
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
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
  background-color: #F2F3ED;
  color: #151513;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

main.main-content {
  flex: 1;
  padding: 2rem;
  text-align: center;
  margin-top: 80px;
}
</style>

