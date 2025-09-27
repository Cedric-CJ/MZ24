<!-- Erstellt von Cedric visit my https://spezialcode.de/ -->
<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">Startseite</RouterLink></li>
        <li><RouterLink to="/unternehmen">Über Uns</RouterLink></li>
        <li><RouterLink to="/galerie">Galerie</RouterLink></li>
        <li><RouterLink to="/leistungen">Leistungen</RouterLink></li>
      </ul>
    </nav>
    <img :src="logo" alt="Logo" class="logo" />
    <slot />
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/Logo.gif'
</script>

<style>
/* Absichtlich leer gelassen, damit bestehende globale Styles (z.B. in assets/style.css) greifen */
</style>
