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
        <span class="underline-animation">Zufriedene Kunden</span> sind unsere Basis,<br>
        hohe Fachkompetenz ist <span class="underline-animation">unsere Zukunft</span>
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
            An der Staatsreserve 2<br>
            15517 Fürstenwalde/Spree<br>
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

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
}

.underline-animation {
  position: relative;
  display: inline-block;
  animation: underline 3s forwards;
  background-image: linear-gradient(to right, #f39c12, #f39c12);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0 2px;
}

@keyframes underline {
  0% {
    background-size: 0 2px;
  }
  100% {
    background-size: 100% 2px;
  }
}
@media (min-width:820px) and (min-height: 1180px) {
  @keyframes underline {
    0% {
      background-size: 0 20px;
    }
    100% {
      background-size: 100% 20px;
    }
  }
}
</style>