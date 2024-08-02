### Erstellt von Cedric visit my [GitHub](https://cedric-cj.github.io/AboutMe/)
<script setup>
import { ref, onMounted } from 'vue';

import AlterMann from "@/Bilder/Logo/AlterMann Heizungs- und Sanitär GmbH.svg";
import BadSaarowKur from "@/Bilder/Logo/Bad Saarow Kur GmbH.png";
import Bardenhagen from "@/Bilder/Logo/Bardenhagen Feinwerk Technik GmbH.png";
import Baukontor2000 from "@/Bilder/Logo/Bau kontor 2000 Berlin GmbH.png";
import BeckerArmburst from "@/Bilder/Logo/Becker & Armburst GmbH.svg";
import BurischGrundbau from "@/Bilder/Logo/Burisch Grundbau GmbH.png";
import CURATA from "@/Bilder/Logo/CURATA Senioreneinrichtungen GmbH.png";
import DBAngebotsmangment from "@/Bilder/Logo/DB - Angebotsmangment und Service GmbH.png";
import Edalko from "@/Bilder/Logo/Edalko GmbH.png";
import EngelmannBrunnenbau from "@/Bilder/Logo/Engelmann Brunnenbau GmbH.png";
import FacilityManagement from "@/Bilder/Logo/Facility Management.png";
import FroebelBildung from "@/Bilder/Logo/FRÖBEL Bildung und Erziehung gemeinnützige GmbH.png";
import GlasereiSchwelgin from "@/Bilder/Logo/Glaserei Schwelgin.jpg";
import Grundstücksgemeinschaft from "@/Bilder/Logo/Grundstücksgemeinschaft Roswitha und Marie Frost GbR.png";
import HeiderLogistik from "@/Bilder/Logo/Heider Logistik GmbH & Co. KG.png";
import Heimtiergarten from "@/Bilder/Logo/Heimtiergarten Fürstenwalde.svg";
import KalusaSaaten from "@/Bilder/Logo/Kalusa Saaten GmbH.png";
import LudwigLamprecht from "@/Bilder/Logo/Ludwig Lamprecht.jpg";
import NorbertSchmidt from "@/Bilder/Logo/Norbert Schmidt Hausverwaltung GmbH.png";
import PlickertGlaserei from "@/Bilder/Logo/Plickert Glasereibetriebe GmbH.webp";
import RobertHelwig from "@/Bilder/Logo/Robert Helwig GmbH.png";
import SchliessanlagenBanser from "@/Bilder/Logo/Schliessanlagen Banser.jpg";
import Solaritec from "@/Bilder/Logo/Solaritec GmbH.svg";
import SBAZV from "@/Bilder/Logo/SBAZV.svg";
import Stoeritzland from "@/Bilder/Logo/Störitzland Betriebsgesellschaft mbH.avif";
import TiefbauWerner from "@/Bilder/Logo/Tiefbau Werner GmbH.png";
import TÜVNordAuto from "@/Bilder/Logo/TÜV Nord Auto GmbH & Co.KG.svg";
import Wohnungsbau1924 from "@/Bilder/Logo/Wohnungsbau und Siedlungsgesellschaft von 1924 mbH.png";
import ZeppelinRental from "@/Bilder/Logo/Zeppelin Rental GmbH.svg";
import Meisterbrief from "@/Bilder/Meisterbrief.jpg";
import DBVKZertifikat from "@/Bilder/DB-VK-Zertifikat.jpg";

const firms = ref([
  { name: "AlterMann Heizungs- und Sanitär GmbH", logo: AlterMann },
  { name: "Bad Saarow Kur GmbH", logo: BadSaarowKur },
  { name: "Bardenhagen Feinwerk Technik GmbH", logo: Bardenhagen },
  { name: "Baukontor 2000", logo: Baukontor2000 },
  { name: "Becker & Armburst GmbH", logo: BeckerArmburst },
  { name: "Burisch Grundbau GmbH", logo: BurischGrundbau },
  { name: "Christin und Sascha Schelter Immobilien GbR" },
  { name: "CURATA Senioreneinrichtungen GmbH", logo: CURATA },
  { name: "DB - Angebotsmangment und Service GmbH", logo: DBAngebotsmangment },
  { name: "Edalko GmbH", logo: Edalko },
  { name: "Engelmann Brunnenbau GmbH", logo: EngelmannBrunnenbau },
  { name: "Facility Management", logo: FacilityManagement },
  { name: "FRÖBEL Bildung und Erziehung gemeinnützige GmbH", logo: FroebelBildung },
  { name: "Glaserei Schwelgin", logo: GlasereiSchwelgin },
  { name: "Grundstücksgemeinschaft Roswitha und Marie Frost GbR", logo: Grundstücksgemeinschaft },
  { name: "Heider Logistik GmbH & Co. KG", logo: HeiderLogistik },
  { name: "Heimtiergarten Fürstenwalde", logo: Heimtiergarten },
  { name: "Kalusa Saaten GmbH", logo: KalusaSaaten },
  { name: "Ludwig Lamprecht", logo: LudwigLamprecht },
  { name: "Norbert Schmidt Hausverwaltung GmbH", logo: NorbertSchmidt },
  { name: "Plickert Glasereibetriebe GmbH", logo: PlickertGlaserei },
  { name: "Robert Helwig GmbH", logo: RobertHelwig },
  { name: "Schliessanlagen Banser", logo: SchliessanlagenBanser },
  { name: "Solaritec GmbH", logo: Solaritec },
  { name: "SBAZV", logo: SBAZV },
  { name: "Störitzland Betriebsgesellschaft mbH", logo: Stoeritzland },
  { name: "Tiefbau Werner GmbH", logo: TiefbauWerner },
  { name: "TÜV Nord Auto GmbH & Co.KG", logo: TÜVNordAuto },
  { name: "Wohnungsbau und Siedlungsgesellschaft von 1924 mbH", logo: Wohnungsbau1924 },
  { name: "Zeppelin Rental GmbH", logo: ZeppelinRental }
]);

firms.value.sort((a, b) => a.name.localeCompare(b.name));

const fullScreenImage = ref(null);

const showFullScreen = (src) => {
  fullScreenImage.value = src;
};

const hideFullScreen = () => {
  fullScreenImage.value = null;
};

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    hideFullScreen();
  }
};

onMounted(() => {
  window.addEventListener('keyup', handleEscapeKey);
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
        <div class="firm" v-for="firm in firms" :key="firm.name">
          <span>{{ firm.name }}</span>
          <div class="logo-container">
            <img v-if="firm.logo" :src="firm.logo" alt="Logo" class="firm-logo" @click="showFullScreen(firm.logo)">
            <span v-else>Logo nicht gefunden</span>
          </div>
        </div>
      </div>
      <div class="certificates">
        <img src="@/Bilder/Meisterbrief.jpg" alt="Meisterbrief" class="certificate" @click="showFullScreen(Meisterbrief)">
        <img src="@/Bilder/DB-VK-Zertifikat.jpg" alt="DB-VK-Zertifikat" class="certificate" @click="showFullScreen(DBVKZertifikat)">
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
        <router-link to="/impressum">Impressum</router-link>
        |
        <router-link to="/datenschutz">Datenschutz</router-link>
      </div>
    </footer>
    <div v-if="fullScreenImage" class="fullscreen-overlay" @click="hideFullScreen">
      <img :src="fullScreenImage" class="fullscreen-image">
    </div>
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
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.firms-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.firm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(25% - 10px);
  min-width: 200px;
  padding: 10px;
  background-color: #d0d0d0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background-color 0.3s;
}

.firm:hover {
  background-color: #c0c0c0;
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
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.loader {
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #333;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

.certificates {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.certificate {
  width: 150px;
  margin: 0 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.fullscreen-image {
  max-width: 90%;
  max-height: 90%;
}

@media (max-width: 1024px) {
  .firm {
    width: calc(33.33% - 10px);
  }
}

@media (max-width: 768px) {
  .firm {
    width: calc(50% - 10px);
  }

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
  .firm {
    width: calc(100% - 10px);
  }

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