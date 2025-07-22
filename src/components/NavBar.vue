<template>
  <nav class="navbar">
    <!-- Logo izquierda -->
    <div class="navbar-logo">
      <img src="../assets/logo.jpg" alt="DUNA Logo" />
    </div>

    <!-- Menú central -->
    <ul class="navbar-menu">
      <li><a href="#" class="nav-link">DUNA</a></li>
      <li><a href="#" class="nav-link">CLASES</a></li>
      <li><a href="#" class="nav-link">MEMBRESÍAS</a></li>
      <li v-if="loggedIn"><a href="#" class="nav-link">MI ESPACIO</a></li>
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
import { ref } from "vue";
import logo from '@/assets/logo.jpg'

const loggedIn = ref(false);

function toggleLogin() {
  loggedIn.value = !loggedIn.value;
}
</script>

<style scoped>
.navbar {
  position: fixed;             /* Fijo arriba (opcional, si quieres que no se mueva) */
  top: 0;
  left: 0;
  width: 100vw;                /* Ocupa todo el ancho de la ventana */
  height: 80px;                /* Altura fija o ajustable */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F2F3ED;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: 999;                /* Asegura que esté sobre otros elementos */
}

.navbar-logo img {
  height: 40px;
  cursor: pointer;
  filter: brightness(0) saturate(100%) invert(32%) sepia(19%) saturate(243%) hue-rotate(67deg) brightness(93%) contrast(90%);
  /* El filtro aplica el color #BCC399 si la imagen original es blanca */
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
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
  color: #778E69;
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
