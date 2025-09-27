### Erstellt von Cedric visit my [GitHub](https://spezialcode.de/)
<template>
  <div id="app">
    <router-view></router-view>
    <BackToTop/>
    <InfoMessage v-if="showMessage" @close-message="showMessage = false" />
  </div>
</template>

<script>
import InfoMessage from './components/DSGVO/InfoMessage.vue';
import BackToTop from './components/layout/BackToTop.vue';

export default {
  name: 'MZ24',
  components: { InfoMessage, BackToTop },
  data() {
    return {
      showMessage: !localStorage.getItem('mz24_info_ack'),
    };
  },
};
</script>
<style scoped>
</style>
