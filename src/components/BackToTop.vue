<template>
  <button
      v-if="visible"
      class="back-to-top"
      @click="scrollToTop"
      :src="backToTopImage"
  >
    ∧
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
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #f39c12;
  color: white;
  border: none;
  border-radius: 50%;
  width: 7vh;
  height: 7vh;
  font-size: 1.5em;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s, transform 0.3s;
}

.back-to-top:hover {
  background-color: #e08e0b;
}

.back-to-top:active {
  transform: scale(0.95);
}
@media (min-width:820px) and (min-height: 1180px) {
  .back-to-top {
    font-size: 7em;
  }
}
</style>
