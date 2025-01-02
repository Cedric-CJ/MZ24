### Erstellt von Cedric visit my [GitHub](https://cedric-cj.github.io/AboutMe/)
<script setup>
// Timeline inspiriert von https://github.com/ftes/react-dual-timeline
import { ref, onMounted, computed } from 'vue';
import '@/assets/timeline.css';

import Meisterbrief from "@/Bilder/Meisterbrief.jpg";
import DBVKZertifikat from "@/Bilder/DB-VK-Zertifikat.jpg";

const images = ref([
  { src: Meisterbrief, alt: 'Meisterbrief' },
  { src: DBVKZertifikat, alt: 'DB-VK-Zertifikat' },
]);

const isLightboxOpen = ref(false);
const currentIndex = ref(0);

const currentImage = computed(() => images.value[currentIndex.value]);
const openLightbox = (index) => {
  currentIndex.value = index;
  isLightboxOpen.value = true;
  document.body.style.overflow = 'hidden'; // Scrollen verhindern
  window.addEventListener('keydown', onKeyDown);
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  document.body.style.overflow = ''; // Scrollen erlauben
  window.removeEventListener('keydown', onKeyDown);
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const onKeyDown = (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  } else if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    prevImage();
  }
};

const events = ref([
  { year: 2004, title: "Gegründet", description: "Gründung des Unternehmens im Bereich Metallbau und Schlosserei." },
  { year: 2007, title: "Meisterabschluss", description: "Erhalt des Meisterabschlusses, der das Fundament für weiteres Wachstum legt." },
  { year: 2008, title: "In Rangsdorf ansässig", description: "Umzug nach Rangsdorf, um näher an den Kunden zu sein und den Service zu verbessern." },
  { year: 2019, title: "Umzug nach Füwa", description: "Verlegung des Standorts nach Fürstenwalde/Spree, um die Produktionskapazitäten zu erweitern." },
  { year: 2024, title: "Umzug nach Glienicke Rietz-Neuendorf", description: "Umzug nach Glienicke, um das Geschäft weiter auszubauen und neue Märkte zu erschließen."}
]);

const isEventVisible = (event) => {
  if (!event.visibleFrom) return true;
  const today = new Date();
  return today >= event.visibleFrom;
};

const visibleEvents = computed(() => events.value.filter(isEventVisible));

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
          Willkommen bei unserem Meisterbetrieb für Metallbau und Schlosserei! Seit unserer Gründung im Jahr 2004 haben wir uns kontinuierlich weiterentwickelt und ein solides Fundament in der Branche geschaffen. Mit Standorten in Rangsdorf und Fürstenwalde/Spree bieten wir ein breites Spektrum an Dienstleistungen an, die sowohl private als auch gewerbliche Kunden ansprechen.
        </p>
        <p>
          Unsere Reise begann mit der Gründung im Jahr 2004 und einem klaren Fokus auf Qualität und Innovation. Im Jahr 2007 erreichte unser Gründer den Meisterabschluss, was die Basis für unser stetiges Wachstum legte. Unsere Umsiedlung nach Rangsdorf im Jahr 2008 und später nach Fürstenwalde/Spree im Jahr 2019 ermöglichte es uns, unsere Kapazitäten zu erweitern und unseren Service weiter zu verbessern.
        </p>
        <p>
          Unser Team besteht aus hochqualifizierten und erfahrenen Fachkräften, die ihre Leidenschaft für das Handwerk in jedes Projekt einbringen. Mit jahrelanger Erfahrung und tiefem Fachwissen setzen wir auch die anspruchsvollsten Projekte präzise und termingerecht um. Durch kontinuierliche Weiterbildung und Investitionen in moderne Technologien gewährleisten wir, dass wir unseren Kunden stets die besten Lösungen bieten können.
        </p>
        <p>
          Bei uns stehen Qualität und Kundenzufriedenheit an erster Stelle. Wir arbeiten eng mit unseren Kunden zusammen, um ihre individuellen Wünsche zu verstehen und maßgeschneiderte Lösungen zu entwickeln, die sowohl funktional als auch ästhetisch höchsten Ansprüchen genügen. Von der ersten Beratung bis zur finalen Umsetzung begleiten wir Sie durch den gesamten Prozess und stehen Ihnen mit Rat und Tat zur Seite.
        </p>
        <p>
          Zuverlässigkeit und Termintreue sind für uns ebenso wichtig wie handwerkliche Perfektion. Wir wissen, dass unsere Kunden auf uns zählen, und deshalb setzen wir alles daran, unsere Versprechen zu halten und Projekte pünktlich abzuschließen. Dabei verwenden wir ausschließlich hochwertige Materialien, um langlebige und robuste Konstruktionen zu gewährleisten.
        </p>
        <p>
          Rückblickend auf unsere Erfolge in den letzten zwei Jahrzehnten sind wir stolz auf die Vielzahl realisierter Projekte. Diese reichen von kleinen Reparaturarbeiten über umfassende Renovierungen bis hin zu großen Neubauprojekten. Unabhängig von der Größe wird jeder Auftrag von uns mit der gleichen Sorgfalt und Hingabe behandelt.
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
          <li v-for="event in visibleEvents" :key="event.year">
            <div>
              <time>{{ event.year }}: {{ event.title}}</time>
              <p>{{ event.description }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="certificates">
        <div
            v-for="(image, index) in images"
            :key="index"
            class="certificate"
        >
          <img
              :src="image.src"
              :alt="image.alt"
              @click="openLightbox(index)"
          />
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
            Metallbaumeister Zigann<br>
            Radlower Str. 1<br>
            15848 Rietz-Neuendorf<br>
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
    <div
        v-if="isLightboxOpen"
        class="lightbox"
        @click.self="closeLightbox"
    >
      <button class="close-button" @click="closeLightbox">×</button>
      <button class="nav-button prev" @click.stop="prevImage">‹</button>
      <div class="lightbox-image">
        <img :src="currentImage.src" :alt="currentImage.alt" />
      </div>
      <button class="nav-button next" @click.stop="nextImage">›</button>
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
  padding: 20px;
  hyphens: auto;
}
h1 {
  margin: 20px;
}

.image-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.2s;
}

.image-item img:hover {
  transform: scale(1.05);
}
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  overflow: hidden;
}

.lightbox img {
  max-width: 95vh;
  max-height: 95vh;
  object-fit: contain;
}
.lightbox {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.nav-button {
  background: white;
  border: none;
  font-size: 2em;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-user-select: none;
  user-select: none;
  color: #000;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close-button {
  top: 10%;
  right: 10%;
  background: white;
  border: none;
  font-size: 2em;
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
  user-select: none;
  color: #000;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

.certificate img {
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.2s;
}

.certificate img:hover {
  transform: scale(1.05);
}

.certificates {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
@media (min-width:820px) and (min-height: 1180px) {
  main h1 {
    font-size: calc(6vw + 1rem);
    margin-bottom: .5em;
  }
  main h2 {
    font-size: calc(5vw + 1rem);
    margin-bottom: .5em;
  }
  main h3 {
    font-size: calc(4vw + 1rem);
    margin-bottom: .5em;
  }
  main h4 {
    font-size: calc(4vw + 1rem);
    margin-bottom: .5em;
  }
  .about-us p {
    font-size: 4em;
  }
  time {
    display: block;
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .timeline ul li div {
    width: 600px;
  }
  .timeline ul li:nth-child(2n) div {
    left: -639px;
  }
  .certificate {
    width: 400px;
    margin: 0 100px;
  }
  .certificates {
    margin-top: 100px;
  }
}
</style>