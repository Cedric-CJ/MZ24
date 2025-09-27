<!-- Erstellt von Cedric visit my https://spezialcode.de/ -->
<template>
  <footer class="site-footer">
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
      <RouterLink to="/impressum">Impressum</RouterLink>
      |
      <RouterLink to="/datenschutz">Datenschutz</RouterLink>
    </div>
    <slot />
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.site-footer { margin-top: auto; width: 100%; }
.footer-content{ display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap }
.footer-links{ text-align:center; margin-top: .5rem }
.footer-right a{ color: inherit }
</style>
