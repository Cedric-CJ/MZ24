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
      <h1>Leistungen</h1>
      <div>
        <ul>
          <li>mobile Schlosserei</li>
          <li>mobile Schweißerei (auch VA, Alu)</li>
          <li>Rekonstruktionen
            <ul>
              <li>- Denkmalschutz</li>
            </ul>
          </li>
          <li>Spezialanfertigungen</li>
          <li>Metallgestaltung und -verarbeitung
            <ul>
              <li>- Edelstahlverarbeitung</li>
              <li>- Stahlbau</li>
              <li>- Metallbau für den Innenausbau (z.B. Treppengeländer, Handläufe)</li>
              <li>- Balkonbau und -verkleidungen</li>
              <li>- Schlosserarbeiten</li>
              <li>- Reparatur- und Wartungsarbeiten an Metallkonstruktionen</li>
            </ul>
          </li>
          <li>Sicherheitsgitter und Schutzvorrichtungen</li>
          <li>Geländer- und Treppenbau für den Außenbereich</li>
          <li>Vordächer, Zaunkomplettanlagen</li>
          <li>Fenstergitter, Geländer, Garagentore</li>
          <li>Handläufe, Treppen, Gittertüren</li>
          <li>Carports und Überdachungen</li>
          <li>Tor- und Türanlagen (inklusive automatischer Systeme)</li>
          <li>Antriebsnachrüstungen</li>
        </ul>
      </div>
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
        <router-link to="/datenschutz">Datenschutz</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LeistungenPage'
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
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

main:hover {
  transform: translateY(-10px);
  background-color: #e5e5e5;
}

ul {
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin: 10px 0;
}

ul li ul {
  margin-left: 20px;
}
</style>