<template>
  <div id="app">
    <router-view></router-view>
    <BackToTop/>
    <InfoMessage v-if="showMessage" @close-message="showMessage = false" />
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
</style>
