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
import "@/assets/style.css"
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
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
</style>