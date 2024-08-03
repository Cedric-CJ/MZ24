<template>
  <div id="app">
    <DarkModeToggle />
    <router-view class="fade-in" />
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
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import InfoMessage from "@/components/DSGVO/InfoMessage.vue";
export default {
  name: 'App',
  components: {
    DarkModeToggle,
    InfoMessage
  },
  data() {
    return {
      showMessage: true,
      showBackToTop: false
    };
  },
};
</script>

<style>
@import '@/assets/styles.css';

</style>