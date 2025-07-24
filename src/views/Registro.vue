<template>
  <div class="registro-container">
    <!-- Imagen lateral izquierda -->
    <div class="registro-imagen">
      <img :src="'/images/I3.jpg'" alt="Bienvenidos" />
    </div>

    <!-- Tarjeta de formulario -->
    <div class="registro-formulario">
      <form @submit.prevent="handleSubmit">
        <h2 class="titulo">Crea tu cuenta</h2>

        <div class="grupo">
          <label>Nombre *</label>
          <input v-model="form.nombre" type="text" required />
        </div>

        <div class="grupo">
          <label>Apellido *</label>
          <input v-model="form.apellido" type="text" required />
        </div>

        <div class="grupo">
          <label>Email *</label>
          <input v-model="form.email" type="email" required />
        </div>

        <div class="grupo">
          <label>Teléfono *</label>
          <div class="telefono-input">
            <select v-model="form.lada" required>
              <option value="">+Lada</option>
              <option value="+52">🇲🇽 +52</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+34">🇪🇸 +34</option>
              <!-- Agrega más ladas según necesites -->
            </select>
            <input v-model="form.telefono" type="tel" required />
          </div>
        </div>

        <div class="grupo">
          <label>Contraseña *</label>
          <input
            v-model="form.password"
            type="password"
            @input="checkPassword"
            required
          />
          <ul class="password-rules">
            <li :class="{ cumplido: reglas.min }">Al menos 8 caracteres</li>
            <li :class="{ cumplido: reglas.mayus }">Una mayúscula</li>
            <li :class="{ cumplido: reglas.num }">Un número</li>
            <li :class="{ cumplido: reglas.esp }">Un carácter especial</li>
          </ul>
        </div>

        <div class="grupo">
          <label>Confirmar contraseña *</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            required
          />
        </div>

        <div class="grupo">
          <label>Sexo *</label>
          <div class="sexo-opciones">
            <label><input type="radio" value="Hombre" v-model="form.sexo" /> Hombre</label>
            <label><input type="radio" value="Mujer" v-model="form.sexo" /> Mujer</label>
            <label><input type="radio" value="Sin especificar" v-model="form.sexo" /> Sin especificar</label>
          </div>
        </div>

        <div class="grupo checkbox">
          <label><input type="checkbox" v-model="form.terminos" required /> Acepto los Términos y Condiciones</label>
          <label><input type="checkbox" v-model="form.politicas" required /> Acepto las Políticas de Privacidad</label>
        </div>

        <button type="submit">Registrarme</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nombre: '',
  apellido: '',
  email: '',
  lada: '',
  telefono: '',
  password: '',
  confirmPassword: '',
  sexo: '',
  terminos: false,
  politicas: false
})

const reglas = reactive({
  min: false,
  mayus: false,
  num: false,
  esp: false
})

function checkPassword() {
  const pass = form.password
  reglas.min = pass.length >= 8
  reglas.mayus = /[A-Z]/.test(pass)
  reglas.num = /\d/.test(pass)
  reglas.esp = /[!@#$%^&*(),.?":{}|<>]/.test(pass)
}

function handleSubmit() {
  if (form.password !== form.confirmPassword) {
    alert('Las contraseñas no coinciden')
    return
  }
  alert('Formulario válido. Conectar al backend aquí.')
}
</script>

<style scoped>
.registro-container {
  display: flex;
  min-height: 100vh;
  background-color: #F2F3ED;
}

.registro-imagen {
  flex: 1;
  background-color: #E0D4BE;
  display: flex;
  align-items: center;
  justify-content: center;
}

.registro-imagen img {
  max-width: 80%;
  height: auto;
  border-radius: 2rem;
  animation: fadeIn 1.5s ease;
}

.registro-formulario {
  flex: 1;
  background-color: #BCC399;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

form {
  max-width: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.titulo {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #151513;
}

.grupo {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.grupo label {
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #151513;
}

.grupo input,
select {
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  background-color: #F2F3ED;
  color: #151513;
}

.telefono-input {
  display: flex;
  gap: 0.5rem;
}

.sexo-opciones {
  display: flex;
  gap: 1rem;
}

.checkbox {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

button {
  margin-top: 1rem;
  background-color: #778E69;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #151513;
}

/* Reglas de contraseña */
.password-rules {
  list-style: none;
  padding: 0.5rem 0 0;
  font-size: 0.85rem;
}

.password-rules li {
  color: #444;
  transition: 0.2s;
}

.password-rules .cumplido {
  color: green;
  font-weight: bold;
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
