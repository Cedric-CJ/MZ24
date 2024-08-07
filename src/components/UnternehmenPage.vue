### Erstellt von Cedric visit my [GitHub](https://cedric-cj.github.io/AboutMe/)
<script setup>
//Timeline insperiert von https://github.com/ftes/react-dual-timeline
import { ref, onMounted } from 'vue';
import '@/assets/timeline.css';
//import AlterMann from "@/Bilder/Logo/AlterMann Heizungs- und Sanitär GmbH.svg";
//import BadSaarowKur from "@/Bilder/Logo/Bad Saarow Kur GmbH.png";
//import Bardenhagen from "@/Bilder/Logo/Bardenhagen Feinwerk Technik GmbH.png";
//import Baukontor2000 from "@/Bilder/Logo/Bau kontor 2000 Berlin GmbH.png";
//import BeckerArmburst from "@/Bilder/Logo/Becker & Armburst GmbH.svg";
//import BurischGrundbau from "@/Bilder/Logo/Burisch Grundbau GmbH.png";
//import CURATA from "@/Bilder/Logo/CURATA Senioreneinrichtungen GmbH.png";
//import DBAngebotsmangment from "@/Bilder/Logo/DB - Angebotsmangment und Service GmbH.png";
//import Edalko from "@/Bilder/Logo/Edalko GmbH.png";
//import EngelmannBrunnenbau from "@/Bilder/Logo/Engelmann Brunnenbau GmbH.png";
//import FacilityManagement from "@/Bilder/Logo/Facility Management.png";
//import FroebelBildung from "@/Bilder/Logo/FRÖBEL Bildung und Erziehung gemeinnützige GmbH.png";
//import GlasereiSchwelgin from "@/Bilder/Logo/Glaserei Schwelgin.jpg";
//import Grundstücksgemeinschaft from "@/Bilder/Logo/Grundstücksgemeinschaft Roswitha und Marie Frost GbR.png";
//import HeiderLogistik from "@/Bilder/Logo/Heider Logistik GmbH & Co. KG.png";
//import Heimtiergarten from "@/Bilder/Logo/Heimtiergarten Fürstenwalde.svg";
//import KalusaSaaten from "@/Bilder/Logo/Kalusa Saaten GmbH.png";
//import LudwigLamprecht from "@/Bilder/Logo/Ludwig Lamprecht.jpg";
//import NorbertSchmidt from "@/Bilder/Logo/Norbert Schmidt Hausverwaltung GmbH.png";
//import PlickertGlaserei from "@/Bilder/Logo/Plickert Glasereibetriebe GmbH.webp";
//import RobertHelwig from "@/Bilder/Logo/Robert Helwig GmbH.png";
//import SchliessanlagenBanser from "@/Bilder/Logo/Schliessanlagen Banser.jpg";
//import Solaritec from "@/Bilder/Logo/Solaritec GmbH.svg";
//import SBAZV from "@/Bilder/Logo/SBAZV.svg";
//import Stoeritzland from "@/Bilder/Logo/Störitzland Betriebsgesellschaft mbH.avif";
//import TiefbauWerner from "@/Bilder/Logo/Tiefbau Werner GmbH.png";
//import TÜVNordAuto from "@/Bilder/Logo/TÜV Nord Auto GmbH & Co.KG.svg";
//import Wohnungsbau1924 from "@/Bilder/Logo/Wohnungsbau und Siedlungsgesellschaft von 1924 mbH.png";
//import ZeppelinRental from "@/Bilder/Logo/Zeppelin Rental GmbH.svg";
import Meisterbrief from "@/Bilder/Meisterbrief.jpg";
import DBVKZertifikat from "@/Bilder/DB-VK-Zertifikat.jpg";
import BeispielLogo from "@/assets/Logo.gif";
const firms = ref([
//{ name: "AlterMann Heizungs- und Sanitär GmbH", logo: AlterMann },
//{ name: "Bad Saarow Kur GmbH", logo: BadSaarowKur },
//{ name: "Bardenhagen Feinwerk Technik GmbH", logo: Bardenhagen },
//{ name: "Baukontor 2000", logo: Baukontor2000 },
//{ name: "Becker & Armburst GmbH", logo: BeckerArmburst },
//{ name: "Burisch Grundbau GmbH", logo: BurischGrundbau },
//{ name: "Christin und Sascha Schelter Immobilien GbR" },
//{ name: "CURATA Senioreneinrichtungen GmbH", logo: CURATA },
//{ name: "DB - Angebotsmangment und Service GmbH", logo: DBAngebotsmangment },
//{ name: "Edalko GmbH", logo: Edalko },
//{ name: "Engelmann Brunnenbau GmbH", logo: EngelmannBrunnenbau },
//{ name: "Facility Management", logo: FacilityManagement },
//{ name: "FRÖBEL Bildung und Erziehung gemeinnützige GmbH", logo: FroebelBildung },
//{ name: "Glaserei Schwelgin", logo: GlasereiSchwelgin },
//{ name: "Grundstücksgemeinschaft Roswitha und Marie Frost GbR", logo: Grundstücksgemeinschaft },
//{ name: "Heider Logistik GmbH & Co. KG", logo: HeiderLogistik },
//{ name: "Heimtiergarten Fürstenwalde", logo: Heimtiergarten },
//{ name: "Kalusa Saaten GmbH", logo: KalusaSaaten },
//{ name: "Ludwig Lamprecht", logo: LudwigLamprecht },
//{ name: "Norbert Schmidt Hausverwaltung GmbH", logo: NorbertSchmidt },
//{ name: "Plickert Glasereibetriebe GmbH", logo: PlickertGlaserei },
//{ name: "Robert Helwig GmbH", logo: RobertHelwig },
//{ name: "Schliessanlagen Banser", logo: SchliessanlagenBanser },
//{ name: "Solaritec GmbH", logo: Solaritec },
//{ name: "SBAZV", logo: SBAZV },
//{ name: "Störitzland Betriebsgesellschaft mbH", logo: Stoeritzland },
//{ name: "Tiefbau Werner GmbH", logo: TiefbauWerner },
//{ name: "TÜV Nord Auto GmbH & Co.KG", logo: TÜVNordAuto },
//{ name: "Wohnungsbau und Siedlungsgesellschaft von 1924 mbH", logo: Wohnungsbau1924 },
//{ name: "Zeppelin Rental GmbH", logo: ZeppelinRental };
{ name: "Beispiel Firma", logo: BeispielLogo }]);

firms.value.sort((a, b) => a.name.localeCompare(b.name));

const fullScreenImage = ref(null);

const showFullScreen = (src) => {
  fullScreenImage.value = src;
  document.addEventListener('keydown', handleEscapeKey);
};

const hideFullScreen = () => {
  fullScreenImage.value = null;
  document.removeEventListener('keydown', handleEscapeKey);
};

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    hideFullScreen();
  }
};

const events = ref([
  { year: 1934, title: "Gründung des Unternehmens", description: "..." },
  { year: 1937, title: "Erweiterung der Dienstleistungen", description: "..." },
  { year: 1940, title: "Umzug in größere Räumlichkeiten", description: "..." },
  { year: 1943, title: "Eröffnung einer neuen Niederlassung", description: "..." },
  { year: 1946, title: "Einführung neuer Technologien", description: "..." },
]);

onMounted(() => {
  const targets = document.querySelectorAll(".timeline ul li");
  const threshold = 0.5;
  const ANIMATED_CLASS = "in-view";

  function callback(entries, observer) {
    entries.forEach((entry) => {
      const elem = entry.target;
      if (entry.intersectionRatio >= threshold) {
        elem.classList.add(ANIMATED_CLASS);
        observer.unobserve(elem);
      } else {
        elem.classList.remove(ANIMATED_CLASS);
      }
    });
  }

  const observer = new IntersectionObserver(callback, { threshold });
  for (const target of targets) {
    observer.observe(target);
  }
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
      <h1>Über Uns</h1>
      <div class="about-us">
        <p>
          Willkommen bei unserem Meisterbetrieb für Metallbau und Schlosserei! Seit unserer Gründung im Jahr 2014 haben wir uns als zuverlässiger und innovativer Partner in der Branche etabliert. Unser Unternehmen hat sich kontinuierlich weiterentwickelt und bietet heute ein umfangreiches Leistungsspektrum im Bereich Metallbau und Schlosserei an. Unsere Dienstleistungen umfassen die Planung, Fertigung und Montage von maßgeschneiderten Metallkonstruktionen für private, gewerbliche und industrielle Kunden.
        </p>
        <p>
          Unser Team besteht aus hochqualifizierten und erfahrenen Fachkräften, die sich durch ihr handwerkliches Geschick und ihre Leidenschaft für den Beruf auszeichnen. Jeder unserer Mitarbeiter bringt jahrelange Erfahrung und Fachwissen mit, wodurch wir in der Lage sind, auch anspruchsvollste Projekte präzise und termingerecht umzusetzen. Wir investieren kontinuierlich in die Weiterbildung unseres Teams und in moderne Technologien, um unseren Kunden stets die besten Lösungen bieten zu können.
        </p>
        <p>
          Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. Wir arbeiten eng mit unseren Kunden zusammen, um ihre individuellen Wünsche und Anforderungen zu verstehen und umzusetzen. Von der ersten Beratung über die detaillierte Planung bis hin zur finalen Umsetzung – wir begleiten Sie durch den gesamten Prozess und stehen Ihnen mit Rat und Tat zur Seite. Unsere maßgeschneiderten Lösungen sind darauf ausgerichtet, sowohl funktional als auch ästhetisch höchsten Ansprüchen zu genügen.
        </p>
        <p>
          Neben unserer Fachkompetenz legen wir großen Wert auf Zuverlässigkeit und Termintreue. Wir wissen, dass unsere Kunden auf uns zählen, und deshalb setzen wir alles daran, unsere Versprechen zu halten und Projekte pünktlich abzuschließen. Dabei achten wir stets auf höchste Qualitätsstandards und verwenden nur hochwertige Materialien, um langlebige und robuste Konstruktionen zu gewährleisten.
        </p>
        <p>
          Wir sind stolz auf die Vielzahl erfolgreicher Projekte, die wir in den letzten Jahren realisieren konnten. Diese reichen von kleinen Reparaturarbeiten über umfangreiche Renovierungen bis hin zu großen Neubauprojekten. Jeder Auftrag, unabhängig von seiner Größe, wird von uns mit der gleichen Sorgfalt und Hingabe behandelt.
        </p>
        <p>
          Lassen Sie uns gemeinsam Ihr nächstes Projekt in Angriff nehmen! Wir freuen uns darauf, Sie kennenzulernen und Ihnen unsere Fähigkeiten unter Beweis zu stellen. Kontaktieren Sie uns für eine unverbindliche Beratung und erfahren Sie mehr darüber, wie wir Ihre Ideen in die Realität umsetzen können. Ihr Vertrauen ist unser Ansporn, und wir sind erst zufrieden, wenn Sie es sind.
        </p>
        <p>
          Vielen Dank für Ihr Interesse an unserem Unternehmen. Wir freuen uns darauf, auch Ihr Projekt erfolgreich umzusetzen und Sie als zufriedenen Kunden begrüßen zu dürfen.
        </p>
      </div>
      <h1>Unsere Geschichte</h1>
      <div class="timeline">
        <ul>
          <li v-for="event in events" :key="event.year">
            <div>
              <time>{{ event.year }}</time>
              <p>{{ event.description }}</p>
            </div>
          </li>
        </ul>
      </div>
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
      <img :src="fullScreenImage" class="fullscreen-image" alt="Vollbild">
    </div>
  </div>
</template>

<style scoped>
main:hover {
  transform: none;
  background-color: inherit;
}
.about-us p {
  font-size: 1.25em;
  text-align: justify;
  padding: 20px
}
h1 {
  margin: 20px;
}
</style>