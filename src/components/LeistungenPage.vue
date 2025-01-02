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
  name: 'LeistungenPage'
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
  box-sizing: border-box;
  width: 100%;
}

main {
  text-align: center;
}

main ul {
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
  list-style-type: none;
  padding-left: 0;
}

main ul li {
  margin: 10px 0;
}

main ul li ul {
  margin-left: 20px;
}
@media (min-width:820px) and (min-height: 1180px) {
  main ul {
    list-style-type: none;
    padding-left: 0;
    max-width: 100%;
    margin: 0 auto;
    overflow-x: auto;
  }

  main ul li {
    margin: 8px 0;
    font-size: calc(2vw + 0.6vh);
    line-height: 1.5;
    padding-left: 0px;
    position: relative;
    white-space: nowrap;
  }

  main ul li::before {
    content: "•";
    color: #f39c12;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  main ul li ul li {
    font-size: calc(1vw + 0.4vh);
    padding-left: 15px;
    color: #333;
    white-space: nowrap;
  }
}
main h1 {
  font-size: calc(2vw + 1em);
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}
</style>