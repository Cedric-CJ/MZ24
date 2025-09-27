### Erstellt von Cedric visit my [GitHub](https://spezialcode.de/)
<template>
  <div class="container">
    <Header />
    <main>
      <h1>Galerie</h1>
      <div class="gallery">
        <div v-for="(categoryImages, categoryName) in images" :key="categoryName" class="category">
          <h2>{{ categoryName }}</h2>
          <div class="image-grid">
            <div v-for="(image, index) in categoryImages" :key="index" class="image-item">
              <component :is="image.slider ? 'BeforeAfterSlider' : 'img'" :src="image.src" :alt="image.alt" :before-src="image.beforeSrc" :after-src="image.afterSrc" @click.native="!image.slider && openLightbox(categoryName, index)" @click="image.slider && openLightbox(categoryName, index)"/>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="close-button" @click="closeLightbox">×</button>
        <div class="lightbox-content">
          <button v-if="hasMultipleImages" class="nav-button prev" @click.stop="prevImage">‹</button>
          <div class="lightbox-image">
            <img v-if="!currentImage.slider" :src="currentImage.src" :alt="currentImage.alt"/>
            <BeforeAfterSlider v-else :before-src="currentImage.beforeSrc" :after-src="currentImage.afterSrc"/>
          </div>
          <button v-if="hasMultipleImages" class="nav-button next" @click.stop="nextImage">›</button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
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
    Header,
    Footer,
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
    hasMultipleImages() {
      return this.currentCategory && this.images[this.currentCategory] && this.images[this.currentCategory].length > 1;
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
  flex: 1 0 calc(20% - 10px);
  box-sizing: border-box;
}

.image-item img {
  width: 100%;
  max-width: calc(50vw + 100px);
  max-height: calc(30vh + 50px);
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
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
}

/* Ensure any lightbox content (including BeforeAfterSlider) can scale large on desktop */
.lightbox .lightbox-image {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox .lightbox-image > * {
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.88);
  color: #111;
  border: 2px solid rgba(0,0,0,0.2);
  border-radius: 50%;
  width: clamp(40px, 4.2vh, 56px);
  height: clamp(40px, 4.2vh, 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(16px, 2.2vh, 24px);
  font-weight: 700;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  z-index: 10010;
  backdrop-filter: blur(2px);
  transition: transform 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}

.nav-button:hover,
.nav-button:focus-visible {
  background: rgba(255, 255, 255, 0.98);
  transform: translateY(-50%) scale(1.08);
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  outline: none;
}

.close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.88);
  color: #111;
  border: 2px solid rgba(0,0,0,0.2);
  border-radius: 50%;
  width: clamp(36px, 4.5vh, 56px);
  height: clamp(36px, 4.5vh, 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(18px, 3vh, 26px);
  font-weight: 800;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  z-index: 10020;
  transition: transform 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}

.close-button:hover,
.close-button:focus-visible {
  background: rgba(255, 255, 255, 0.98);
  transform: scale(1.08);
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  outline: none;
}

.nav-button.prev {
  left: 16px;
}

.nav-button.next {
  right: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .image-item {
    flex: 1 0 calc(50% - 10px);
  }
  .nav-button {
    width: clamp(44px, 5.2vh, 64px);
    height: clamp(44px, 5.2vh, 64px);
    font-size: clamp(18px, 2.6vh, 26px);
  }
  .close-button {
    width: clamp(40px, 5vh, 60px);
    height: clamp(40px, 5vh, 60px);
    font-size: clamp(18px, 2.6vh, 26px);
    top: 12px;
    right: 12px;
  }
}

@media (max-width: 480px) {
  .image-item {
    flex: 1 0 50%;
  }
  .nav-button {
    width: clamp(46px, 6vh, 70px);
    height: clamp(46px, 6vh, 70px);
    font-size: clamp(20px, 3vh, 28px);
  }
  .close-button {
    width: clamp(44px, 5.5vh, 66px);
    height: clamp(44px, 5.5vh, 66px);
    font-size: clamp(20px, 3vh, 28px);
  }
}

/* Desktop: größere Buttons und mehr Abstand von den Rändern */
@media (min-width: 1024px) {
  .nav-button {
    width: 64px;
    height: 64px;
    font-size: 28px;
  }
  .nav-button.prev { left: 24px; }
  .nav-button.next { right: 24px; }

  .close-button {
    width: 60px;
    height: 60px;
    font-size: 30px;
    top: 20px;
    right: 20px;
  }
}
</style>