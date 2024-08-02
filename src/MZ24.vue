<template>
  <div id="app">
    <router-view></router-view>
    <InfoMessage v-if="showMessage" @close-message="showMessage = false" />
    <img
        v-if="showBackToTop"
        @click="scrollToTop"
        src="@/assets/back%20to%20top%20button.png"
        alt="Back to Top"
        class="back-to-top"
    />
  </div>
</template>

<script>
import InfoMessage from '@/components/DSGVO/InfoMessage.vue';

export default {
  name: 'MZ24',
  components: {
    InfoMessage
  },
  data() {
    return {
      showMessage: true,
      showBackToTop: false
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;
      this.showBackToTop = scrollPosition >= bottomPosition;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    console.log('InfoMessage component mounted');
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}
.back-to-top:hover {
  opacity: 1;
}
</style>