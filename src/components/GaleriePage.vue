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
        <div class="gallery-category" v-for="(category, categoryName) in images" :key="categoryName">
          <h2>{{ categoryName }}</h2>
          <div class="gallery-row">
            <button
                class="nav-arrow prev"
                v-if="shouldShowArrows(categoryName)"
                @click="prevImage(categoryName)"
            >
              &#10094;
            </button>
            <div class="gallery-items">
              <div
                  class="gallery-item"
                  v-for="(image, index) in getVisibleImages(categoryName)"
                  :key="index"
              >
                <img
                    :src="image.src"
                    :alt="image.alt"
                    @click="openLightbox(categoryName, currentIndex[categoryName] + index)"
                />
              </div>
            </div>
            <button
                class="nav-arrow next"
                v-if="shouldShowArrows(categoryName)"
                @click="nextImage(categoryName)"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
      <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
        <img :src="currentImage.src" :alt="currentImage.alt" class="lightbox-image" />
        <button class="prev" @click.stop="prevImage('all')">Zurück</button>
        <button class="next" @click.stop="nextImage('all')">Weiter</button>
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
  data() {
    return {
      currentIndex: {
        Balkons: 0,
        Geländer: 0,
        'Türen, Tore, Treppen, Fenster': 0,
        Sonstiges: 0
      },
      images: {
        Balkons: [
          { src: BalkonVorher, alt: 'Balkon vorher' },
          { src: BalkonNachher, alt: 'Balkon nachher' },
          { src: Balkon1, alt: 'Balkon 1' },
          { src: Balkon2, alt: 'Balkon 2' }
        ],
        Geländer: [
          { src: Gelaender1, alt: 'Geländer 1' },
          { src: Gelaender2, alt: 'Geländer 2' },
          { src: Gelaender3, alt: 'Geländer 3' }
        ],
        'Türen, Tore, Treppen, Fenster': [
          { src: KellertuerVorher, alt: 'Kellertür vorher' },
          { src: KellertuerNachher, alt: 'Kellertür nachher' },
          { src: Treppe1, alt: 'Treppe 1' },
          { src: Tuer1, alt: 'Tür 1' },
          { src: Fenster1, alt: 'Fenster 1' },
          { src: Tor1, alt: 'Tor 1' },
          { src: Tor2, alt: 'Tor 2' },
          { src: Tor3, alt: 'Tor 3' },
          { src: Tor4, alt: 'Tor 4' }
        ],
        Sonstiges: [{ src: Sonstiges1, alt: 'Sonstiges 1' }]
      },
      isLightboxOpen: false,
      currentImageIndex: 0,
      currentCategory: ''
    };
  },
  computed: {
    allImages() {
      return Object.values(this.images).flat();
    },
    currentImage() {
      return this.allImages[this.currentImageIndex];
    }
  },
  methods: {
    getVisibleImages(category) {
      const images = this.images[category];
      const maxImages = window.innerWidth <= 768 ? 2 : 4;
      if (images.length <= maxImages) return images;

      const start = this.currentIndex[category];
      const end = start + maxImages;
      if (end <= images.length) return images.slice(start, end);

      return [...images.slice(start), ...images.slice(0, end - images.length)];
    },
    nextImage(category) {
      const maxImages = window.innerWidth <= 768 ? 2 : 4;
      if (category === 'all') {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.allImages.length;
      } else {
        this.currentIndex[category] = (this.currentIndex[category] + maxImages) % this.images[category].length;
      }
    },
    prevImage(category) {
      const maxImages = window.innerWidth <= 768 ? 2 : 4;
      if (category === 'all') {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.allImages.length) % this.allImages.length;
      } else {
        this.currentIndex[category] = (this.currentIndex[category] - maxImages + this.images[category].length) % this.images[category].length;
      }
    },
    openLightbox(category, index) {
      this.currentCategory = category;
      const categoryIndex = Object.keys(this.images).indexOf(category);
      const previousImagesCount = Object.values(this.images)
          .slice(0, categoryIndex)
          .reduce((acc, images) => acc + images.length, 0);
      this.currentImageIndex = previousImagesCount + index;
      this.isLightboxOpen = true;
      document.addEventListener('keydown', this.handleKeydown);
    },
    closeLightbox() {
      this.isLightboxOpen = false;
      document.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      } else if (event.key === 'ArrowRight') {
        this.nextImage('all');
      } else if (event.key === 'ArrowLeft') {
        this.prevImage('all');
      }
    },
    shouldShowArrows(category) {
      return window.innerWidth <= 768
          ? this.images[category].length > 2
          : this.images[category].length > 4;
    }
  }
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.gallery-category h2 {
  text-align: left;
  font-size: 1.2em;
  margin-left: 20px;
}

.gallery-category {
  margin-bottom: 40px;
}

.gallery-row {
  display: flex;
  align-items: center;
  position: relative;
}

.gallery-items {
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
}

.gallery-item {
  flex-shrink: 0;
  width: calc(25% - 20px);
  margin: 0 10px;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

.nav-arrow {
  background: none;
  border: none;
  font-size: 3em;
  color: #000000;
  cursor: pointer;
  user-select: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.nav-arrow.prev {
  left: 0;
}

.nav-arrow.next {
  right: 0;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-image {
  max-width: 90%;
  max-height: 80vh;
  border-radius: 10px;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  background: rgba(255, 255, 255, 0);
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.prev:hover,
.next:hover {
  background: rgba(255, 255, 255, 1);
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

  .gallery-item {
    width: 45%;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-left,
  .footer-right {
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

  .footer-right p {
    text-align: center;
  }
}
</style>