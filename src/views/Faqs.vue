<template>
  <div class="faq-page">
    <h1 class="faq-title">Preguntas Frecuentes</h1>

    <section class="faq-list">
      <div class="faq-item" v-for="(faq, index) in faqs" :key="index" :style="{ animationDelay: `${index * 0.2}s` }">
        <h2 class="faq-question">{{ faq.pregunta }}</h2>
        <hr />
        <p class="faq-answer">{{ faq.respuesta }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const faqs = [
  {
    pregunta: '¿Qué es Pilates Jump & Barre?',
    respuesta: 'Es una metodología que combina fuerza, cardio y control corporal utilizando trampolines y barras, ideal para tonificar y mejorar el equilibrio.'
  },
  {
    pregunta: '¿Necesito experiencia previa?',
    respuesta: 'No necesitas experiencia. Nuestras clases están diseñadas para adaptarse a todos los niveles.'
  },
  {
    pregunta: '¿Qué ropa debo usar?',
    respuesta: 'Usa ropa deportiva cómoda que permita libertad de movimiento. De preferencia, trae calcetas antideslizantes.'
  }
  // Puedes seguir agregando más preguntas aquí
]
</script>

<style scoped>
.faq-page {
  background-color: #BCC399;
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
}

.faq-title {
  color: #151513;
  font-size: 2.8rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  animation: fadeDown 1s ease-in-out;
}

.faq-list {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.faq-item {
  background-color: #F2F3ED;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
  animation: fadeUp 0.8s ease-out both;
}

.faq-item:hover {
  transform: scale(1.02);
}

.faq-question {
  color: #151513;
  font-size: 1.6rem;
  margin: 0;
  text-align: left;
}

hr {
  margin: 1rem 0;
  border: none;
  height: 2px;
  background-color: #778E69;
}

.faq-answer {
  color: #4a4a4a;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.6;
  text-align: left;
}

/* ANIMACIONES */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
