<script setup>
import { ref, onMounted } from 'vue';

const firms = ref([
  "AlterMann Heizungs- und Sanitär GmbH",
  "Bad Saarow Kur GmbH",
  "Bardenhagen Feinwerk Technik GmbH",
  "Baukontor 2000",
  "Becker & Armburst GmbH (FFO)",
  "Becker & Armburst GmbH (Füwa)",
  "Becker & Armburst GmbH (KW)",
  "Beck & Armburst GmbH (LF)",
  "Burisch Grundbau GmbH",
  "Christin und Sascha Schelter Immobilien GbR",
  "CURATA Senioreneinrichtungen GmbH",
  "DB - Angebotsmangment",
  "DB Service GmbH",
  "Edalko GmbH",
  "Engelmann Brunnenbau GmbH",
  "Facility Management",
  "FRÖBEL Bildung und Erziehung gemeinnützige GmbH",
  "Glaserei Schwelgin",
  "Grundstücksgemeinschaft Roswitha und Marie Frost GbR",
  "Heider Logistik GmbH & Co. KG",
  "Heimtiergarten Fürstenwalde",
  "Kalusa Saaten GmbH",
  "Last Hausverwaltung",
  "Ludwig Lamprecht",
  "Norbert Schmidt Hausverwaltung GmbH",
  "Plickert Glasereibetriebe GmbH",
  "Robert Helwig GmbH",
  "Schliessanlagen Banser",
  "Solaritec GmbH",
  "SBAZV",
  "Station und Service AG",
  "Störitzland Betriebsgesellschaft mbH",
  "Tarkus Gebäudemanagement GmbH",
  "Tiefbau Werner GmbH",
  "TÜV Nord Auto GmbH & Co.KG",
  "Wohnungsbau und Siedlungsgesellschaft von 1924 mbH",
  "Zeppelin Rental GmbH"
]);

firms.value.sort();

const logos = ref({});
const loading = ref({});

const loadLogos = async () => {
  for (const firm of firms.value) {
    const logoName = firm.replace(/[^a-zA-Z0-9]/g, '_');
    loading.value[firm] = true;
    try {
      const response = await fetch(`@/assets/logos/${logoName}.png`);
      if (response.ok) {
        logos.value[firm] = `@/assets/logos/${logoName}.png`;
      } else {
        logos.value[firm] = null;
      }
    } catch {
      logos.value[firm] = null;
    } finally {
      loading.value[firm] = false;
    }
  }
};

onMounted(() => {
  loadLogos();
});
</script>

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
      <h1>Unsere Kunden</h1>
      <div class="firms-list">
        <div class="firm" v-for="firm in firms" :key="firm">
          <span>{{ firm }}</span>
          <div class="logo-container">
            <img v-if="logos[firm]" :src="logos[firm]" alt="Logo" class="firm-logo">
            <div v-else-if="loading[firm]" class="loader"></div>
            <span v-else>Logo nicht gefunden</span>
          </div>
        </div>
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

h1 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.firms-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.firm {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s, background-color 0.3s;
}

.firm:hover {
  transform: translateY(-5px);
  background-color: #f0f0f0;
}

.logo-container {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.firm-logo {
  width: 100px;
  height: auto;
}

.loader {
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #333;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

footer {
  padding: 10px;
  background-color: #9f9b9b;
  color: white;
  width: 100%;
  text-align: center;
  border-radius: 10px;
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
    font-size: 0.9em;
  }

  .footer-right p {
    text-align: center;
  }
}
</style>