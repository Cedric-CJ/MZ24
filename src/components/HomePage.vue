### Erstellt von Cedric visit my [GitHub](https://cedric-cj.github.io/AboutMe/)
<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Startseite</router-link></li>
          <li><router-link to="/unternehmen">Über Uns</router-link></li>
          <li><router-link to="/galerie">Galerie</router-link></li>
          <li><router-link to="/leistungen">Leistungen</router-link></li>
        </ul>
      </nav>
      <img src="@/assets/Logo.gif" alt="Logo" class="logo">
    </header>
    <main>
      <h1 class="fade-in">Willkommen bei</h1>
      <h2 class="fade-in-delay">Metallbaumeister Zigann</h2>
      <h3 class="fade-in">Unser Motto:</h3>
      <h4 class="fade-in">
        <span class="animation">Zufriedene Kunden</span> sind unsere Basis,<br>
        hohe Fachkompetenz ist <span class="animation">unsere Zukunft</span>
      </h4>
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-left">
          <p>Schnell - Zuverlässig - Günstig<br>Einmalig in Deutschland</p>
        </div>
        <div class="footer-right">
          <p>
            Metallbaumeister Zigann<br>
            Radlower Str. 1<br>
            15848 Rietz-Neuendorf<br>
            <a href="tel:+491634227950">Tel: 0163 / 42 27 950</a><br>
            <a href="mailto:info@mz24.net">info@mz24.net</a>
          </p>
        </div>
      </div>
      <div class="footer-links">
        <router-link to="/impressum">Impressum</router-link> |
        <router-link to="/datenschutz">Datenschutz</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 2s forwards;
}

.fade-in-delay {
  opacity: 0;
  animation: fadeIn 2s 1s forwards;
}

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