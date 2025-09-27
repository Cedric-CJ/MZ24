### Erstellt von Cedric visit my [GitHub](https://spezialcode.de/)
<template>
  <div class="container">
    <Header />
    <main>
      <h1 class="fade-in">Willkommen bei</h1>
      <h2 class="fade-in-delay">Metallbaumeister Zigann</h2>
      <h3 class="fade-in">Unser Motto:</h3>
      <h4 class="fade-in">
        <span class="animation">Zufriedene Kunden</span> sind unsere Basis,<br>
        hohe Fachkompetenz ist <span class="animation">unsere Zukunft</span>
      </h4>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  name: 'HomePage',
  components: { Header, Footer }
};
</script>

<style scoped>
.fade-in { opacity: 0; animation: fadeIn 2s forwards; }

.fade-in-delay { opacity: 0; animation: fadeIn 2s 1s forwards; }

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
.animation {
  position: relative;
  display: inline-block;
  color: #000;
  animation: subtleFlicker 3s infinite;
}

@keyframes subtleFlicker {
  0% {
    text-shadow: 0 0 2px #f39c12, 0 0 4px #f39c12;
    transform: scale(1);
    color: #000;
  }
  50% {
    text-shadow: 0 0 6px #f39c12, 0 0 10px #f39c12;
    transform: scale(1.03);
    color: #f39c12;
  }
  100% {
    text-shadow: 0 0 2px #f39c12, 0 0 4px #f39c12;
    transform: scale(1);
    color: #000;
  }
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
  max-height: calc(100vh - 15vh - 50px); /* Dynamische Höhe: Bildschirmhöhe - Footerhöhe */
  overflow-y: auto; /* Scrollen erlauben, falls Inhalte zu groß sind */
}

@media (max-width: 768px) {
  main {
    max-height: 60vh; /* Weniger Platz für Main auf mobilen Geräten */
    padding: 10px;
  }
}
</style>