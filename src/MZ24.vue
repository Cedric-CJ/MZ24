<template>
  <div id="app">
    <router-view></router-view>
    <InfoMessage v-if="showMessage" @close-message="showMessage = false" />
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
      showMessage: true
    };
  },
  mounted() {
    console.log('InfoMessage component mounted');
  }
};
</script>

<style>
</style>