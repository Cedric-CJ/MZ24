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
      <h4 class="fade-in">Zufriedene Kunden sind unsere Basis,<br>hohe Fachkompetenz ist unsere Zukunft</h4>
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-left">
          <p>Schnell - Zuverlässig - Günstig<br>Einmalig in Deutschland</p>
        </div>
        <div class="footer-right">
          <p>
            Kontakt:<br>
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
        <router-link to="/privacy-policy">Datenschutz</router-link>
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
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 0;
  width: 100%;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #9f9b9b;
  color: white;
  flex-wrap: wrap;
}

header .logo {
  width: 150px;
  height: auto;
  border-radius: 15px;
  margin-left: 20px;
}

header nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

header nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

header nav ul li {
  margin: 0 10px;
}

header nav ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s, transform 0.2s;
}

header nav ul li a:hover {
  color: #f39c12;
}

header nav ul li a:active {
  transform: scale(0.95);
}

main {
  text-align: center;
  margin: 20px 0;
  flex-grow: 1;
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

h2 {
  font-size: 2em;
  margin-top: 40px;
  color: #444;
}

h3 {
  font-size: 1.5em;
  margin-top: 20px;
  color: #555;
}

h4 {
  font-size: 1.2em;
  color: #666;
}

p {
  font-size: 1.2em;
  color: #ffffff;
}

footer {
  padding: 10px;
  background-color: #9f9b9b;
  color: white;
  width: 100%;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.footer-left {
  width: 45%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-right {
  width: 45%;
  display: flex;
  justify-content: center;
}

.footer-right p {
  text-align: left;
  font-size: 0.9em;
}

.footer-right a {
  color: #ffffff;
  text-decoration: none;
}

.footer-right a:hover {
  color: #f39c12;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 5px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #f39c12;
}

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

@media (max-width: 768px) {
  header {
    flex-direction: column;
  }

  header .logo {
    margin-top: 10px;
    margin-left: 0;
  }

  header nav ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.2em;
  }

  h4 {
    font-size: 1.2em;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-left, .footer-right {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  .footer-right p {
    text-align: center;
  }
}

@media (max-width: 480px) {
  header nav ul li {
    margin: 5px;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.2em;
  }

  h3 {
    font-size: 1em;
  }

  h4 {
    font-size: 1em;
  }

  footer p {
    font-size: 0.9em;
  }

  .footer-left p, .footer-right p {
    font-size: 0.8em;
  }

  .footer-right p {
    text-align: center;
  }
}
</style>