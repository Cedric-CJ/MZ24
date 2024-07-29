<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Startseite</router-link></li>
          <li><router-link to="/galerie">Galerie</router-link></li>
          <li><router-link to="/leistungen">Leistungen</router-link></li>
          <li><router-link to="/impressum">Impressum</router-link></li>
        </ul>
      </nav>
      <img src="@/assets/Logo.gif" alt="Logo" class="logo">
    </header>
    <main>
      <h1>Impressum</h1>
      <div class="impressum-content">
        <div class="impressum-section">
          <p><strong>Betreiber und Domaininhaber:</strong></p>
          <p>Firma Metallbau Zigann<br>
            vertreten durch Inhaber:<br>
            Marco Zigann<br>
            An der Staatsreserve 2<br>
            15517 Fürstenwalde/Spree<br>
            Tel: <a href="tel:+491634227950">0163 / 42 27 950</a><br>
            E-Mail: <a href="mailto:info@mz24.net">info@mz24.net</a></p>
        </div>
        <div class="impressum-section">
          <p><strong>Rechtsform:</strong></p>
          <p>Einzelunternehmen</p>
        </div>
        <div class="impressum-section">
          <p><strong>Zuständige Behörde:</strong></p>
          <p>Handwerkskammer FFo<br>
            Bahnhofstr. 12<br>
            15230 Frankfurt (Oder)<br>
            Tel: <a href="tel:+4933556190">0335 5619-0</a><br>
            E-Mail: <a href="mailto:info@hwk-ff.de">info@hwk-ff.de</a></p>
        </div>
        <div class="impressum-section">
          <p><strong>Umsatzsteuer-Identifikationsnummer:</strong></p>
          <p>DE123456789</p>
        </div>
      </div>
      <div class="legal-notes">
        <h2>Wichtige rechtliche Hinweise:</h2>
        <p>Der Autor übernimmt keinerlei Gewähr für die Aktualität, Vollständigkeit, Qualität und Korrektheit der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung fehlerhafter und unvollständiger Informationen sowie Nichtnutzung der dargebotenen Informationen, verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.</p>

        <p>Nach dem Urteil vom 12. Mai 1998 – 312 O 85/98 – „Haftung für Links“ – hat das Landgericht Hamburg entschieden, dass man durch die Anbringung eines die Inhalte der gelinkten Seite (Weiterleitungen, etc.) mit zu verantworten hat. Dies kann (so das LG HH) nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert.</p>

        <p>Der Autor für diese Internetpräsenz mz24.net erklärt ausdrücklich, dass keinerlei Einfluss auf die Gestaltung und die Inhalte der gelinkten Seiten hat. Alle Marken- und Produktnamen sind Warenzeichen oder eingetragene Warenzeichen der jeweiligen Titelhalter.</p>

        <p>Sollte es vorkommen, dass Sie mit dem Inhalt einer der verlinkten URL nicht einverstanden sein sollten, bitte ich Sie diese uns umgehend zu Melden.</p>

        <h2>Datenschutz:</h2>
        <p>Innerhalb der mz24.net besteht die Möglichkeit der Eingabe persönlicher / geschäftlicher Daten (Namen, Telefon, E-Mail, usw.), so erfolgt die Angabe dieser Daten, auf seitens des Nutzers, ausdrücklich auf freiwilliger Basis. Die Inanspruchnahme aller angebotenen Dienste, soweit technisch möglich / zumutbar, auch ohne Angabe solcher Daten gestattet.<br>
          Die Nutzung der im Rahmen des Impressums veröffentlichten Daten (Telefon / Faxnummer, Postanschrift, E-Mail), die durch Dritte zur Übersendung von nicht ausdrücklich angeforderten Informationen sind nicht gestattet. Des Weiteren ist die Nutzung von Inhalten (Bilder, Texte, usw.) dieser Internetpräsenz mz24.net, durch Dritte, ohne Einverständnis des Inhabers (Betreiber, Domaininhaber) untersagt.<br>
          Rechtliche Schritte gegen die Versender von so genannten Spam- Mails, oder Nutzung von Inhalten, ohne Einverständnis, sind bei Verstößen gegen dieses Verbot ausdrücklich vorbehalten.</p>

        <h2>Rechtswirksamkeit dieses Haftungsausschlusses:</h2>
        <p>Dieser Haftungsausschluss ist als Teil der Internetpräsenz, mz24.net, zu betrachten. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Textes in Ihrem Inhalt und Ihrer Gültigkeit davon unberührt.</p>
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
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ImpressumPage'
};
window.addEventListener('scroll', () => {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});
</script>

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
  background-color: #333;
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
  padding: 35px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

main:hover {
  transform: translateY(-10px);
  background-color: #e5e5e5;
}

.impressum-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.impressum-section {
  width: 45%;
  text-align: left;
}

.legal-notes {
  text-align: left;
  margin-top: 20px;
}

footer {
  padding: 10px;
  background-color: #333;
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
}

.footer-right a {
  color: #9f9b9b;
  text-decoration: none;
}

.footer-right a:hover {
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

  .footer-right p {
    text-align: center;
  }

  .impressum-content {
    flex-direction: column;
    align-items: center;
  }

  .impressum-section {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .legal-notes {
    text-align: center;
  }
}
</style>