### Erstellt von Cedric visit my [GitHub](https://cedric-cj.github.io/AboutMe/)
<template>
  <div class="info-message">
    <div>
      <p>
        Diese Seite nutzt keine Cookies, diesbezüglich wird laut
          <a href="https://dr-dsgvo.de/tmg-paragraph-15-nutzungsdaten/" target="_blank">§ 15 DDG</a>
          kein Cookie Manager für diese Webseite benötigt.
        </p>
      <button @click="closeMessage">Verstanden</button>
    </div>
    <div class="footer-credits">
        <b href="#" @click.prevent="confirmRedirect">Erstellt von Cedric</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoMessage',
  methods: {
    confirmRedirect() {
      if (confirm('Sie verlassen jetzt die Seite und gelangen zur Seite des Erstellers dieser Seite. Möchten Sie fortfahren?')) {
        window.location.href = 'https://cedric-cj.github.io/AboutMe/';
      }
    },
    closeMessage() {
      this.$emit('close-message');
    }
  },
};
</script>

<style scoped>
</style>