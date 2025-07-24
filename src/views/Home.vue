<template>
  <div>
    <!-- Sección Blanca: Sobre Nosotros + Carrusel -->
    <section class="about-section">
      <div class="about-text">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos un estudio dedicado a Pilates Jump & Barre para personas de 20 a 30 años, con métodos
          que combinan salud, fuerza y diversión.
        </p>
        <div class="button-wrapper">
          <button class="conocenos-button">Conócenos</button>
        </div>
      </div>
      <div class="about-carousel">
        <div class="circle">
          <img
            v-for="(img, index) in images"
            :key="index"
            :src="img"
            :alt="'Imagen ' + (index + 1)"
            class="carousel-image"
            :class="{ active: currentIndex === index }"
          />
          <!-- Indicadores dots -->
          <div class="dots-container">
            <span
              v-for="(img, idx) in images"
              :key="'dot-'+idx"
              :class="['dot', { active: currentIndex === idx }]"
              @click="goToIndex(idx)"
              aria-label="'Ver imagen ' + (idx + 1)"
              role="button"
              tabindex="0"
              @keydown.enter.space.prevent="goToIndex(idx)"
            ></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Beige: Nuestras Clases -->
    <section class="clases-section">
      <h2 class="clases-title">Nuestras Clases</h2>

      <section class="beige-section">
        <div class="image-card" v-for="(card, index) in cards" :key="index">
          <img :src="card.img" :alt="card.title" class="card-image" />
          <div class="overlay">
            <div class="overlay-icon">{{ card.icon }}</div>
            <div class="overlay-text">
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <div class="boton-reservar-container">
        <button class="boton-reservar">Reservar</button>
      </div>
    </section>

    <!-- Sección de Beneficios Pilates & Barre -->
    <section class="benefits-section">
      <div class="container-benefits">
        <p class="benefits-subtitle">¿Por qué hacer Pilates Jump & Barre?</p>
        <h2 class="benefits-title">Beneficios para tu Cuerpo y Mente</h2>

        <div class="benefits-cards">
          <div class="benefit-card">
            <div class="benefit-icon">🧘‍♀️</div>
            <h3 class="benefit-title">Mejora tu postura</h3>
            <p class="benefit-text">
              Fortalece tu core y corrige desequilibrios musculares, reduciendo dolores y mejorando tu alineación.
            </p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">💪</div>
            <h3 class="benefit-title">Fuerza y resistencia</h3>
            <p class="benefit-text">
              Aumenta tu resistencia muscular sin impacto articular, ideal para todos los niveles y edades.
            </p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🧠</div>
            <h3 class="benefit-title">Conexión mente-cuerpo</h3>
            <p class="benefit-text">
              Mejora la concentración, reduce el estrés y favorece un estado mental enfocado y relajado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nueva Sección: Carrusel Horizontal Fotos -->
    <section class="photo-carousel-section">
      <h2 class="photo-carousel-title">Galería de Momentos</h2>
      <div class="carousel-wrapper" @mouseenter="pauseAutoScroll" @mouseleave="resumeAutoScroll">
        <button class="carousel-btn prev-btn" @click="prevSlide" aria-label="Anterior">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="carousel-container" ref="carouselContainer" tabindex="0" aria-roledescription="carousel" aria-label="Galería de fotos">
          <div
            class="carousel-item"
            v-for="(photo, index) in photos"
            :key="index"
            :style="{ backgroundImage: 'url(' + photo + ')' }"
            :aria-label="'Foto ' + (index + 1)"
            role="img"
          ></div>
        </div>
        <button class="carousel-btn next-btn" @click="nextSlide" aria-label="Siguiente">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </section>
  </div>

  <!-- Sección vacía para futuras funcionalidades -->
  <section class="placeholder-section"></section>

  <!-- Footer Informativo - Sección de ancho completo -->
  <section class="info-footer">
    <div class="info-grid">
      <div class="info-block">
        <h3>Dirección</h3>
        <p>Av. Ejemplo 123<br />Col. Centro, CDMX</p>
      </div>
      <div class="info-block">
        <h3>Contacto</h3>
        <p>contacto@pilatesjump.com<br />+52 55 1234 5678</p>
      </div>
      <div class="info-block">
        <h3>Redes Sociales</h3>
        <div class="social-icons">
          <i class="fab fa-instagram" aria-label="Instagram" role="img"></i>
          <i class="fab fa-facebook-f" aria-label="Facebook" role="img"></i>
        </div>
      </div>
    </div>

    <!-- Barra final de copyright -->
    <section class="footer-bar">
      <div class="footer-content">
        <span class="left-text">DUNA Studio © 2025</span>
        <span class="right-text">
          <a href="#">Aviso de privacidad</a> | <a href="#">Términos y condiciones</a>
        </span>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  "/images/I1.jpeg",
  "/images/I2.jpg",
  "/images/I3.jpg"
];

const currentIndex = ref(0);
let interval;

function goToIndex(idx) {
  currentIndex.value = idx;
}

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});

const cards = [
  {
    img: '/images/I2.jpg',
    title: 'Clase de Pilates Jump',
    description: 'Métodos que combinan salud y diversión.',
    icon: '🧘'
  },
  {
    img: '/images/I3.jpg',
    title: 'Barre para Fuerza',
    description: 'Fortalece tu cuerpo con ejercicios especializados.',
    icon: '🩰'
  }
];

// Carrusel horizontal fotos
const photos = [
  "/images/I1.jpeg",
  "/images/I2.jpg",
  "/images/I3.jpg",
  "/images/I4.jpeg",
  "/images/I5.jpg",
  "/images/I6.jpg"
];

const carouselContainer = ref(null);
let autoSlideInterval = null;

function nextSlide() {
  const container = carouselContainer.value;
  if (!container) return;
  const scrollAmount = container.clientWidth * 0.9; // 90% para mostrar “vistazo”
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

function prevSlide() {
  const container = carouselContainer.value;
  if (!container) return;
  const scrollAmount = container.clientWidth * 0.9;
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

function pauseAutoScroll() {
  clearInterval(autoSlideInterval);
}

function resumeAutoScroll() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
}

onMounted(() => {
  resumeAutoScroll();
});

onUnmounted(() => {
  clearInterval(autoSlideInterval);
});
</script>

<style scoped>
/* ==== Sección Blanca ==== */
.about-section {
  display: flex;
  flex-direction: row-reverse; /* Mover texto a la derecha */
  justify-content: space-between;
  align-items: center;
  background-color: #F2F3ED;
  height: 700px;
  padding-left: 9rem;
  padding-right: 9rem;
  box-sizing: border-box;
  margin-top: -240px;
  width: 100vw;
}

.about-text {
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Alinear a la izquierda */
  color: #151515;
  margin-left: 0;
  text-align: left;
  margin-top: 200px;
}

.about-text h2 {
  color: #E0D4BE;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700; /* Más peso */
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.5;
  max-width: 400px;
  margin: 0;
}

.button-wrapper {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1.5rem;
}

.conocenos-button {
  width: 120px;
  padding: 0.4rem 1.2rem;
  font-size: 0.9rem;
  border-radius: 6px;
  font-weight: 600;
  background-color: #BCC399;
  color: #778E69;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.conocenos-button:hover {
  background-color: #aeb686;
}

/* Carrusel circular */
.about-carousel {
  flex: 0 0 370px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #E0D4BE;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-top: 240px;
}

.carousel-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.carousel-image.active {
  opacity: 1;
  position: relative;
  animation: fadeZoom 0.8s ease;
}

@keyframes fadeZoom {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Indicadores dots carrusel circular */
.dots-container {
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(23, 23, 23, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #778E69;
}

/* ==== Sección Beige ==== */
.clases-section {
  background-color: #BCC399;
  padding: 2rem 0;
  text-align: center;
}

.clases-title {
  color: #E0D4BE;
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Cards Nuestras Clases */
.beige-section {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 12rem;
  flex-wrap: wrap;
}

.image-card {
  position: relative;
  width: 45%;
  height: 500px;
  border: 6px solid #778E69;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8) drop-shadow(0 0 8px #a9b57a);
  transition: filter 0.3s ease;
  z-index: 1;
}

.image-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(188, 195, 153, 0.4);
  z-index: 0;
  pointer-events: none;
  transition: background 0.3s ease;
}

/* Overlay */
.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 1rem;
  transition: opacity 0.4s ease, transform 0.4s ease;
  z-index: 2;
  transform: translateY(20px);
}

.image-card:hover .overlay {
  opacity: 1;
  transform: translateY(0);
}

.image-card:hover .card-image {
  filter: brightness(1) drop-shadow(0 0 12px #a9b57a);
}

/* Overlay icon */
.overlay-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Overlay text */
.overlay-text h3 {
  margin: 0 0 0.5rem 0;
}

.overlay-text p {
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
}

/* Botón Reservar */
.boton-reservar-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.boton-reservar {
  background-color: #778E69;
  color: #F2F3ED;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.boton-reservar:hover {
  background-color: #aeb686;
}

/* ==== Sección Beneficios ==== */
.benefits-section {
  background-color: #F2F3ED;
  padding: 4rem 2rem;
  text-align: center;
}

.container-benefits {
  max-width: 1200px;
  margin: 0 auto;
}

.benefits-subtitle {
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #151513;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.benefits-title {
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: #E0D4BE;
}

.benefits-cards {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.benefit-card {
  background-color: #BCC399;
  flex: 1 1 30%;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease;
  border-bottom: 1.5px solid #aeb686; /* línea separadora suave */
}

.benefit-card:hover {
  transform: scale(1.05) rotate(-1deg);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #BCC399;
}

.benefit-title {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #151513;
}

.benefit-text {
  font-size: 1rem;
  color: #151513;
  line-height: 1.5;
}

/* ==== Nueva Sección Carrusel Horizontal Fotos ==== */
.photo-carousel-section {
  background-color: #BCC399;
  padding: 3rem 2rem 4rem;
  text-align: center;
  color: #fff;
}

.photo-carousel-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  text-shadow: 0 0 4px rgba(0,0,0,0.4);
  color: #E0D4BE;
}

.carousel-wrapper {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
  scroll-padding-right: 30px; /* Para el “vistazo” */
  padding-right: 30px;
}

/* Ocultar scrollbar */
.carousel-container::-webkit-scrollbar {
  display: none;
}
.carousel-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.carousel-item {
  flex: 0 0 270px; /* Un poco más pequeño para que se vea 10% siguiente */
  height: 200px;
  border-radius: 1.2rem;
  background-size: cover;
  background-position: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.carousel-item:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 25px rgba(0,0,0,0.5);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(119, 142, 105, 0.8);
  border: none;
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover {
  background-color: rgba(119, 142, 105, 1);
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

/* Placeholder */
.placeholder-section {
  background-color: #F2F3ED;
  height: 100px;
}

/* Footer */
.info-footer {
  background-color: #BCC399;
  padding: 2rem 1rem 3rem;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.info-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.info-block {
  flex: 1 1 200px;
}

.info-block h3 {
  color: #E0D4BE;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.info-block p {
  color: #151513;
  font-size: 1rem;
  line-height: 1.5;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 2.5rem; /* Más espacio para que no se amontonen en móviles */
  margin-top: 1.2rem;
  align-items: center;
  height: 3.5rem;
}

.social-icons i {
  font-size: 1.8rem;
  color: #151513;
  transition: transform 0.3s ease;
}

.social-icons i:hover {
  transform: scale(1.1);
}

.footer-bar {
  background-color: #151513;
  padding: 0.75rem 1.5rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #F2F3ED;
  font-size: 0.9rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.footer-content a {
  color: #F2F3ED;
  text-decoration: none;
  margin: 0 0.25rem;
}

.footer-content a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-section {
    flex-direction: column;
    height: auto;
    padding: 3rem 2rem;
    margin-top: 0;
  }
  .about-text {
    margin-top: 0;
    margin-left: 0;
    align-items: center;
    text-align: center;
    flex: none;
  }
  .about-carousel {
    margin-top: 2rem;
    flex: none;
    justify-content: center;
  }

  .beige-section {
    padding: 0 2rem;
  }

  .info-footer {
    padding: 2rem 1rem 4rem;
  }
}

@media (max-width: 480px) {
  .image-card {
    width: 100%;
    height: 300px;
  }
  .carousel-item {
    flex: 0 0 200px;
  }
  .social-icons {
    gap: 1.5rem;
  }
  .info-grid {
    gap: 1.5rem;
  }
}
</style>
