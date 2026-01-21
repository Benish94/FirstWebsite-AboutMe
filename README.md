# 📚 Nuxt Mentoring Repository

Willkommen im Nuxt Mentoring-Repository!

---

## 👉 Projekt starten

Hier die wichtigsten Befehle:

```bash
# Installiere alle Abhängigkeiten
yarn install

# Starte die Entwicklungsumgebung
yarn dev

# Baue das Projekt für die Produktion (später wichtig)
yarn build

# Starte die gebaute App im Produktionsmodus (lokal)
yarn start
```

Falls du noch kein "yarn" installiert hast, kannst du es mit folgendem Befehl global installieren:

```bash
npm install --global yarn
```

---

## 🗂️ Wichtige Projektordner

Hier eine kurze Übersicht über die wichtigsten Verzeichnisse in einem Nuxt-Projekt:

### `/pages`
- Jede Datei in diesem Ordner wird automatisch eine Route.
- Beispiel: `pages/about.vue` ist erreichbar unter `/about`.
- Keine extra Router-Konfiguration notwendig!

### `/components`
- Hier liegen wiederverwendbare Bausteine wie Buttons, Karten, Modale usw.
- Komponenten sind keine eigenen Seiten, sondern werden innerhalb von Pages oder anderen Komponenten eingebunden.

### `/layouts`
- Hier kannst du wiederkehrende Strukturteile definieren, z. B. Navigation oder Footer.
- Layouts umschließen deine Seiten.
- Du kannst mehrere Layouts haben und pro Seite auswählen, welches Layout verwendet wird.

---

## 🔗 Nützliche Links

- [Nuxt Dokumentation](https://nuxt.com/docs)
- [NuxtUI Komponentenübersicht](https://ui.nuxt.com/components)

---

> 📣 Fragen sind jederzeit willkommen. Lernen heißt ausprobieren und Fehler machen!
