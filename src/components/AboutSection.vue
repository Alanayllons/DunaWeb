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
        </div>
      </div>
    </section>

    <!-- Sección Beige: Nuestras Clases -->
    <section class="clases-section">
      <!-- Título arriba de las tarjetas -->
      <h2 class="clases-title">Nuestras Clases</h2>

      <!-- Contenedor de tarjetas -->
      <section class="beige-section">
        <div class="image-card" v-for="(card, index) in cards" :key="index">
          <img :src="card.img" :alt="card.title" class="card-image" />
          <div class="overlay">
            <div class="overlay-text">
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Botón debajo de las tarjetas -->
      <div class="boton-reservar-container">
        <button class="boton-reservar">Reservar</button>
      </div>
    </section>
  </div>
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
    description: 'Métodos que combinan salud y diversión.'
  },
  {
    img: '/images/I3.jpg',
    title: 'Barre para Fuerza',
    description: 'Fortalece tu cuerpo con ejercicios especializados.'
  }
];
</script>

<style scoped>
/* ==== Sección Blanca ==== */
.about-section {
  display: flex;
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
  align-items: center;
  color: #15153;
  margin-left: 4rem;
  text-align: center;
  margin-top: 200px;
}

.about-text h2 {
  color: #E0D4BE;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.5;
  max-width: 400px;
  margin: 0 auto;
}

.button-wrapper {
  display: flex;
  justify-content: center;
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

/* Carrusel */
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
  width: 95%;
  height: 95%;
  object-fit: cover;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.carousel-image.active {
  opacity: 1;
  position: relative;
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
  transition: opacity 0.3s ease;
  z-index: 2;
}

.image-card:hover .overlay {
  opacity: 1;
}

.image-card:hover .card-image {
  filter: brightness(1) drop-shadow(0 0 12px #a9b57a);
}

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
</style>
