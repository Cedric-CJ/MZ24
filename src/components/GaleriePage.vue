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
      <h1>Galerie</h1>
      <div class="gallery">
        <div
            v-for="(categoryImages, categoryName) in images"
            :key="categoryName"
            class="category"
        >
          <h2>{{ categoryName }}</h2>
          <div class="image-grid">
            <div
                v-for="(image, index) in categoryImages"
                :key="index"
                class="image-item"
            >
              <component
                  :is="image.slider ? 'BeforeAfterSlider' : 'img'"
                  :src="image.src"
                  :alt="image.alt"
                  :before-src="image.beforeSrc"
                  :after-src="image.afterSrc"
                  @click.native="!image.slider && openLightbox(categoryName, index)"
                  @click="image.slider && openLightbox(categoryName, index)"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Lightbox Modal -->
      <div
          v-if="isLightboxOpen"
          class="lightbox"
          @click.self="closeLightbox"
      >
        <button class="close-button" @click="closeLightbox">×</button>
        <div class="lightbox-content">
          <button class="nav-button prev" @click.stop="prevImage">‹</button>
          <div class="lightbox-image">
            <img
                v-if="!currentImage.slider"
                :src="currentImage.src"
                :alt="currentImage.alt"
            />
            <BeforeAfterSlider
                v-else
                :before-src="currentImage.beforeSrc"
                :after-src="currentImage.afterSrc"
            />
          </div>
          <button class="nav-button next" @click.stop="nextImage">›</button>
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

<script>
import BeforeAfterSlider from './BeforeAfterSlider.vue';

import BalkonVorher from '@/Bilder/Balkon/Balkon_vorher.JPG';
import BalkonNachher from '@/Bilder/Balkon/Balkon_nachher.JPG';
import Balkon1 from '@/Bilder/Balkon/Balkon 1.JPG';
import Balkon2 from '@/Bilder/Balkon/Balkon 2.JPG';

import Gelaender1 from '@/Bilder/Geländer/Geländer 1.JPG';
import Gelaender2 from '@/Bilder/Geländer/Geländer 2.JPG';
import Gelaender3 from '@/Bilder/Geländer/Geländer 3.JPG';

import KellertuerVorher from '@/Bilder/Tür_Tor_Treppe_Fenster/Kellertür_vorher.JPG';
import KellertuerNachher from '@/Bilder/Tür_Tor_Treppe_Fenster/Kellertür_nachher.JPG';
import Treppe1 from '@/Bilder/Tür_Tor_Treppe_Fenster/Treppe 1.JPG';
import Tuer1 from '@/Bilder/Tür_Tor_Treppe_Fenster/Tür 1.JPG';
import Fenster1 from '@/Bilder/Tür_Tor_Treppe_Fenster/Fenster 1.JPG';
import Tor1 from '@/Bilder/Tür_Tor_Treppe_Fenster/Tor 1.JPG';
import Tor2 from '@/Bilder/Tür_Tor_Treppe_Fenster/Tor 2.JPG';
import Tor3 from '@/Bilder/Tür_Tor_Treppe_Fenster/Tor 3.JPG';
import Tor4 from '@/Bilder/Tür_Tor_Treppe_Fenster/Tor 4.JPG';

import Sonstiges1 from '@/Bilder/Sonstiges 1.JPG';

export default {
  name: 'GaleriePage',
  components: {
    BeforeAfterSlider,
  },
  data() {
    return {
      images: {
        Balkons: [
          {
            slider: true,
            beforeSrc: BalkonVorher,
            afterSrc: BalkonNachher,
            alt: 'Balkon vorher und nachher',
          },
          { src: Balkon1, alt: 'Balkon 1' },
          { src: Balkon2, alt: 'Balkon 2' },
        ],
        Geländer: [
          { src: Gelaender1, alt: 'Geländer 1' },
          { src: Gelaender2, alt: 'Geländer 2' },
          { src: Gelaender3, alt: 'Geländer 3' },
        ],
        'Türen, Tore, Treppen, Fenster': [
          {
            slider: true,
            beforeSrc: KellertuerVorher,
            afterSrc: KellertuerNachher,
            alt: 'Kellertür vorher und nachher',
          },
          { src: Treppe1, alt: 'Treppe 1' },
          { src: Tuer1, alt: 'Tür 1' },
          { src: Fenster1, alt: 'Fenster 1' },
          { src: Tor1, alt: 'Tor 1' },
          { src: Tor2, alt: 'Tor 2' },
          { src: Tor3, alt: 'Tor 3' },
          { src: Tor4, alt: 'Tor 4' },
        ],
        Sonstiges: [{ src: Sonstiges1, alt: 'Sonstiges 1' }],
      },
      isLightboxOpen: false,
      currentCategory: '',
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      if (this.currentCategory && this.images[this.currentCategory]) {
        return this.images[this.currentCategory][this.currentIndex];
      }
      return null;
    },
  },
  methods: {
    openLightbox(category, index) {
      this.currentCategory = category;
      this.currentIndex = index;
      this.isLightboxOpen = true;
      document.body.style.overflow = 'hidden'; // Scrollen verhindern
      window.addEventListener('keydown', this.onKeyDown);
    },
    closeLightbox() {
      this.isLightboxOpen = false;
      document.body.style.overflow = ''; // Scrollen erlauben
      window.removeEventListener('keydown', this.onKeyDown);
    },
    nextImage() {
      if (this.currentCategory && this.images[this.currentCategory]) {
        this.currentIndex =
            (this.currentIndex + 1) % this.images[this.currentCategory].length;
      }
    },
    prevImage() {
      if (this.currentCategory && this.images[this.currentCategory]) {
        this.currentIndex =
            (this.currentIndex - 1 + this.images[this.currentCategory].length) %
            this.images[this.currentCategory].length;
      }
    },
    onKeyDown(event) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      } else if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      }
    },
  },
};
</script>
<style scoped>
html,
body {
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
  position: relative;
  z-index: 1;
}

.gallery {
  width: 100%;
  padding: 20px;
}

.category {
  margin-bottom: 40px;
}

.category h2 {
  margin-bottom: 20px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-item {
  flex: 1 0 calc(25% - 10px);
  box-sizing: border-box;
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

.lightbox img{
  max-width: 95vh;
  max-height: 95vh;
  object-fit: contain;
}

.lightbox {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.close-button {
  position: fixed;
  top: 30px;
  right: 30px;
  background: transparent;
  border: none;
  font-size: 2em;
  color: white;
  cursor: pointer;
}

.nav-button {
  background: transparent;
  border: none;
  font-size: 3em;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .image-item {
    flex: 1 0 calc(50% - 10px);
  }
}

@media (max-width: 480px) {
  .image-item {
    flex: 1 0 100%;
  }
}
</style>