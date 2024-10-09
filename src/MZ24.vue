<template>
  <div id="app">
    <router-view></router-view>
    <InfoMessage v-if="showMessage" @close-message="showMessage = false" />
    <BackToTop />
  </div>
</template>

<script>
import InfoMessage from '@/components/DSGVO/InfoMessage.vue';
import BackToTop from '@/components/BackToTop.vue';

export default {
  name: 'MZ24',
  components: {
    InfoMessage,
    BackToTop,
  },
  data() {
    return {
      showMessage: true,
    };
  },
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px; /* Passen Sie die Größe entsprechend Ihrem Bild an */
  height: 50px;
  cursor: pointer;
  z-index: 1000;
}
</style>
