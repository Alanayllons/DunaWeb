<template>
  <nav class="navbar">
    <!-- Logo izquierda -->
    <div class="navbar-logo">
      <img src="../assets/logo.jpg" alt="DUNA Logo" />
    </div>

    <!-- Menú central -->
    <ul class="navbar-menu">
      <!-- DUNA con dropdown -->
      <li
        class="nav-item dropdown"
        @mouseenter="showDropdown('duna')"
        @mouseleave="hideDropdown('duna')"
      >
        <a href="#" class="nav-link">DUNA</a>
        <ul v-if="dropdowns.duna" class="dropdown-menu">
          <li><router-link to="/nosotros" class="dropdown-link">Nosotros</router-link></li>
          <li><router-link to="/registro" class="dropdown-link">FAQS</router-link></li>
          <li><router-link to="/coaches" class="dropdown-link">Coaches</router-link></li>
        </ul>
      </li>

      <!-- CLASES con dropdown -->
      <li
        class="nav-item dropdown"
        @mouseenter="showDropdown('clases')"
        @mouseleave="hideDropdown('clases')"
      >
        <a href="#" class="nav-link">CLASES</a>
        <ul v-if="dropdowns.clases" class="dropdown-menu">
          <li><a href="/agenda" class="dropdown-link">Agenda</a></li>
          <li><a href="/mis-clases" class="dropdown-link">Mis Clases</a></li>
        </ul>
      </li>

      <!-- MEMBRESÍAS sin dropdown -->
      <li class="nav-item">
        <a href="/membresias" class="nav-link">MEMBRESÍAS</a>
      </li>

      <!-- MI ESPACIO si está logueado -->
      <li v-if="loggedIn" class="nav-item">
        <a href="/mi-espacio" class="nav-link">MI ESPACIO</a>
      </li>
    </ul>

    <!-- Icono de inicio de sesión derecha -->
    <div class="navbar-login" @click="toggleLogin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="login-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12H3m6 6l-6-6 6-6"
        />
      </svg>
      <span class="login-text">{{ loggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión' }}</span>
    </div>
  </nav>
</template>

<script setup>
import { reactive, ref } from "vue";

const loggedIn = ref(false);
const dropdowns = reactive({
  duna: false,
  clases: false,
});

function toggleLogin() {
  loggedIn.value = !loggedIn.value;
}

function showDropdown(menu) {
  dropdowns[menu] = true;
}

function hideDropdown(menu) {
  dropdowns[menu] = false;
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f3ed;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 999;
}

.navbar-logo img {
  height: 40px;
  cursor: pointer;
  filter: brightness(0) saturate(100%) invert(32%) sepia(19%) saturate(243%) hue-rotate(67deg) brightness(93%) contrast(90%);
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  position: relative;
}

.navbar-menu li {
  position: relative;
  cursor: pointer;
}

.nav-link {
  color: #151513;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #778e69;
}

/* Dropdown menu */
.dropdown-menu {
  position: absolute;
  top: 100%; /* justo debajo del li padre */
  left: 0;
  background-color: #f2f3ed;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  min-width: 160px;
  z-index: 1000;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-link {
  display: block;
  padding: 0.6rem 1.2rem;
  color: #151513;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.dropdown-link:hover {
  background-color: #bcc399;
  color: #151513;
}

.navbar-login {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #151513;
  font-weight: 600;
}

.login-icon {
  width: 24px;
  height: 24px;
}
</style>
