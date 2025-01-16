<template>
  <button v-if="visible" class="back-to-top" @click="scrollToTop"><img :src="backToTopImage" alt="Back to Top" />
  </button>
</template>
<script>
import BackToTopImage from '@/assets/back-to-top-button.png';
export default {
  name: 'BackToTop',
  data() {
    return {
      visible: false,
      backToTopImage: BackToTopImage,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    checkScrollPosition() {
      this.visible = window.scrollY > 300;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrollPosition);
    this.checkScrollPosition(); // Initialer Zustand
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition);
  },
};
</script>
<style scoped>
.back-to-top {
  width: 10vw; /* Dynamische Breite */
  height: 10vw; /* Dynamische Höhe */
  max-width: 80px; /* Maximale Breite */
  max-height: 80px; /* Maximale Höhe */
  border-radius: 50%; /* Kreisform */
  position: fixed;
  bottom: 5vh;
  right: 5vw;
  background-color: #f39c12;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
}

.back-to-top img {
  width: 100%; /* Passt sich der Größe des Buttons an */
  height: 100%; /* Passt sich der Größe des Buttons an */
  object-fit: contain; /* Verhindert Verzerrungen */
  border-radius: 50%; /* Für einen kreisförmigen Button */
}

.back-to-top:hover {
  background-color: #e08e0b;
}

.back-to-top:active {
  transform: scale(0.95);
}
</style>
