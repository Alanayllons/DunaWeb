<template>
  <div class="nosotros-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>Conoce DUNA</h1>
      <p>Transformando cuerpos, elevando almas.</p>
    </section>

    <!-- Misión y Visión -->
    <section class="mision-vision">
      <div class="mision">
        <h2>Misión</h2>
        <p>Ofrecer una experiencia única de bienestar físico y emocional a través del método Pilates Jump & Barre.</p>
      </div>
      <div class="vision">
        <h2>Visión</h2>
        <p>Ser el estudio líder en innovación y resultados en la práctica del pilates moderno.</p>
      </div>
    </section>

    <!-- Valores -->
    <section class="valores-section">
      <h2>Valores</h2>
      <ul>
        <li>Compromiso</li>
        <li>Bienestar</li>
        <li>Innovación</li>
        <li>Pasión</li>
      </ul>
    </section>

    <!-- Coaches Preview -->
    <section class="coaches-preview">
      <h2>Conoce a nuestros Coaches</h2>
      <div class="preview-card" @click="$router.push('/coaches')">
        <img src="/images/I2.jpg" alt="Nuestros coaches">
        <button>Ir a Coaches</button>
      </div>
    </section>

    <!-- Contacto y Ubicación -->
    <section class="contacto-section">
      <h2>Contáctanos</h2>
      <p>Email: contacto@dunapilates.com</p>
      <p>Tel: +52 55 1234 5678</p>
      <iframe class="mapa" src="https://www.google.com/maps/embed?..." loading="lazy"></iframe>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nosotros-page {
  background-color: #E0D4BE;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  color: #151513;
  font-family: 'Segoe UI', sans-serif;
}

section {
  padding: 4rem 2rem;
  width: 100%;
  box-sizing: border-box;
}

.hero-section {
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #BCC399;
  clip-path: ellipse(100% 80% at 50% 20%);
  animation: fadeIn 1s ease-in-out;
}

.hero-section h1 {
  font-size: 3rem;
  color: #151513;
}

.hero-section p {
  font-size: 1.5rem;
  color: #F2F3ED;
}

.mision-vision {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: #F2F3ED;
  border-radius: 0 50% 0 50% / 0 20% 0 20%;
  padding: 4rem;
  animation: slideUp 1s ease-out;
}

.mision, .vision {
  background-color: #BCC399;
  padding: 2rem;
  border-radius: 2rem;
  color: #151513;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.valores-section {
  background-color: #778E69;
  color: #F2F3ED;
  text-align: center;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  animation: fadeIn 2s ease;
}

.valores-section ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.valores-section li {
  background-color: #BCC399;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: bold;
}

.coaches-preview {
  text-align: center;
  background-color: #F2F3ED;
  border-radius: 50% 0 50% 0 / 20% 0 20% 0;
  padding: 4rem;
  animation: zoomIn 1.2s;
}

.preview-card {
  margin-top: 2rem;
  background-color: #BCC399;
  border-radius: 1.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.preview-card:hover {
  transform: scale(1.05);
}

.preview-card img {
  width: 100%;
  height: auto;
  display: block;
}

.preview-card button {
  background-color: #778E69;
  color: #F2F3ED;
  border: none;
  padding: 1rem 2rem;
  width: 100%;
  font-size: 1.2rem;
  cursor: pointer;
}

.contacto-section {
  text-align: center;
  background-color: #BCC399;
  color: #151513;
  padding: 5rem 2rem;
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
  animation: fadeIn 1.5s ease-in;
}

.mapa {
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
  height: 300px;
  border: 0;
  border-radius: 1rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes zoomIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
