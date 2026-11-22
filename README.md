# Italienisch Wortschatz (PWA)

Installierbare Web-App zum Vokabellernen Italienisch ⇄ Deutsch. Reines HTML/CSS/JS, kein Build-Schritt, keine externen Abhängigkeiten.

- **Stöbern:** Wortgruppen mit Gegensatzpaaren (↔), farbigen Synonym-Clustern und Grammatik-Tabellen
- **Selbsttest:** Deutsch oder Italienisch verdecken, Antippen deckt auf
- **Karteikarten:** pro Gruppe, „Gewusst“/„Nochmal“, Fortschritt im Browser (localStorage)
- **Lernrichtung:** „Italienisch lernen“ (Oberfläche Deutsch) oder „Deutsch lernen“ (Oberfläche Italienisch, Nomen mit Artikel und Plural)
- **Niveau:** A1, A2, B1, B2 (zeigt alle Wörter bis einschließlich des gewählten Niveaus)
- **Vorlesen** per Web Speech API (it-IT bzw. de-DE), **offline** per Service Worker, Dark Mode

## Dateien
`index.html`, `styles.css`, `app.js`, `data.js` (alle Vokabeln, gut erweiterbar), `sw.js`, `manifest.webmanifest`, `icons/`

## Lokal testen
    python3 -m http.server 8080
    # dann http://localhost:8080/ öffnen

## Veröffentlichen (GitHub Pages)
Repository `italienisch-app` anlegen, pushen, unter Settings → Pages „Deploy from branch: main / root“ wählen.
Die App liegt dann unter `https://<user>.github.io/italienisch-app/`.
Auf dem iPhone in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

Nach Änderungen an Dateien in `sw.js` die `CACHE`-Version erhöhen.

## Lizenz

Frei für den privaten, nicht-kommerziellen Gebrauch. Details siehe [LICENSE](LICENSE).
