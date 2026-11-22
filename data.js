/*
 * Vokabeldaten für die App „Italienisch Wortschatz“ (zweisprachig: Italienisch ⇄ Deutsch).
 *
 * VOCAB.groups ist eine Liste von Gruppen:
 *   id, tab / heading / intro            – deutsche Oberfläche (Modus „Italienisch lernen“)
 *   tab_it / heading_it / intro_it        – italienische Oberfläche (Modus „Deutsch lernen“)
 *   blocks                                – die Wortblöcke (siehe unten)
 *   tables / tables_de                    – Grammatik-Tabellen je Modus
 *
 * Ein Eintrag (Wort) ist ein Objekt:
 *   { it: "la casa", de: "das Haus", pl: "die Häuser", note: "…", level: "A1" }
 *   it    – Italienisch (Nomen immer mit Artikel)
 *   de    – Deutsch (Nomen immer mit der/die/das)
 *   pl    – optional: deutscher Plural ("–" = kein Plural üblich)
 *   note  – optional: Hinweis zum Italienischen (wird nur im Modus „Italienisch lernen“ gezeigt)
 *   level – "A1" | "A2" | "B1" | "B2"; die App zeigt alle Einträge bis zum gewählten Niveau
 *
 * Block-Arten (kind):
 *   "words"    – Wortliste:                 items: [Eintrag, …]
 *   "pairs"    – Gegensatzpaare (↔ / sym):  items: [[Eintrag, Eintrag], …]
 *   "clusters" – farbige Synonym-Gruppen:   items: [{ label, label_it?, words: [Eintrag, …] }, …]
 *   "scale"    – Abstufung (immer → nie):   items: [Eintrag, …]
 *   Weitere Felder: title, title_it, note (de. Oberfläche), note_it (it. Oberfläche), sym, sym_de
 * Tabellen: { position: "before"|"after", level, title, columns, rows, note }
 *
 * Erweitern: Eintrag in einen Block schreiben oder neuen Block/neue Gruppe anhängen.
 * Danach in sw.js die CACHE-Version erhöhen, damit installierte Apps die neue Version laden.
 */
window.VOCAB = {
  version: 2,
  levels: ["A1", "A2", "B1", "B2"],
  groups: [
    {
      id: "zeit",
      tab: "Zeit",
      heading: "1 · Zeit: Jahreszeiten, Monate, Tage",
      intro: "Monate und Wochentage schreibt man im Italienischen klein.",
      blocks: [
        {
          kind: "words",
          title: "Jahreszeiten (le stagioni)",
          items: [
            { it: "la primavera", de: "der Frühling", pl: "die Frühlinge", level: "A1" },
            { it: "l'estate", de: "der Sommer", note: "feminin!", pl: "die Sommer", level: "A1" },
            { it: "l'autunno", de: "der Herbst", note: "maskulin", pl: "die Herbste", level: "A1" },
            { it: "l'inverno", de: "der Winter", pl: "die Winter", level: "A1" }
          ],
          title_it: "Le stagioni (die Jahreszeiten)"
        },
        {
          kind: "pairs",
          title: "Gegensätze der Zeit",
          items: [
            [
              { it: "l'estate", de: "der Sommer", pl: "die Sommer", level: "A1" },
              { it: "l'inverno", de: "der Winter", pl: "die Winter", level: "A1" }
            ],
            [
              { it: "la primavera", de: "der Frühling", pl: "die Frühlinge", level: "A1" },
              { it: "l'autunno", de: "der Herbst", pl: "die Herbste", level: "A1" }
            ],
            [
              { it: "il giorno", de: "der Tag", pl: "die Tage", level: "A1" },
              { it: "la notte", de: "die Nacht", pl: "die Nächte", level: "A1" }
            ],
            [
              { it: "la mattina", de: "der Morgen", pl: "die Morgen", level: "A1" },
              { it: "la sera", de: "der Abend", pl: "die Abende", level: "A1" }
            ],
            [
              { it: "l'inizio", de: "der Anfang", pl: "die Anfänge", level: "A2" },
              { it: "la fine", de: "das Ende", pl: "die Enden", level: "A2" }
            ]
          ],
          title_it: "Contrari del tempo"
        },
        {
          kind: "words",
          title: "Monate (i mesi)",
          note: "Alle maskulin. a gennaio / in gennaio = im Januar.",
          items: [
            { it: "gennaio", de: "der Januar", pl: "–", level: "A1" },
            { it: "febbraio", de: "der Februar", pl: "–", level: "A1" },
            { it: "marzo", de: "der März", pl: "–", level: "A1" },
            { it: "aprile", de: "der April", pl: "–", level: "A1" },
            { it: "maggio", de: "der Mai", pl: "–", level: "A1" },
            { it: "giugno", de: "der Juni", pl: "–", level: "A1" },
            { it: "luglio", de: "der Juli", pl: "–", level: "A1" },
            { it: "agosto", de: "der August", pl: "–", level: "A1" },
            { it: "settembre", de: "der September", pl: "–", level: "A1" },
            { it: "ottobre", de: "der Oktober", pl: "–", level: "A1" },
            { it: "novembre", de: "der November", pl: "–", level: "A1" },
            { it: "dicembre", de: "der Dezember", pl: "–", level: "A1" }
          ],
          title_it: "I mesi (die Monate)",
          note_it: "am Montag = lunedì; im Januar = a gennaio; montags = il lunedì (ogni lunedì)."
        },
        {
          kind: "words",
          title: "Wochentage (i giorni della settimana)",
          note: "lunedì = am Montag; il lunedì = montags (jeden Montag). Nur la domenica ist feminin.",
          items: [
            { it: "lunedì", de: "der Montag", pl: "die Montage", level: "A1" },
            { it: "martedì", de: "der Dienstag", pl: "die Dienstage", level: "A1" },
            { it: "mercoledì", de: "der Mittwoch", pl: "die Mittwoche", level: "A1" },
            { it: "giovedì", de: "der Donnerstag", pl: "die Donnerstage", level: "A1" },
            { it: "venerdì", de: "der Freitag", pl: "die Freitage", level: "A1" },
            { it: "sabato", de: "der Samstag", pl: "die Samstage", level: "A1" },
            { it: "domenica", de: "der Sonntag", note: "la domenica", pl: "die Sonntage", level: "A1" },
            { it: "il fine settimana", de: "das Wochenende", note: "auch: il weekend", pl: "die Wochenenden", level: "A1" }
          ],
          title_it: "I giorni della settimana (die Wochentage)",
          note_it: "am Montag = lunedì; montags = il lunedì (ogni lunedì)."
        },
        {
          kind: "words",
          title: "Tageszeiten",
          items: [
            { it: "la mattina", de: "der Morgen, Vormittag", note: "auch: il mattino", pl: "die Morgen, die Vormittage", level: "A1" },
            { it: "il mezzogiorno", de: "der Mittag (12 Uhr)", pl: "die Mittage", level: "A1" },
            { it: "il pomeriggio", de: "der Nachmittag", pl: "die Nachmittage", level: "A1" },
            { it: "la sera", de: "der Abend", pl: "die Abende", level: "A1" },
            { it: "la notte", de: "die Nacht", pl: "die Nächte", level: "A1" },
            { it: "la mezzanotte", de: "die Mitternacht", pl: "–", level: "A2" }
          ],
          title_it: "Le parti del giorno"
        },
        {
          kind: "words",
          title: "Zeiteinheiten",
          items: [
            { it: "il secondo", de: "die Sekunde", pl: "die Sekunden", level: "A2" },
            { it: "il minuto", de: "die Minute", pl: "die Minuten", level: "A1" },
            { it: "l'ora", de: "die Stunde", note: "feminin", pl: "die Stunden", level: "A1" },
            { it: "il giorno", de: "der Tag", pl: "die Tage", level: "A1" },
            { it: "la settimana", de: "die Woche", pl: "die Wochen", level: "A1" },
            { it: "il mese", de: "der Monat", pl: "die Monate", level: "A1" },
            { it: "l'anno", de: "das Jahr", note: "maskulin", pl: "die Jahre", level: "A1" }
          ],
          title_it: "Le unità di tempo"
        },
        {
          kind: "pairs",
          title: "Gegensätze der Zeit (B1–B2)",
          title_it: "Contrari del tempo (B1–B2)",
          items: [
            [
              { it: "l'alba", de: "der Sonnenaufgang", note: "feminin", pl: "die Sonnenaufgänge", level: "B1" },
              { it: "il tramonto", de: "der Sonnenuntergang", pl: "die Sonnenuntergänge", level: "B1" }
            ],
            [
              { it: "il passato", de: "die Vergangenheit", pl: "–", level: "B1" },
              { it: "il futuro", de: "die Zukunft", pl: "–", level: "B1" }
            ],
            [
              { it: "in anticipo", de: "zu früh, im Voraus", level: "B1" },
              { it: "in ritardo", de: "zu spät, verspätet", level: "B1" }
            ],
            [
              { it: "a breve termine", de: "kurzfristig", level: "B2" },
              { it: "a lungo termine", de: "langfristig", level: "B2" }
            ],
            [
              { it: "temporaneo", de: "vorübergehend", level: "B2" },
              { it: "definitivo", de: "endgültig", level: "B2" }
            ]
          ]
        },
        {
          kind: "words",
          title: "Zeitausdrücke B1",
          title_it: "Espressioni di tempo B1",
          items: [
            { it: "il secolo", de: "das Jahrhundert", pl: "die Jahrhunderte", level: "B1" },
            { it: "il decennio", de: "das Jahrzehnt", pl: "die Jahrzehnte", level: "B1" },
            { it: "l'epoca", de: "die Epoche", note: "feminin, Pl. le epoche", pl: "die Epochen", level: "B1" },
            { it: "il presente", de: "die Gegenwart", pl: "–", level: "B1" },
            { it: "le ferie", de: "der Urlaub (vom Job)", note: "nur Plural: andare in ferie", pl: "die Urlaube", level: "B1" },
            { it: "il giorno festivo", de: "der Feiertag", pl: "die Feiertage", level: "B1" },
            { it: "il giorno feriale", de: "der Werktag", pl: "die Werktage", level: "B1" },
            { it: "nel frattempo", de: "inzwischen, in der Zwischenzeit", level: "B1" },
            { it: "di recente", de: "kürzlich, neulich", level: "B1" },
            { it: "ormai", de: "inzwischen, nunmehr", level: "B1" },
            { it: "appena", de: "gerade (eben), sobald", level: "B1" },
            { it: "fra (una settimana)", de: "in (einer Woche)", level: "B1" }
          ]
        },
        {
          kind: "words",
          title: "Zeitausdrücke B2",
          title_it: "Espressioni di tempo B2",
          items: [
            { it: "la scadenza", de: "die Frist, der Ablauf", pl: "die Fristen", level: "B2" },
            { it: "il lasso di tempo", de: "die Zeitspanne", pl: "die Zeitspannen", level: "B2" },
            { it: "la ricorrenza", de: "der Jahrestag, Gedenktag", pl: "die Jahrestage", level: "B2" },
            { it: "la vigilia", de: "der Vorabend", note: "la vigilia di Natale = Heiligabend", pl: "die Vorabende", level: "B2" },
            { it: "imminente", de: "bevorstehend", level: "B2" },
            { it: "tuttora", de: "noch immer, nach wie vor", level: "B2" },
            { it: "nel corso di", de: "im Laufe von", level: "B2" },
            { it: "d'ora in poi", de: "von nun an", level: "B2" },
            { it: "a lungo", de: "lange", level: "B2" },
            { it: "man mano che", de: "in dem Maße, wie; nach und nach", level: "B2" }
          ]
        }
      ],
      tab_it: "Tempo",
      heading_it: "1 · Il tempo: stagioni, mesi, giorni",
      intro_it: "In tedesco mesi, giorni e stagioni sono tutti maschili (der Montag, der Januar, der Sommer). Tutti i sostantivi si scrivono con la maiuscola."
    },
    {
      id: "zahlen",
      tab: "Zahlen",
      heading: "2 · Zahlen",
      intro: "Bei 21, 28, 31, 38 … fällt der Endvokal des Zehners weg: ventuno, ventotto. Auf -tré kommt ein Akzent: ventitré.",
      blocks: [
        {
          kind: "words",
          title: "0 bis 20",
          items: [
            { it: "zero", de: "0", level: "A1" },
            { it: "uno", de: "1", level: "A1" },
            { it: "due", de: "2", level: "A1" },
            { it: "tre", de: "3", level: "A1" },
            { it: "quattro", de: "4", level: "A1" },
            { it: "cinque", de: "5", level: "A1" },
            { it: "sei", de: "6", level: "A1" },
            { it: "sette", de: "7", level: "A1" },
            { it: "otto", de: "8", level: "A1" },
            { it: "nove", de: "9", level: "A1" },
            { it: "dieci", de: "10", level: "A1" },
            { it: "undici", de: "11", level: "A1" },
            { it: "dodici", de: "12", level: "A1" },
            { it: "tredici", de: "13", level: "A1" },
            { it: "quattordici", de: "14", level: "A1" },
            { it: "quindici", de: "15", level: "A1" },
            { it: "sedici", de: "16", level: "A1" },
            { it: "diciassette", de: "17", level: "A1" },
            { it: "diciotto", de: "18", level: "A1" },
            { it: "diciannove", de: "19", level: "A1" },
            { it: "venti", de: "20", level: "A1" }
          ],
          title_it: "Da 0 a 20"
        },
        {
          kind: "words",
          title: "Zehner bis 100, dann 1000",
          items: [
            { it: "dieci", de: "10", level: "A1" },
            { it: "venti", de: "20", level: "A1" },
            { it: "trenta", de: "30", level: "A1" },
            { it: "quaranta", de: "40", level: "A1" },
            { it: "cinquanta", de: "50", level: "A1" },
            { it: "sessanta", de: "60", level: "A1" },
            { it: "settanta", de: "70", level: "A1" },
            { it: "ottanta", de: "80", level: "A1" },
            { it: "novanta", de: "90", level: "A1" },
            { it: "cento", de: "100", note: "200 = duecento", level: "A1" },
            { it: "mille", de: "1000", note: "2000 = duemila", level: "A1" },
            { it: "un milione", de: "1 000 000", level: "A2" }
          ],
          title_it: "Decine fino a 100, poi 1000"
        },
        {
          kind: "words",
          title: "Beispiele zusammengesetzt",
          items: [
            { it: "ventuno", de: "21", level: "A1" },
            { it: "ventitré", de: "23", level: "A1" },
            { it: "ventotto", de: "28", level: "A1" },
            { it: "trentacinque", de: "35", level: "A1" },
            { it: "novantanove", de: "99", level: "A1" },
            { it: "centouno", de: "101", level: "A2" },
            { it: "duemilaventisei", de: "2026", level: "A2" }
          ],
          title_it: "Esempi composti"
        },
        {
          kind: "words",
          title: "Ordnungszahlen 1. bis 10.",
          note: "Sie passen sich an: il primo giorno, la prima volta. Datum: il primo maggio, sonst Grundzahl: il due maggio.",
          items: [
            { it: "primo", de: "1. erster", level: "A2" },
            { it: "secondo", de: "2. zweiter", level: "A2" },
            { it: "terzo", de: "3. dritter", level: "A2" },
            { it: "quarto", de: "4. vierter", level: "A2" },
            { it: "quinto", de: "5. fünfter", level: "A2" },
            { it: "sesto", de: "6. sechster", level: "A2" },
            { it: "settimo", de: "7. siebter", level: "A2" },
            { it: "ottavo", de: "8. achter", level: "A2" },
            { it: "nono", de: "9. neunter", level: "A2" },
            { it: "decimo", de: "10. zehnter", level: "A2" }
          ],
          title_it: "Numeri ordinali dal 1° al 10°",
          note_it: "Gli ordinali si scrivono con il punto: der 1. Mai = der erste Mai."
        },
        {
          kind: "words",
          title: "Mengen und Brüche B1",
          title_it: "Quantità e frazioni B1",
          note: "centinaio und migliaio haben unregelmäßige Plurale: le centinaia, le migliaia.",
          items: [
            { it: "la metà", de: "die Hälfte", pl: "die Hälften", level: "B1" },
            { it: "un terzo", de: "ein Drittel", note: "il terzo", pl: "die Drittel", level: "B1" },
            { it: "un quarto", de: "ein Viertel", pl: "die Viertel", level: "B1" },
            { it: "il doppio", de: "das Doppelte", pl: "–", level: "B1" },
            { it: "una decina", de: "etwa zehn", level: "B1" },
            { it: "una dozzina", de: "ein Dutzend", pl: "die Dutzende", level: "B1" },
            { it: "un centinaio", de: "etwa hundert", note: "Pl. le centinaia", level: "B1" },
            { it: "un migliaio", de: "etwa tausend", note: "Pl. le migliaia", level: "B1" },
            { it: "per cento", de: "Prozent", note: "il 20 per cento = 20 Prozent", level: "B1" },
            { it: "un miliardo", de: "eine Milliarde", pl: "die Milliarden", level: "B1" }
          ]
        },
        {
          kind: "pairs",
          title: "Zahlenbegriffe B2",
          title_it: "Termini numerici B2",
          items: [
            [
              { it: "il numero pari", de: "die gerade Zahl", pl: "die geraden Zahlen", level: "B2" },
              { it: "il numero dispari", de: "die ungerade Zahl", pl: "die ungeraden Zahlen", level: "B2" }
            ],
            [
              { it: "il massimo", de: "das Maximum", pl: "die Maxima", level: "B2" },
              { it: "il minimo", de: "das Minimum", pl: "die Minima", level: "B2" }
            ],
            [
              { it: "la somma", de: "die Summe", pl: "die Summen", level: "B2" },
              { it: "la differenza", de: "die Differenz, der Unterschied", pl: "die Differenzen", level: "B2" }
            ]
          ]
        },
        {
          kind: "words",
          title: "Statistik B2",
          title_it: "Statistica B2",
          items: [
            { it: "la percentuale", de: "der Prozentsatz, der Anteil", pl: "die Prozentsätze", level: "B2" },
            { it: "la media", de: "der Durchschnitt", note: "in media = im Durchschnitt", pl: "die Durchschnitte", level: "B2" },
            { it: "la cifra", de: "die Ziffer; der Betrag", pl: "die Ziffern", level: "B2" },
            { it: "il calcolo", de: "die Berechnung", pl: "die Berechnungen", level: "B2" },
            { it: "circa", de: "ungefähr, circa", level: "B2" },
            { it: "all'incirca", de: "ungefähr", level: "B2" }
          ]
        }
      ],
      tab_it: "Numeri",
      heading_it: "2 · I numeri",
      intro_it: "In tedesco l'unità si dice prima della decina: 21 = einundzwanzig (letteralmente: uno-e-venti). I numeri fino a un milione si scrivono attaccati."
    },
    {
      id: "adjektive",
      tab: "Adjektive",
      heading: "3 · Adjektive und Farben",
      intro: "Adjektive auf -o haben vier Formen (piccolo, piccola, piccoli, piccole), Adjektive auf -e nur zwei (grande, grandi).",
      blocks: [
        {
          kind: "pairs",
          title: "Gegensätze: Größe und Form",
          items: [
            [
              { it: "grande", de: "groß", level: "A1" },
              { it: "piccolo", de: "klein", level: "A1" }
            ],
            [
              { it: "alto", de: "hoch, groß (Person)", level: "A1" },
              { it: "basso", de: "niedrig, klein (Person)", level: "A1" }
            ],
            [
              { it: "lungo", de: "lang", level: "A1" },
              { it: "corto", de: "kurz", level: "A1" }
            ],
            [
              { it: "largo", de: "breit, weit", note: "falscher Freund: nicht lang!", level: "A2" },
              { it: "stretto", de: "eng, schmal", level: "A2" }
            ],
            [
              { it: "grasso", de: "dick (Person)", note: "höflicher: robusto", level: "A1" },
              { it: "magro", de: "dünn, mager", note: "schlank: snello", level: "A1" }
            ],
            [
              { it: "spesso", de: "dick (Dinge)", note: "un libro spesso; spesso heißt auch oft", level: "A2" },
              { it: "sottile", de: "dünn (Dinge)", level: "A2" }
            ],
            [
              { it: "pesante", de: "schwer", level: "A2" },
              { it: "leggero", de: "leicht", level: "A2" }
            ]
          ],
          title_it: "Contrari: grandezza e forma"
        },
        {
          kind: "pairs",
          title: "Gegensätze: Dinge und Zustände",
          items: [
            [
              { it: "vecchio", de: "alt", level: "A1" },
              { it: "nuovo", de: "neu", level: "A1" }
            ],
            [
              { it: "caldo", de: "warm, heiß", level: "A1" },
              { it: "freddo", de: "kalt", level: "A1" }
            ],
            [
              { it: "pieno", de: "voll", level: "A2" },
              { it: "vuoto", de: "leer", level: "A2" }
            ],
            [
              { it: "caro", de: "teuer", level: "A1" },
              { it: "economico", de: "billig, günstig", level: "A1" }
            ],
            [
              { it: "aperto", de: "offen", level: "A1" },
              { it: "chiuso", de: "geschlossen", level: "A1" }
            ],
            [
              { it: "pulito", de: "sauber", level: "A2" },
              { it: "sporco", de: "schmutzig", level: "A2" }
            ],
            [
              { it: "chiaro", de: "hell", level: "A2" },
              { it: "scuro", de: "dunkel", level: "A2" }
            ],
            [
              { it: "duro", de: "hart", level: "A2" },
              { it: "morbido", de: "weich", level: "A2" }
            ],
            [
              { it: "veloce", de: "schnell", level: "A2" },
              { it: "lento", de: "langsam", level: "A2" }
            ],
            [
              { it: "facile", de: "leicht, einfach", level: "A2" },
              { it: "difficile", de: "schwer, schwierig", level: "A2" }
            ],
            [
              { it: "giusto", de: "richtig", level: "A2" },
              { it: "sbagliato", de: "falsch", level: "A2" }
            ],
            [
              { it: "libero", de: "frei", level: "A2" },
              { it: "occupato", de: "besetzt, beschäftigt", level: "A2" }
            ]
          ],
          title_it: "Contrari: cose e stati"
        },
        {
          kind: "pairs",
          title: "Gegensätze: Menschen und Bewertung",
          items: [
            [
              { it: "giovane", de: "jung", level: "A1" },
              { it: "vecchio", de: "alt", level: "A1" }
            ],
            [
              { it: "bello", de: "schön", level: "A1" },
              { it: "brutto", de: "hässlich", level: "A1" }
            ],
            [
              { it: "buono", de: "gut", level: "A1" },
              { it: "cattivo", de: "schlecht, böse", level: "A1" }
            ],
            [
              { it: "ricco", de: "reich", level: "A2" },
              { it: "povero", de: "arm", level: "A2" }
            ],
            [
              { it: "forte", de: "stark", level: "A2" },
              { it: "debole", de: "schwach", level: "A2" }
            ],
            [
              { it: "felice", de: "glücklich", level: "A1" },
              { it: "triste", de: "traurig", level: "A1" }
            ],
            [
              { it: "simpatico", de: "sympathisch, nett", level: "A2" },
              { it: "antipatico", de: "unsympathisch", level: "A2" }
            ],
            [
              { it: "gentile", de: "freundlich, höflich", level: "A2" },
              { it: "scortese", de: "unhöflich", level: "A2" }
            ],
            [
              { it: "sano", de: "gesund", level: "A2" },
              { it: "malato", de: "krank", level: "A2" }
            ],
            [
              { it: "riposato", de: "ausgeruht", level: "A2" },
              { it: "stanco", de: "müde", level: "A2" }
            ]
          ],
          title_it: "Contrari: persone e giudizi"
        },
        {
          kind: "clusters",
          title: "Ähnliche Bedeutungen",
          note: "Gleiche Farbe = ähnliche Bedeutung. Die Abstufung lernst du gleich mit.",
          items: [
            {
              label: "≈ schön",
              words: [
                { it: "bello", de: "schön", level: "A2" },
                { it: "carino", de: "hübsch, nett", level: "A2" },
                { it: "stupendo", de: "wunderschön", level: "A2" },
                { it: "meraviglioso", de: "wunderbar", level: "A2" }
              ]
            },
            {
              label: "≈ gut",
              words: [
                { it: "buono", de: "gut (v. a. Essen)", level: "A2" },
                { it: "bravo", de: "tüchtig, gut in etwas", level: "A2" },
                { it: "ottimo", de: "ausgezeichnet", level: "A2" }
              ]
            },
            {
              label: "≈ schlecht",
              words: [
                { it: "cattivo", de: "schlecht, böse", level: "A2" },
                { it: "brutto", de: "hässlich, übel", level: "A2" },
                { it: "pessimo", de: "sehr schlecht", level: "A2" }
              ]
            },
            {
              label: "≈ groß",
              words: [
                { it: "grande", de: "groß", level: "A2" },
                { it: "enorme", de: "riesig", level: "A2" },
                { it: "alto", de: "groß gewachsen", level: "A2" }
              ]
            },
            {
              label: "≈ klein",
              words: [
                { it: "piccolo", de: "klein", level: "A2" },
                { it: "minuscolo", de: "winzig", level: "A2" },
                { it: "basso", de: "klein gewachsen", level: "A2" }
              ]
            },
            {
              label: "≈ froh",
              words: [
                { it: "felice", de: "glücklich", level: "A2" },
                { it: "contento", de: "zufrieden, froh", level: "A2" },
                { it: "allegro", de: "fröhlich", level: "A2" }
              ]
            },
            {
              label: "≈ schnell",
              words: [
                { it: "veloce", de: "schnell", level: "A2" },
                { it: "rapido", de: "rasch", level: "A2" }
              ]
            },
            {
              label: "≈ klug",
              words: [
                { it: "intelligente", de: "intelligent", level: "A2" },
                { it: "furbo", de: "schlau, gerissen", level: "A2" },
                { it: "in gamba", de: "fähig, auf Zack", level: "A2" }
              ]
            }
          ],
          title_it: "Significati simili",
          note_it: "Stesso colore = significato simile."
        },
        {
          kind: "words",
          title: "Farben (i colori)",
          note: "blu, rosa und viola sind unveränderlich: le scarpe blu. Hell/dunkel: verde chiaro, blu scuro.",
          items: [
            { it: "rosso", de: "rot", level: "A1" },
            { it: "arancione", de: "orange", level: "A2" },
            { it: "giallo", de: "gelb", level: "A1" },
            { it: "verde", de: "grün", level: "A1" },
            { it: "azzurro", de: "hellblau, himmelblau", level: "A2" },
            { it: "blu", de: "blau", note: "unveränderlich", level: "A1" },
            { it: "viola", de: "lila", note: "unveränderlich", level: "A2" },
            { it: "rosa", de: "rosa", note: "unveränderlich", level: "A1" },
            { it: "marrone", de: "braun", level: "A2" },
            { it: "grigio", de: "grau", level: "A2" },
            { it: "nero", de: "schwarz", level: "A1" },
            { it: "bianco", de: "weiß", level: "A1" }
          ],
          title_it: "I colori (die Farben)"
        },
        {
          kind: "pairs",
          title: "Gegensätze B1",
          title_it: "Contrari B1",
          items: [
            [
              { it: "possibile", de: "möglich", level: "B1" },
              { it: "impossibile", de: "unmöglich", level: "B1" }
            ],
            [
              { it: "utile", de: "nützlich", level: "B1" },
              { it: "inutile", de: "nutzlos", level: "B1" }
            ],
            [
              { it: "sicuro", de: "sicher", level: "B1" },
              { it: "pericoloso", de: "gefährlich", level: "B1" }
            ],
            [
              { it: "tranquillo", de: "ruhig", level: "B1" },
              { it: "rumoroso", de: "laut", level: "B1" }
            ],
            [
              { it: "interessante", de: "interessant", level: "B1" },
              { it: "noioso", de: "langweilig", level: "B1" }
            ],
            [
              { it: "importante", de: "wichtig", level: "B1" },
              { it: "secondario", de: "nebensächlich", level: "B1" }
            ],
            [
              { it: "onesto", de: "ehrlich", level: "B1" },
              { it: "disonesto", de: "unehrlich", level: "B1" }
            ],
            [
              { it: "generoso", de: "großzügig", level: "B1" },
              { it: "avaro", de: "geizig", level: "B1" }
            ],
            [
              { it: "coraggioso", de: "mutig", level: "B1" },
              { it: "pauroso", de: "ängstlich", level: "B1" }
            ],
            [
              { it: "ottimista", de: "optimistisch", note: "il/la, Pl. ottimisti/-e", level: "B1" },
              { it: "pessimista", de: "pessimistisch", level: "B1" }
            ],
            [
              { it: "preoccupato", de: "besorgt", level: "B1" },
              { it: "sereno", de: "gelassen, heiter", level: "B1" }
            ],
            [
              { it: "normale", de: "normal", level: "B1" },
              { it: "strano", de: "seltsam, komisch", level: "B1" }
            ]
          ]
        },
        {
          kind: "words",
          title: "Charakter B1",
          title_it: "Carattere B1",
          items: [
            { it: "affidabile", de: "zuverlässig", level: "B1" },
            { it: "curioso", de: "neugierig", level: "B1" },
            { it: "timido", de: "schüchtern", level: "B1" },
            { it: "pigro", de: "faul", level: "B1" },
            { it: "testardo", de: "stur", level: "B1" },
            { it: "geloso", de: "eifersüchtig", level: "B1" },
            { it: "orgoglioso", de: "stolz", level: "B1" },
            { it: "educato", de: "höflich, wohlerzogen", note: "falscher Freund: nicht gebildet!", level: "B1" },
            { it: "paziente", de: "geduldig", level: "B1" },
            { it: "nervoso", de: "nervös, gereizt", level: "B1" }
          ]
        },
        {
          kind: "pairs",
          title: "Gegensätze B2: abstrakt",
          title_it: "Contrari B2: astratti",
          items: [
            [
              { it: "concreto", de: "konkret", level: "B2" },
              { it: "astratto", de: "abstrakt", level: "B2" }
            ],
            [
              { it: "complesso", de: "komplex", level: "B2" },
              { it: "elementare", de: "grundlegend, elementar", level: "B2" }
            ],
            [
              { it: "efficace", de: "wirksam", level: "B2" },
              { it: "inefficace", de: "unwirksam", level: "B2" }
            ],
            [
              { it: "permanente", de: "dauerhaft", level: "B2" },
              { it: "provvisorio", de: "vorläufig", level: "B2" }
            ],
            [
              { it: "esplicito", de: "ausdrücklich", level: "B2" },
              { it: "implicito", de: "unausgesprochen, implizit", level: "B2" }
            ],
            [
              { it: "profondo", de: "tief, tiefgründig", level: "B2" },
              { it: "superficiale", de: "oberflächlich", level: "B2" }
            ],
            [
              { it: "flessibile", de: "flexibel", level: "B2" },
              { it: "rigido", de: "starr, streng", level: "B2" }
            ],
            [
              { it: "vantaggioso", de: "vorteilhaft", level: "B2" },
              { it: "svantaggioso", de: "nachteilig", level: "B2" }
            ],
            [
              { it: "attuale", de: "aktuell", note: "falscher Freund: nicht tatsächlich!", level: "B2" },
              { it: "superato", de: "überholt", level: "B2" }
            ]
          ]
        },
        {
          kind: "clusters",
          title: "Ähnliche Bedeutungen B1–B2",
          title_it: "Significati simili B1–B2",
          note: "Gleiche Farbe = ähnliche Bedeutung.",
          note_it: "Stesso colore = significato simile.",
          items: [
            {
              label: "≈ wichtig",
              words: [
                { it: "importante", de: "wichtig", level: "B1" },
                { it: "fondamentale", de: "grundlegend", level: "B1" },
                { it: "essenziale", de: "wesentlich", level: "B1" }
              ]
            },
            {
              label: "≈ seltsam",
              words: [
                { it: "strano", de: "seltsam", level: "B1" },
                { it: "insolito", de: "ungewöhnlich", level: "B1" },
                { it: "bizzarro", de: "bizarr, sonderbar", level: "B1" }
              ]
            },
            {
              label: "≈ offensichtlich",
              words: [
                { it: "evidente", de: "offensichtlich", level: "B2" },
                { it: "ovvio", de: "selbstverständlich", level: "B2" },
                { it: "palese", de: "offenkundig", level: "B2" }
              ]
            },
            {
              label: "≈ vernünftig",
              words: [
                { it: "ragionevole", de: "vernünftig", level: "B2" },
                { it: "sensato", de: "sinnvoll", level: "B2" },
                { it: "saggio", de: "weise", level: "B2" }
              ]
            },
            {
              label: "≈ empfindlich",
              words: [
                { it: "sensibile", de: "sensibel, empfindsam", level: "B2" },
                { it: "permaloso", de: "leicht beleidigt", level: "B2" },
                { it: "suscettibile", de: "reizbar", level: "B2" }
              ]
            }
          ]
        },
        {
          kind: "words",
          title: "Charakter B2",
          title_it: "Carattere B2",
          items: [
            { it: "ambizioso", de: "ehrgeizig", level: "B2" },
            { it: "presuntuoso", de: "überheblich", level: "B2" },
            { it: "lungimirante", de: "weitsichtig", level: "B2" },
            { it: "coerente", de: "konsequent, folgerichtig", level: "B2" },
            { it: "ipocrita", de: "heuchlerisch", note: "il/la ipocrita", level: "B2" },
            { it: "altruista", de: "selbstlos", level: "B2" },
            { it: "egoista", de: "egoistisch", level: "B2" },
            { it: "intraprendente", de: "unternehmungslustig", level: "B2" }
          ]
        }
      ],
      tab_it: "Aggettivi",
      heading_it: "3 · Aggettivi e colori",
      intro_it: "Dopo sein l'aggettivo non cambia: Das Haus ist groß. Davanti al sostantivo prende una desinenza: ein großes Haus, die große Stadt."
    },
    {
      id: "verben",
      tab: "Verben",
      heading: "4 · Verben",
      intro: "Drei Gruppen nach der Endung: -are, -ere, -ire. Einige -ire-Verben schieben -isc- ein (capire → capisco). Die Konjugationstabellen stehen unten.",
      blocks: [
        {
          kind: "pairs",
          title: "Gegensatzpaare",
          items: [
            [
              { it: "andare", de: "gehen, fahren", note: "unregelmäßig", level: "A1" },
              { it: "venire", de: "kommen", note: "unregelmäßig", level: "A1" }
            ],
            [
              { it: "aprire", de: "öffnen", level: "A1" },
              { it: "chiudere", de: "schließen", level: "A1" }
            ],
            [
              { it: "comprare", de: "kaufen", level: "A2" },
              { it: "vendere", de: "verkaufen", level: "A2" }
            ],
            [
              { it: "entrare", de: "hineingehen", level: "A1" },
              { it: "uscire", de: "hinausgehen, ausgehen", note: "unregelmäßig", level: "A1" }
            ],
            [
              { it: "cominciare", de: "anfangen", level: "A1" },
              { it: "finire", de: "beenden, aufhören", note: "-isc-: finisco", level: "A1" }
            ],
            [
              { it: "partire", de: "abfahren", level: "A1" },
              { it: "arrivare", de: "ankommen", level: "A1" }
            ],
            [
              { it: "salire", de: "einsteigen, hinaufgehen", level: "A2" },
              { it: "scendere", de: "aussteigen, hinuntergehen", level: "A2" }
            ],
            [
              { it: "dare", de: "geben", level: "A1" },
              { it: "prendere", de: "nehmen", level: "A1" }
            ],
            [
              { it: "chiedere", de: "fragen", level: "A1" },
              { it: "rispondere", de: "antworten", level: "A1" }
            ],
            [
              { it: "insegnare", de: "lehren, unterrichten", level: "A2" },
              { it: "imparare", de: "lernen", level: "A2" }
            ],
            [
              { it: "ricordare", de: "sich erinnern", level: "A2" },
              { it: "dimenticare", de: "vergessen", level: "A2" }
            ],
            [
              { it: "vincere", de: "gewinnen", level: "A2" },
              { it: "perdere", de: "verlieren", level: "A2" }
            ],
            [
              { it: "accendere", de: "einschalten", level: "A2" },
              { it: "spegnere", de: "ausschalten", level: "A2" }
            ],
            [
              { it: "svegliarsi", de: "aufwachen", level: "A2" },
              { it: "addormentarsi", de: "einschlafen", level: "A2" }
            ],
            [
              { it: "lavorare", de: "arbeiten", level: "A2" },
              { it: "riposare", de: "sich ausruhen", level: "A2" }
            ],
            [
              { it: "amare", de: "lieben", level: "A2" },
              { it: "odiare", de: "hassen", level: "A2" }
            ]
          ],
          title_it: "Coppie di contrari"
        },
        {
          kind: "words",
          title: "Bewegung",
          items: [
            { it: "andare", de: "gehen, fahren", note: "unregelmäßig", level: "A1" },
            { it: "venire", de: "kommen", note: "unregelmäßig", level: "A1" },
            { it: "camminare", de: "zu Fuß gehen", level: "A1" },
            { it: "correre", de: "laufen, rennen", level: "A2" },
            { it: "tornare", de: "zurückkommen", level: "A1" },
            { it: "arrivare", de: "ankommen", level: "A1" },
            { it: "partire", de: "abfahren, abreisen", level: "A1" },
            { it: "entrare", de: "hineingehen", level: "A1" },
            { it: "uscire", de: "hinausgehen", note: "unregelmäßig", level: "A1" },
            { it: "salire", de: "hinaufgehen, einsteigen", level: "A2" },
            { it: "scendere", de: "hinuntergehen, aussteigen", level: "A2" },
            { it: "restare", de: "bleiben", level: "A1" },
            { it: "viaggiare", de: "reisen", level: "A2" },
            { it: "guidare", de: "(Auto) fahren", level: "A2" }
          ],
          title_it: "Movimento"
        },
        {
          kind: "words",
          title: "Alltag und Haushalt",
          items: [
            { it: "svegliarsi", de: "aufwachen", level: "A1" },
            { it: "alzarsi", de: "aufstehen", level: "A1" },
            { it: "lavarsi", de: "sich waschen", level: "A2" },
            { it: "vestirsi", de: "sich anziehen", level: "A2" },
            { it: "lavorare", de: "arbeiten", level: "A1" },
            { it: "studiare", de: "lernen, studieren", level: "A1" },
            { it: "abitare", de: "wohnen", level: "A1" },
            { it: "vivere", de: "leben", level: "A1" },
            { it: "cucinare", de: "kochen", level: "A1" },
            { it: "pulire", de: "putzen", note: "-isc-: pulisco", level: "A2" },
            { it: "lavare", de: "waschen", level: "A1" },
            { it: "fare la spesa", de: "einkaufen (Lebensmittel)", level: "A1" },
            { it: "dormire", de: "schlafen", level: "A1" }
          ],
          title_it: "Vita quotidiana e casa"
        },
        {
          kind: "words",
          title: "Kommunikation",
          items: [
            { it: "parlare", de: "sprechen", level: "A1" },
            { it: "dire", de: "sagen", note: "unregelmäßig", level: "A1" },
            { it: "chiedere", de: "fragen", level: "A1" },
            { it: "rispondere", de: "antworten", level: "A1" },
            { it: "chiamare", de: "rufen, anrufen", level: "A1" },
            { it: "telefonare", de: "telefonieren", level: "A1" },
            { it: "scrivere", de: "schreiben", level: "A1" },
            { it: "leggere", de: "lesen", level: "A1" },
            { it: "raccontare", de: "erzählen", level: "A2" },
            { it: "spiegare", de: "erklären", level: "A2" },
            { it: "ripetere", de: "wiederholen", level: "A2" }
          ],
          title_it: "Comunicazione"
        },
        {
          kind: "words",
          title: "Wahrnehmung und Denken",
          items: [
            { it: "vedere", de: "sehen", level: "A1" },
            { it: "guardare", de: "anschauen", level: "A1" },
            { it: "sentire", de: "hören, fühlen", level: "A1" },
            { it: "ascoltare", de: "zuhören", level: "A1" },
            { it: "pensare", de: "denken", level: "A1" },
            { it: "credere", de: "glauben", level: "A2" },
            { it: "sapere", de: "wissen; können (gelernt)", note: "unregelmäßig", level: "A1" },
            { it: "conoscere", de: "kennen", level: "A2" },
            { it: "capire", de: "verstehen", note: "-isc-: capisco", level: "A1" },
            { it: "ricordare", de: "sich erinnern", level: "A2" },
            { it: "dimenticare", de: "vergessen", level: "A2" },
            { it: "piacere", de: "gefallen", note: "mi piace = mir gefällt", level: "A1" }
          ],
          title_it: "Percezione e pensiero"
        },
        {
          kind: "words",
          title: "Essen und Trinken",
          items: [
            { it: "mangiare", de: "essen", level: "A1" },
            { it: "bere", de: "trinken", note: "unregelmäßig: bevo", level: "A1" },
            { it: "assaggiare", de: "probieren", level: "A2" },
            { it: "ordinare", de: "bestellen", level: "A1" },
            { it: "pagare", de: "bezahlen", level: "A1" },
            { it: "fare colazione", de: "frühstücken", level: "A1" },
            { it: "pranzare", de: "zu Mittag essen", level: "A2" },
            { it: "cenare", de: "zu Abend essen", level: "A2" },
            { it: "avere fame", de: "Hunger haben", level: "A1" },
            { it: "avere sete", de: "Durst haben", level: "A1" }
          ],
          title_it: "Mangiare e bere"
        },
        {
          kind: "clusters",
          title: "Ähnliche Verben, feiner Unterschied",
          items: [
            {
              label: "≈ anfangen",
              words: [
                { it: "cominciare", de: "anfangen", level: "A1" },
                { it: "iniziare", de: "beginnen", level: "A2" }
              ]
            },
            {
              label: "≈ bleiben",
              words: [
                { it: "restare", de: "bleiben", level: "A1" },
                { it: "rimanere", de: "bleiben", note: "unregelmäßig: rimango", level: "A2" }
              ]
            },
            {
              label: "≈ hören",
              words: [
                { it: "sentire", de: "hören (allgemein)", level: "A1" },
                { it: "ascoltare", de: "bewusst zuhören", level: "A1" }
              ]
            },
            {
              label: "≈ sehen",
              words: [
                { it: "vedere", de: "sehen", level: "A1" },
                { it: "guardare", de: "anschauen", level: "A1" }
              ]
            },
            {
              label: "≈ wissen / kennen",
              words: [
                { it: "sapere", de: "wissen (Fakten)", level: "A1" },
                { it: "conoscere", de: "kennen (Personen, Orte)", level: "A2" }
              ]
            },
            {
              label: "≈ zurückkehren",
              words: [
                { it: "tornare", de: "zurückkommen", level: "A1" },
                { it: "ritornare", de: "zurückkehren", level: "A2" },
                { it: "rientrare", de: "heimkommen", level: "A2" }
              ]
            }
          ],
          title_it: "Verbi simili, piccola differenza"
        },
        {
          kind: "pairs",
          title: "Gegensatzpaare B1",
          title_it: "Coppie di contrari B1",
          items: [
            [
              { it: "accettare", de: "annehmen", level: "B1" },
              { it: "rifiutare", de: "ablehnen", level: "B1" }
            ],
            [
              { it: "aumentare", de: "zunehmen, erhöhen", level: "B1" },
              { it: "diminuire", de: "abnehmen, verringern", note: "-isc-: diminuisco", level: "B1" }
            ],
            [
              { it: "riuscire", de: "schaffen, gelingen", note: "wie uscire: riesco", level: "B1" },
              { it: "fallire", de: "scheitern", note: "-isc-: fallisco", level: "B1" }
            ],
            [
              { it: "mostrare", de: "zeigen", level: "B1" },
              { it: "nascondere", de: "verstecken", level: "B1" }
            ],
            [
              { it: "permettere", de: "erlauben", level: "B1" },
              { it: "vietare", de: "verbieten", level: "B1" }
            ],
            [
              { it: "costruire", de: "bauen", note: "-isc-: costruisco", level: "B1" },
              { it: "distruggere", de: "zerstören", level: "B1" }
            ],
            [
              { it: "trovare", de: "finden", level: "B1" },
              { it: "perdere", de: "verlieren", level: "B1" }
            ],
            [
              { it: "riempire", de: "füllen", level: "B1" },
              { it: "svuotare", de: "leeren", level: "B1" }
            ]
          ]
        },
        {
          kind: "words",
          title: "Gefühle und Meinung B1",
          title_it: "Sentimenti e opinioni B1",
          items: [
            { it: "sperare", de: "hoffen", level: "B1" },
            { it: "temere", de: "fürchten", level: "B1" },
            { it: "preoccuparsi", de: "sich Sorgen machen", level: "B1" },
            { it: "arrabbiarsi", de: "sich ärgern", level: "B1" },
            { it: "divertirsi", de: "sich amüsieren", level: "B1" },
            { it: "lamentarsi", de: "sich beschweren", level: "B1" },
            { it: "sembrare", de: "scheinen", level: "B1" },
            { it: "decidere", de: "entscheiden", level: "B1" },
            { it: "scegliere", de: "wählen, aussuchen", note: "unregelmäßig: scelgo", level: "B1" },
            { it: "suggerire", de: "vorschlagen", note: "-isc-: suggerisco", level: "B1" },
            { it: "convincere", de: "überzeugen", level: "B1" },
            { it: "succedere", de: "geschehen, passieren", level: "B1" },
            { it: "evitare", de: "vermeiden", level: "B1" },
            { it: "raggiungere", de: "erreichen", level: "B1" }
          ]
        },
        {
          kind: "words",
          title: "Abstrakte Verben B2",
          title_it: "Verbi astratti B2",
          items: [
            { it: "sostenere", de: "behaupten; unterstützen", note: "wie tenere: sostengo", level: "B2" },
            { it: "affrontare", de: "angehen, sich stellen", level: "B2" },
            { it: "approfondire", de: "vertiefen", note: "-isc-: approfondisco", level: "B2" },
            { it: "dedurre", de: "folgern", note: "deduco", level: "B2" },
            { it: "garantire", de: "garantieren", note: "-isc-: garantisco", level: "B2" },
            { it: "rinunciare (a)", de: "verzichten (auf)", level: "B2" },
            { it: "svolgere", de: "durchführen, ausüben", level: "B2" },
            { it: "coinvolgere", de: "einbeziehen", level: "B2" },
            { it: "trascurare", de: "vernachlässigen", level: "B2" },
            { it: "ammettere", de: "zugeben", level: "B2" },
            { it: "prevedere", de: "vorhersehen", level: "B2" },
            { it: "ottenere", de: "erhalten, erreichen", note: "wie tenere: ottengo", level: "B2" },
            { it: "contribuire", de: "beitragen", note: "-isc-: contribuisco", level: "B2" },
            { it: "valutare", de: "bewerten, abwägen", level: "B2" }
          ]
        },
        {
          kind: "clusters",
          title: "Ähnliche Verben B2",
          title_it: "Verbi simili B2",
          note: "Gleiche Farbe = ähnliche Bedeutung.",
          note_it: "Stesso colore = significato simile.",
          items: [
            {
              label: "≈ behaupten",
              words: [
                { it: "affermare", de: "behaupten", level: "B2" },
                { it: "dichiarare", de: "erklären (öffentlich)", level: "B2" },
                { it: "sostenere", de: "vertreten", level: "B2" }
              ]
            },
            {
              label: "≈ bemerken",
              words: [
                { it: "notare", de: "bemerken", level: "B2" },
                { it: "accorgersi", de: "merken", level: "B2" },
                { it: "rendersi conto", de: "sich klarwerden", level: "B2" }
              ]
            },
            {
              label: "≈ verbessern",
              words: [
                { it: "migliorare", de: "verbessern", level: "B2" },
                { it: "perfezionare", de: "vervollkommnen", level: "B2" }
              ]
            }
          ]
        }
      ],
      tab_it: "Verbi",
      heading_it: "4 · Verbi",
      intro_it: "All'infinito quasi tutti i verbi finiscono in -en (machen, gehen). Nella frase principale il verbo coniugato sta sempre al secondo posto: Morgen fahre ich nach Rom.",
      tables: [
        {
          position: "after",
          level: "A1",
          title: "Regelmäßige Endungen im Präsens",
          columns: ["Person", "-are: parlare", "-ere: prendere", "-ire: dormire", "-ire mit -isc-: capire"],
          rows: [
            ["io", "parlo", "prendo", "dormo", "capisco"],
            ["tu", "parli", "prendi", "dormi", "capisci"],
            ["lui / lei / Lei", "parla", "prende", "dorme", "capisce"],
            ["noi", "parliamo", "prendiamo", "dormiamo", "capiamo"],
            ["voi", "parlate", "prendete", "dormite", "capite"],
            ["loro", "parlano", "prendono", "dormono", "capiscono"]
          ]
        },
        {
          position: "after",
          level: "A1",
          title: "Die wichtigsten unregelmäßigen Verben",
          columns: ["Verb", "io", "tu", "lui/lei", "noi", "voi", "loro"],
          rows: [
            ["essere (sein)", "sono", "sei", "è", "siamo", "siete", "sono"],
            ["avere (haben)", "ho", "hai", "ha", "abbiamo", "avete", "hanno"],
            ["fare (machen)", "faccio", "fai", "fa", "facciamo", "fate", "fanno"],
            ["andare (gehen)", "vado", "vai", "va", "andiamo", "andate", "vanno"],
            ["venire (kommen)", "vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
            ["dire (sagen)", "dico", "dici", "dice", "diciamo", "dite", "dicono"],
            ["stare (sein, bleiben)", "sto", "stai", "sta", "stiamo", "state", "stanno"],
            ["potere (können)", "posso", "puoi", "può", "possiamo", "potete", "possono"],
            ["volere (wollen)", "voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
            ["dovere (müssen)", "devo", "devi", "deve", "dobbiamo", "dovete", "devono"],
            ["sapere (wissen)", "so", "sai", "sa", "sappiamo", "sapete", "sanno"],
            ["uscire (ausgehen)", "esco", "esci", "esce", "usciamo", "uscite", "escono"],
            ["bere (trinken)", "bevo", "bevi", "beve", "beviamo", "bevete", "bevono"],
            ["dare (geben)", "do", "dai", "dà", "diamo", "date", "danno"]
          ],
          note: "Merkhilfe: essere = sein (Zustand, Identität), stare = sich befinden, wie es geht: Come stai? Sto bene."
        },
        {
          position: "after",
          level: "B1",
          title: "Passato prossimo: mit avere oder essere?",
          columns: ["Hilfsverb", "Wann?", "Beispiel"],
          rows: [
            ["avere", "die meisten Verben, v. a. mit direktem Objekt", "Ho mangiato una pizza."],
            ["essere", "Bewegung und Zustandswechsel (andare, venire, partire, nascere …)", "Sono andato/andata a Roma."],
            ["essere", "reflexive Verben", "Mi sono alzato/alzata presto."],
            ["essere", "essere, stare, restare, piacere", "È stato bello. Mi è piaciuto."]
          ],
          note: "Mit essere passt sich das Partizip an: Maria è arrivata, i ragazzi sono partiti."
        }
      ],
      tables_de: [
        {
          position: "after",
          level: "A1",
          title: "Presente regolare",
          columns: ["Persona", "machen (fare)", "arbeiten (lavorare)", "fahren (andare in auto)"],
          rows: [
            ["ich", "mache", "arbeite", "fahre"],
            ["du", "machst", "arbeitest", "fährst"],
            ["er / sie / es", "macht", "arbeitet", "fährt"],
            ["wir", "machen", "arbeiten", "fahren"],
            ["ihr", "macht", "arbeitet", "fahrt"],
            ["sie / Sie", "machen", "arbeiten", "fahren"]
          ],
          note: "Alcuni verbi cambiano vocale con du e er/sie/es: fahren → fährst, sprechen → sprichst, sehen → siehst."
        },
        {
          position: "after",
          level: "A1",
          title: "I verbi irregolari più importanti",
          columns: ["Verbo", "ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
          rows: [
            ["sein (essere)", "bin", "bist", "ist", "sind", "seid", "sind"],
            ["haben (avere)", "habe", "hast", "hat", "haben", "habt", "haben"],
            ["werden (diventare)", "werde", "wirst", "wird", "werden", "werdet", "werden"],
            ["können (potere)", "kann", "kannst", "kann", "können", "könnt", "können"],
            ["müssen (dovere)", "muss", "musst", "muss", "müssen", "müsst", "müssen"],
            ["wollen (volere)", "will", "willst", "will", "wollen", "wollt", "wollen"],
            ["dürfen (potere, permesso)", "darf", "darfst", "darf", "dürfen", "dürft", "dürfen"],
            ["mögen (piacere)", "mag", "magst", "mag", "mögen", "mögt", "mögen"],
            ["wissen (sapere)", "weiß", "weißt", "weiß", "wissen", "wisst", "wissen"],
            ["geben (dare)", "gebe", "gibst", "gibt", "geben", "gebt", "geben"],
            ["nehmen (prendere)", "nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"],
            ["essen (mangiare)", "esse", "isst", "isst", "essen", "esst", "essen"],
            ["sehen (vedere)", "sehe", "siehst", "sieht", "sehen", "seht", "sehen"],
            ["lesen (leggere)", "lese", "liest", "liest", "lesen", "lest", "lesen"]
          ]
        },
        {
          position: "after",
          level: "B1",
          title: "Perfekt: haben o sein?",
          columns: ["Ausiliare", "Quando?", "Esempio"],
          rows: [
            ["haben", "la maggior parte dei verbi, anche i riflessivi", "Ich habe Pizza gegessen. Ich habe mich gewaschen."],
            ["sein", "movimento da A a B (gehen, fahren, kommen …)", "Ich bin nach Rom gefahren."],
            ["sein", "cambiamento di stato (aufstehen, einschlafen, sterben …)", "Er ist früh aufgestanden."],
            ["sein", "sein, bleiben, werden, passieren", "Ich bin zu Hause geblieben."]
          ],
          note: "Il participio va alla fine della frase: Ich habe gestern einen Film gesehen."
        }
      ]
    },
    {
      id: "nomen",
      tab: "Nomen",
      heading: "5 · Nomen nach Themen",
      intro: "Immer mit Artikel lernen, dann lernst du das Geschlecht gleich mit. Die Artikel-Regeln stehen in der Tabelle unten.",
      blocks: [
        {
          kind: "pairs",
          title: "Familie: männlich – weiblich",
          sym: "–",
          items: [
            [
              { it: "il padre", de: "der Vater", pl: "die Väter", level: "A1" },
              { it: "la madre", de: "die Mutter", pl: "die Mütter", level: "A1" }
            ],
            [
              { it: "il papà", de: "der Papa", pl: "die Papas", level: "A1" },
              { it: "la mamma", de: "die Mama", pl: "die Mamas", level: "A1" }
            ],
            [
              { it: "il figlio", de: "der Sohn", pl: "die Söhne", level: "A1" },
              { it: "la figlia", de: "die Tochter", pl: "die Töchter", level: "A1" }
            ],
            [
              { it: "il fratello", de: "der Bruder", pl: "die Brüder", level: "A1" },
              { it: "la sorella", de: "die Schwester", pl: "die Schwestern", level: "A1" }
            ],
            [
              { it: "il nonno", de: "der Opa", pl: "die Opas", level: "A1" },
              { it: "la nonna", de: "die Oma", pl: "die Omas", level: "A1" }
            ],
            [
              { it: "lo zio", de: "der Onkel", pl: "die Onkel", level: "A1" },
              { it: "la zia", de: "die Tante", pl: "die Tanten", level: "A1" }
            ],
            [
              { it: "il marito", de: "der Ehemann", pl: "die Ehemänner", level: "A1" },
              { it: "la moglie", de: "die Ehefrau", pl: "die Ehefrauen", level: "A1" }
            ],
            [
              { it: "il cugino", de: "der Cousin", pl: "die Cousins", level: "A2" },
              { it: "la cugina", de: "die Cousine", pl: "die Cousinen", level: "A2" }
            ],
            [
              { it: "il nipote", de: "der Enkel, Neffe", pl: "die Enkel, die Neffen", level: "A2" },
              { it: "la nipote", de: "die Enkelin, Nichte", pl: "die Enkelinnen, die Nichten", level: "A2" }
            ],
            [
              { it: "l'uomo", de: "der Mann", note: "Pl. gli uomini", pl: "die Männer", level: "A1" },
              { it: "la donna", de: "die Frau", pl: "die Frauen", level: "A1" }
            ],
            [
              { it: "il ragazzo", de: "der Junge, Freund", pl: "die Jungen, die Freunde", level: "A1" },
              { it: "la ragazza", de: "das Mädchen, Freundin", pl: "die Mädchen, die Freundinnen", level: "A1" }
            ],
            [
              { it: "il bambino", de: "das Kind (Junge)", pl: "die Kinder", level: "A1" },
              { it: "la bambina", de: "das Kind (Mädchen)", pl: "die Kinder", level: "A1" }
            ]
          ],
          title_it: "Famiglia: maschile – femminile"
        },
        {
          kind: "words",
          title: "Familie: Sammelbegriffe",
          items: [
            { it: "la famiglia", de: "die Familie", pl: "die Familien", level: "A1" },
            { it: "i genitori", de: "die Eltern", pl: "nur Pl.", level: "A1" },
            { it: "i figli", de: "die Kinder (Söhne und Töchter)", pl: "nur Pl. (Sg. das Kind)", level: "A1" },
            { it: "i fratelli", de: "die Geschwister, Brüder", pl: "nur Pl.", level: "A1" },
            { it: "i nonni", de: "die Großeltern", pl: "nur Pl.", level: "A1" }
          ],
          title_it: "Famiglia: termini collettivi"
        },
        {
          kind: "words",
          title: "Körper",
          note: "Achtung, unregelmäßige Plurale: le mani, le braccia, le dita, le ginocchia, le orecchie.",
          items: [
            { it: "la testa", de: "der Kopf", pl: "die Köpfe", level: "A1" },
            { it: "la faccia", de: "das Gesicht", note: "auch: il viso", pl: "die Gesichter", level: "A2" },
            { it: "l'occhio", de: "das Auge", note: "Pl. gli occhi", pl: "die Augen", level: "A1" },
            { it: "l'orecchio", de: "das Ohr", note: "Pl. le orecchie", pl: "die Ohren", level: "A1" },
            { it: "il naso", de: "die Nase", pl: "die Nasen", level: "A1" },
            { it: "la bocca", de: "der Mund", pl: "die Münder", level: "A1" },
            { it: "il dente", de: "der Zahn", pl: "die Zähne", level: "A1" },
            { it: "i capelli", de: "die Haare", pl: "Pl. (Sg. das Haar)", level: "A1" },
            { it: "il collo", de: "der Hals", pl: "die Hälse", level: "A2" },
            { it: "la spalla", de: "die Schulter", pl: "die Schultern", level: "A2" },
            { it: "il braccio", de: "der Arm", note: "Pl. le braccia", pl: "die Arme", level: "A1" },
            { it: "la mano", de: "die Hand", note: "feminin! Pl. le mani", pl: "die Hände", level: "A1" },
            { it: "il dito", de: "der Finger", note: "Pl. le dita", pl: "die Finger", level: "A2" },
            { it: "la pancia", de: "der Bauch", pl: "die Bäuche", level: "A2" },
            { it: "la schiena", de: "der Rücken", pl: "die Rücken", level: "A2" },
            { it: "la gamba", de: "das Bein", pl: "die Beine", level: "A1" },
            { it: "il ginocchio", de: "das Knie", note: "Pl. le ginocchia", pl: "die Knie", level: "A2" },
            { it: "il piede", de: "der Fuß", pl: "die Füße", level: "A1" },
            { it: "il cuore", de: "das Herz", pl: "die Herzen", level: "A2" },
            { it: "lo stomaco", de: "der Magen", pl: "die Mägen", level: "A2" }
          ],
          title_it: "Il corpo",
          note_it: "Molti plurali tedeschi prendono l'Umlaut: der Zahn → die Zähne, der Fuß → die Füße."
        },
        {
          kind: "clusters",
          title: "Essen und Trinken",
          items: [
            {
              label: "Mahlzeiten",
              label_it: "Pasti",
              words: [
                { it: "la colazione", de: "das Frühstück", pl: "die Frühstücke", level: "A1" },
                { it: "il pranzo", de: "das Mittagessen", pl: "die Mittagessen", level: "A1" },
                { it: "la cena", de: "das Abendessen", pl: "die Abendessen", level: "A1" }
              ]
            },
            {
              label: "Grundnahrungsmittel",
              label_it: "Alimenti base",
              words: [
                { it: "il pane", de: "das Brot", pl: "die Brote", level: "A1" },
                { it: "il formaggio", de: "der Käse", pl: "die Käse", level: "A1" },
                { it: "il burro", de: "die Butter", pl: "–", level: "A2" },
                { it: "l'uovo", de: "das Ei", note: "Pl. le uova", pl: "die Eier", level: "A1" },
                { it: "la carne", de: "das Fleisch", pl: "–", level: "A1" },
                { it: "il pesce", de: "der Fisch", pl: "die Fische", level: "A1" },
                { it: "il pollo", de: "das Hähnchen", pl: "die Hähnchen", level: "A1" },
                { it: "il prosciutto", de: "der Schinken", pl: "die Schinken", level: "A2" },
                { it: "la pasta", de: "die Nudeln", pl: "Pl. (Sg. die Nudel)", level: "A1" },
                { it: "il riso", de: "der Reis", pl: "–", level: "A1" }
              ]
            },
            {
              label: "Obst und Gemüse",
              label_it: "Frutta e verdura",
              words: [
                { it: "la frutta", de: "das Obst", pl: "–", level: "A1" },
                { it: "la verdura", de: "das Gemüse", pl: "die Gemüse", level: "A1" },
                { it: "la mela", de: "der Apfel", pl: "die Äpfel", level: "A1" },
                { it: "l'arancia", de: "die Orange", pl: "die Orangen", level: "A1" },
                { it: "la banana", de: "die Banane", pl: "die Bananen", level: "A1" },
                { it: "il pomodoro", de: "die Tomate", pl: "die Tomaten", level: "A1" },
                { it: "la patata", de: "die Kartoffel", pl: "die Kartoffeln", level: "A1" },
                { it: "l'insalata", de: "der Salat", pl: "die Salate", level: "A1" },
                { it: "l'anguria", de: "die Wassermelone", note: "Mittel-/Süditalien: il cocomero", pl: "die Wassermelonen", level: "A2" }
              ]
            },
            {
              label: "Getränke",
              label_it: "Bevande",
              words: [
                { it: "l'acqua", de: "das Wasser", pl: "–", level: "A1" },
                { it: "il vino", de: "der Wein", pl: "die Weine", level: "A1" },
                { it: "la birra", de: "das Bier", pl: "die Biere", level: "A1" },
                { it: "il caffè", de: "der Kaffee", note: "= Espresso", pl: "die Kaffees", level: "A1" },
                { it: "il tè", de: "der Tee", pl: "die Tees", level: "A1" },
                { it: "il latte", de: "die Milch", pl: "–", level: "A1" },
                { it: "il succo", de: "der Saft", pl: "die Säfte", level: "A1" }
              ]
            },
            {
              label: "Würzen",
              label_it: "Condimenti",
              words: [
                { it: "il sale", de: "das Salz", pl: "–", level: "A1" },
                { it: "il pepe", de: "der Pfeffer", pl: "–", level: "A2" },
                { it: "l'olio", de: "das Öl", pl: "die Öle", level: "A2" },
                { it: "lo zucchero", de: "der Zucker", pl: "–", level: "A1" }
              ]
            }
          ],
          title_it: "Mangiare e bere"
        },
        {
          kind: "words",
          title: "Haus und Wohnung",
          items: [
            { it: "la casa", de: "das Haus, Zuhause", pl: "die Häuser", level: "A1" },
            { it: "l'appartamento", de: "die Wohnung", pl: "die Wohnungen", level: "A1" },
            { it: "la stanza", de: "das Zimmer", pl: "die Zimmer", level: "A1" },
            { it: "la camera da letto", de: "das Schlafzimmer", pl: "die Schlafzimmer", level: "A1" },
            { it: "il soggiorno", de: "das Wohnzimmer", pl: "die Wohnzimmer", level: "A2" },
            { it: "la cucina", de: "die Küche", pl: "die Küchen", level: "A1" },
            { it: "il bagno", de: "das Bad", pl: "die Bäder", level: "A1" },
            { it: "la porta", de: "die Tür", pl: "die Türen", level: "A1" },
            { it: "la finestra", de: "das Fenster", pl: "die Fenster", level: "A1" },
            { it: "il tavolo", de: "der Tisch", pl: "die Tische", level: "A1" },
            { it: "la sedia", de: "der Stuhl", pl: "die Stühle", level: "A1" },
            { it: "il letto", de: "das Bett", pl: "die Betten", level: "A1" },
            { it: "l'armadio", de: "der Schrank", pl: "die Schränke", level: "A2" },
            { it: "il divano", de: "das Sofa", pl: "die Sofas", level: "A1" },
            { it: "lo specchio", de: "der Spiegel", pl: "die Spiegel", level: "A2" },
            { it: "la lampada", de: "die Lampe", pl: "die Lampen", level: "A2" },
            { it: "il frigorifero", de: "der Kühlschrank", pl: "die Kühlschränke", level: "A2" },
            { it: "le scale", de: "die Treppe", pl: "die Treppen", level: "A2" },
            { it: "il giardino", de: "der Garten", pl: "die Gärten", level: "A2" },
            { it: "la chiave", de: "der Schlüssel", pl: "die Schlüssel", level: "A1" }
          ],
          title_it: "Casa e appartamento"
        },
        {
          kind: "clusters",
          title: "Stadt und Verkehr",
          items: [
            {
              label: "Orte",
              label_it: "Luoghi",
              words: [
                { it: "la città", de: "die Stadt", pl: "die Städte", level: "A1" },
                { it: "la strada", de: "die Straße", pl: "die Straßen", level: "A1" },
                { it: "la piazza", de: "der Platz", pl: "die Plätze", level: "A1" },
                { it: "il negozio", de: "das Geschäft", pl: "die Geschäfte", level: "A1" },
                { it: "il supermercato", de: "der Supermarkt", pl: "die Supermärkte", level: "A1" },
                { it: "la banca", de: "die Bank", pl: "die Banken", level: "A1" },
                { it: "la farmacia", de: "die Apotheke", pl: "die Apotheken", level: "A2" },
                { it: "l'ospedale", de: "das Krankenhaus", note: "maskulin", pl: "die Krankenhäuser", level: "A1" },
                { it: "la stazione", de: "der Bahnhof", pl: "die Bahnhöfe", level: "A1" },
                { it: "l'aeroporto", de: "der Flughafen", pl: "die Flughäfen", level: "A1" },
                { it: "la chiesa", de: "die Kirche", pl: "die Kirchen", level: "A1" },
                { it: "il museo", de: "das Museum", pl: "die Museen", level: "A1" },
                { it: "il ristorante", de: "das Restaurant", pl: "die Restaurants", level: "A1" },
                { it: "il bar", de: "das Café, die Bar", pl: "die Cafés, die Bars", level: "A1" },
                { it: "la scuola", de: "die Schule", pl: "die Schulen", level: "A1" },
                { it: "lo stadio", de: "das Stadion", pl: "die Stadien", level: "A2" }
              ]
            },
            {
              label: "Verkehr",
              label_it: "Traffico",
              words: [
                { it: "la macchina", de: "das Auto", note: "auch: l'auto (f)", pl: "die Autos", level: "A1" },
                { it: "l'autobus", de: "der Bus", note: "maskulin", pl: "die Busse", level: "A1" },
                { it: "il treno", de: "der Zug", pl: "die Züge", level: "A1" },
                { it: "l'aereo", de: "das Flugzeug", pl: "die Flugzeuge", level: "A1" },
                { it: "la bicicletta", de: "das Fahrrad", note: "kurz: la bici", pl: "die Fahrräder", level: "A1" },
                { it: "la metropolitana", de: "die U-Bahn", note: "kurz: la metro", pl: "die U-Bahnen", level: "A2" },
                { it: "il biglietto", de: "die Fahrkarte", pl: "die Fahrkarten", level: "A2" },
                { it: "il semaforo", de: "die Ampel", pl: "die Ampeln", level: "A2" }
              ]
            }
          ],
          title_it: "Città e traffico"
        },
        {
          kind: "pairs",
          title: "Beruf und Arbeit: männlich – weiblich",
          sym: "–",
          items: [
            [
              { it: "il medico", de: "der Arzt", pl: "die Ärzte", level: "A2" },
              { it: "la dottoressa", de: "die Ärztin", note: "m: il dottore", pl: "die Ärztinnen", level: "A2" }
            ],
            [
              { it: "il professore", de: "der Lehrer, Professor", pl: "die Lehrer, die Professoren", level: "A2" },
              { it: "la professoressa", de: "die Lehrerin", pl: "die Lehrerinnen", level: "A2" }
            ],
            [
              { it: "lo studente", de: "der Student, Schüler", pl: "die Studenten, die Schüler", level: "A2" },
              { it: "la studentessa", de: "die Studentin", pl: "die Studentinnen", level: "A2" }
            ],
            [
              { it: "il cameriere", de: "der Kellner", pl: "die Kellner", level: "A2" },
              { it: "la cameriera", de: "die Kellnerin", pl: "die Kellnerinnen", level: "A2" }
            ],
            [
              { it: "il cuoco", de: "der Koch", pl: "die Köche", level: "A2" },
              { it: "la cuoca", de: "die Köchin", pl: "die Köchinnen", level: "A2" }
            ],
            [
              { it: "l'infermiere", de: "der Krankenpfleger", pl: "die Krankenpfleger", level: "A2" },
              { it: "l'infermiera", de: "die Krankenschwester", pl: "die Krankenschwestern", level: "A2" }
            ],
            [
              { it: "il commesso", de: "der Verkäufer", pl: "die Verkäufer", level: "A2" },
              { it: "la commessa", de: "die Verkäuferin", pl: "die Verkäuferinnen", level: "A2" }
            ],
            [
              { it: "il collega", de: "der Kollege", pl: "die Kollegen", level: "A2" },
              { it: "la collega", de: "die Kollegin", pl: "die Kolleginnen", level: "A2" }
            ]
          ],
          title_it: "Professioni: maschile – femminile"
        },
        {
          kind: "words",
          title: "Arbeit",
          items: [
            { it: "il lavoro", de: "die Arbeit", pl: "die Arbeiten", level: "A1" },
            { it: "l'ufficio", de: "das Büro", pl: "die Büros", level: "A1" },
            { it: "il capo", de: "der Chef", pl: "die Chefs", level: "A2" },
            { it: "l'insegnante", de: "der Lehrer / die Lehrerin", note: "il/la, gleiche Form", pl: "die Lehrer / die Lehrerinnen", level: "A2" },
            { it: "l'avvocato", de: "der Anwalt", pl: "die Anwälte", level: "A2" },
            { it: "l'ingegnere", de: "der Ingenieur", pl: "die Ingenieure", level: "A2" },
            { it: "la riunione", de: "die Besprechung", pl: "die Besprechungen", level: "A2" },
            { it: "lo stipendio", de: "das Gehalt", pl: "die Gehälter", level: "A2" }
          ],
          title_it: "Lavoro"
        },
        {
          kind: "words",
          title: "Natur und Wetter",
          items: [
            { it: "il tempo", de: "das Wetter; die Zeit", pl: "–; die Zeiten", level: "A1" },
            { it: "il sole", de: "die Sonne", pl: "die Sonnen", level: "A1" },
            { it: "la pioggia", de: "der Regen", pl: "–", level: "A1" },
            { it: "la neve", de: "der Schnee", pl: "–", level: "A1" },
            { it: "il vento", de: "der Wind", pl: "die Winde", level: "A1" },
            { it: "la nuvola", de: "die Wolke", pl: "die Wolken", level: "A2" },
            { it: "la nebbia", de: "der Nebel", pl: "die Nebel", level: "A2" },
            { it: "il temporale", de: "das Gewitter", pl: "die Gewitter", level: "A2" },
            { it: "il cielo", de: "der Himmel", pl: "die Himmel", level: "A1" },
            { it: "il mare", de: "das Meer", pl: "die Meere", level: "A1" },
            { it: "la spiaggia", de: "der Strand", pl: "die Strände", level: "A2" },
            { it: "la montagna", de: "der Berg, das Gebirge", pl: "die Berge, die Gebirge", level: "A1" },
            { it: "il lago", de: "der See", pl: "die Seen", level: "A1" },
            { it: "il fiume", de: "der Fluss", pl: "die Flüsse", level: "A2" },
            { it: "il bosco", de: "der Wald", pl: "die Wälder", level: "A2" },
            { it: "l'albero", de: "der Baum", pl: "die Bäume", level: "A1" },
            { it: "il fiore", de: "die Blume", pl: "die Blumen", level: "A1" },
            { it: "l'erba", de: "das Gras", pl: "die Gräser", level: "A2" }
          ],
          title_it: "Natura e tempo atmosferico"
        },
        {
          kind: "pairs",
          title: "Wetter in Sätzen",
          items: [
            [
              { it: "fa caldo", de: "es ist warm", level: "A1" },
              { it: "fa freddo", de: "es ist kalt", level: "A1" }
            ],
            [
              { it: "fa bel tempo", de: "es ist schönes Wetter", level: "A1" },
              { it: "fa brutto tempo", de: "es ist schlechtes Wetter", level: "A1" }
            ],
            [
              { it: "c'è il sole", de: "die Sonne scheint", level: "A1" },
              { it: "piove", de: "es regnet", level: "A1" }
            ],
            [
              { it: "è sereno", de: "es ist klar", level: "A2" },
              { it: "è nuvoloso", de: "es ist bewölkt", level: "A2" }
            ]
          ],
          title_it: "Il tempo in frasi"
        },
        {
          kind: "words",
          title: "Kleidung",
          items: [
            { it: "i vestiti", de: "die Kleidung", pl: "–", level: "A1" },
            { it: "il vestito", de: "das Kleid; der Anzug", pl: "die Kleider; die Anzüge", level: "A1" },
            { it: "la maglietta", de: "das T-Shirt", pl: "die T-Shirts", level: "A1" },
            { it: "la camicia", de: "das Hemd", pl: "die Hemden", level: "A1" },
            { it: "il maglione", de: "der Pullover", pl: "die Pullover", level: "A2" },
            { it: "i pantaloni", de: "die Hose", pl: "die Hosen", level: "A1" },
            { it: "i jeans", de: "die Jeans", pl: "die Jeans", level: "A1" },
            { it: "la gonna", de: "der Rock", pl: "die Röcke", level: "A1" },
            { it: "la giacca", de: "die Jacke", pl: "die Jacken", level: "A1" },
            { it: "il cappotto", de: "der Mantel", pl: "die Mäntel", level: "A2" },
            { it: "le scarpe", de: "die Schuhe", pl: "Pl. (Sg. der Schuh)", level: "A1" },
            { it: "i calzini", de: "die Socken", pl: "Pl. (Sg. die Socke)", level: "A2" },
            { it: "il cappello", de: "der Hut", pl: "die Hüte", level: "A1" },
            { it: "la sciarpa", de: "der Schal", pl: "die Schals", level: "A2" },
            { it: "i guanti", de: "die Handschuhe", pl: "Pl. (Sg. der Handschuh)", level: "A2" },
            { it: "la cintura", de: "der Gürtel", pl: "die Gürtel", level: "A2" },
            { it: "la borsa", de: "die Tasche", pl: "die Taschen", level: "A1" },
            { it: "lo zaino", de: "der Rucksack", pl: "die Rucksäcke", level: "A2" },
            { it: "gli occhiali", de: "die Brille", pl: "die Brillen", level: "A2" }
          ],
          title_it: "Abbigliamento"
        },
        {
          kind: "clusters",
          title: "Gesellschaft und Medien B1",
          title_it: "Società e media B1",
          items: [
            {
              label: "Gesellschaft",
              label_it: "Società",
              words: [
                { it: "la società", de: "die Gesellschaft", pl: "die Gesellschaften", level: "B1" },
                { it: "il governo", de: "die Regierung", pl: "die Regierungen", level: "B1" },
                { it: "la legge", de: "das Gesetz", pl: "die Gesetze", level: "B1" },
                { it: "l'ambiente", de: "die Umwelt", note: "maskulin!", pl: "–", level: "B1" },
                { it: "la salute", de: "die Gesundheit", pl: "–", level: "B1" },
                { it: "il problema", de: "das Problem", note: "maskulin! Pl. i problemi", pl: "die Probleme", level: "B1" },
                { it: "la soluzione", de: "die Lösung", pl: "die Lösungen", level: "B1" }
              ]
            },
            {
              label: "Medien",
              label_it: "Media",
              words: [
                { it: "il giornale", de: "die Zeitung", pl: "die Zeitungen", level: "B1" },
                { it: "la notizia", de: "die Nachricht", pl: "die Nachrichten", level: "B1" },
                { it: "la rivista", de: "die Zeitschrift", pl: "die Zeitschriften", level: "B1" },
                { it: "la pubblicità", de: "die Werbung", pl: "–", level: "B1" },
                { it: "lo schermo", de: "der Bildschirm", pl: "die Bildschirme", level: "B1" }
              ]
            },
            {
              label: "Leben",
              label_it: "Vita",
              words: [
                { it: "l'esperienza", de: "die Erfahrung", pl: "die Erfahrungen", level: "B1" },
                { it: "il rapporto", de: "die Beziehung", pl: "die Beziehungen", level: "B1" },
                { it: "l'opinione", de: "die Meinung", note: "feminin", pl: "die Meinungen", level: "B1" },
                { it: "il viaggio", de: "die Reise", pl: "die Reisen", level: "B1" },
                { it: "la vacanza", de: "der Urlaub, die Ferien", pl: "die Urlaube", level: "B1" }
              ]
            }
          ]
        },
        {
          kind: "words",
          title: "Gefühle B1",
          title_it: "Sentimenti B1",
          items: [
            { it: "la gioia", de: "die Freude", pl: "die Freuden", level: "B1" },
            { it: "la paura", de: "die Angst", pl: "die Ängste", level: "B1" },
            { it: "la rabbia", de: "die Wut", pl: "–", level: "B1" },
            { it: "la tristezza", de: "die Traurigkeit", pl: "–", level: "B1" },
            { it: "la speranza", de: "die Hoffnung", pl: "die Hoffnungen", level: "B1" },
            { it: "l'amore", de: "die Liebe", note: "maskulin", pl: "–", level: "B1" },
            { it: "la fiducia", de: "das Vertrauen", pl: "–", level: "B1" },
            { it: "la noia", de: "die Langeweile", pl: "–", level: "B1" },
            { it: "la vergogna", de: "die Scham, die Schande", pl: "–", level: "B1" },
            { it: "l'invidia", de: "der Neid", pl: "–", level: "B1" }
          ]
        },
        {
          kind: "pairs",
          title: "Gegensätze B2",
          title_it: "Contrari B2",
          items: [
            [
              { it: "il vantaggio", de: "der Vorteil", pl: "die Vorteile", level: "B2" },
              { it: "lo svantaggio", de: "der Nachteil", pl: "die Nachteile", level: "B2" }
            ],
            [
              { it: "la causa", de: "die Ursache", pl: "die Ursachen", level: "B2" },
              { it: "l'effetto", de: "die Wirkung", note: "maskulin", pl: "die Wirkungen", level: "B2" }
            ],
            [
              { it: "la domanda", de: "die Nachfrage", note: "auch: die Frage", pl: "–", level: "B2" },
              { it: "l'offerta", de: "das Angebot", pl: "die Angebote", level: "B2" }
            ],
            [
              { it: "il successo", de: "der Erfolg", pl: "die Erfolge", level: "B2" },
              { it: "il fallimento", de: "das Scheitern, die Pleite", pl: "–", level: "B2" }
            ],
            [
              { it: "l'uguaglianza", de: "die Gleichheit", pl: "–", level: "B2" },
              { it: "la disuguaglianza", de: "die Ungleichheit", pl: "die Ungleichheiten", level: "B2" }
            ]
          ]
        },
        {
          kind: "words",
          title: "Abstrakte Begriffe B2",
          title_it: "Concetti astratti B2",
          items: [
            { it: "la sfida", de: "die Herausforderung", pl: "die Herausforderungen", level: "B2" },
            { it: "lo sviluppo", de: "die Entwicklung", pl: "die Entwicklungen", level: "B2" },
            { it: "la ricerca", de: "die Forschung; die Suche", pl: "die Forschungen", level: "B2" },
            { it: "il punto di vista", de: "der Standpunkt", pl: "die Standpunkte", level: "B2" },
            { it: "la consapevolezza", de: "das Bewusstsein", pl: "–", level: "B2" },
            { it: "il pregiudizio", de: "das Vorurteil", pl: "die Vorurteile", level: "B2" },
            { it: "la crescita", de: "das Wachstum", pl: "–", level: "B2" },
            { it: "il provvedimento", de: "die Maßnahme", pl: "die Maßnahmen", level: "B2" },
            { it: "il dibattito", de: "die Debatte", pl: "die Debatten", level: "B2" },
            { it: "la conseguenza", de: "die Folge", pl: "die Folgen", level: "B2" },
            { it: "il cambiamento climatico", de: "der Klimawandel", pl: "–", level: "B2" },
            { it: "la disoccupazione", de: "die Arbeitslosigkeit", pl: "–", level: "B2" },
            { it: "il patrimonio", de: "das Erbe; das Vermögen", pl: "–", level: "B2" },
            { it: "l'ipotesi", de: "die Hypothese, Annahme", note: "feminin, Pl. le ipotesi", pl: "die Hypothesen", level: "B2" }
          ]
        }
      ],
      tab_it: "Sostantivi",
      heading_it: "5 · Sostantivi per temi",
      intro_it: "Impara ogni sostantivo con articolo (der, die, das) e plurale: il genere spesso non corrisponde all'italiano (il sole → die Sonne, la mano → die Hand, il mare → das Meer).",
      tables: [
        {
          position: "before",
          level: "A1",
          title: "Die Artikel auf einen Blick",
          columns: ["Fall", "Singular", "Plural", "Beispiel"],
          rows: [
            ["maskulin, normal", "il", "i", "il libro → i libri"],
            ["maskulin vor Vokal", "l'", "gli", "l'amico → gli amici"],
            ["maskulin vor s + Konsonant, z, gn, ps, y", "lo", "gli", "lo zio → gli zii"],
            ["feminin, normal", "la", "le", "la casa → le case"],
            ["feminin vor Vokal", "l'", "le", "l'amica → le amiche"]
          ]
        }
      ],
      tables_de: [
        {
          position: "before",
          level: "A1",
          title: "Gli articoli tedeschi (der, die, das)",
          columns: ["Caso", "maschile", "femminile", "neutro", "plurale"],
          rows: [
            ["Nominativo (chi?)", "der / ein", "die / eine", "das / ein", "die / –"],
            ["Accusativo (chi? che cosa?)", "den / einen", "die / eine", "das / ein", "die / –"],
            ["Dativo (a chi?)", "dem / einem", "der / einer", "dem / einem", "den / – (+n)"],
            ["Genitivo (di chi?)", "des / eines (+s)", "der / einer", "des / eines (+s)", "der / –"]
          ],
          note: "Solo il maschile cambia all'accusativo: Ich sehe den Mann, aber: Ich sehe die Frau / das Kind."
        }
      ]
    },
    {
      id: "verbindung",
      tab: "Verbindungswörter",
      heading: "6 · Verbindungswörter und kleine Wörter",
      intro: "Diese Wörter machen aus einzelnen Sätzen echtes Italienisch. Lerne sie in Bedeutungsgruppen.",
      blocks: [
        {
          kind: "words",
          title: "Konjunktionen",
          note: "wenn: se = falls (Bedingung), quando = sobald, immer wenn (Zeit).",
          items: [
            { it: "e", de: "und", note: "vor Vokal oft: ed", level: "A1" },
            { it: "o / oppure", de: "oder", level: "A2" },
            { it: "ma", de: "aber", level: "A1" },
            { it: "però", de: "aber, jedoch", level: "A2" },
            { it: "perché", de: "weil; auch: warum?", level: "A1" },
            { it: "quindi", de: "also, deshalb", level: "A2" },
            { it: "anche", de: "auch", level: "A1" },
            { it: "se", de: "wenn, falls; ob", level: "A1" },
            { it: "quando", de: "wenn, als (zeitlich)", level: "A1" },
            { it: "mentre", de: "während", level: "A2" },
            { it: "cioè", de: "das heißt", level: "A2" },
            { it: "né … né", de: "weder … noch", level: "A2" }
          ],
          title_it: "Congiunzioni"
        },
        {
          kind: "scale",
          title: "Wie oft? Von immer bis nie",
          note: "mai braucht ein non vor dem Verb: Non bevo mai caffè.",
          items: [
            { it: "sempre", de: "immer", level: "A1" },
            { it: "di solito", de: "normalerweise", level: "A2" },
            { it: "spesso", de: "oft", level: "A1" },
            { it: "a volte", de: "manchmal", note: "auch: qualche volta", level: "A1" },
            { it: "raramente", de: "selten", level: "A2" },
            { it: "mai", de: "nie", level: "A1" }
          ],
          title_it: "Quanto spesso? Da sempre a mai",
          note_it: "Nie e niemals non hanno bisogno di un'altra negazione: Ich trinke nie Kaffee."
        },
        {
          kind: "pairs",
          title: "Zeitadverbien als Gegensätze",
          items: [
            [
              { it: "ieri", de: "gestern", level: "A1" },
              { it: "domani", de: "morgen", level: "A1" }
            ],
            [
              { it: "l'altro ieri", de: "vorgestern", level: "A2" },
              { it: "dopodomani", de: "übermorgen", level: "A2" }
            ],
            [
              { it: "prima", de: "vorher", level: "A1" },
              { it: "dopo", de: "nachher", level: "A1" }
            ],
            [
              { it: "presto", de: "früh; bald", level: "A1" },
              { it: "tardi", de: "spät", level: "A1" }
            ],
            [
              { it: "già", de: "schon", level: "A2" },
              { it: "non … ancora", de: "noch nicht", level: "A2" }
            ]
          ],
          title_it: "Avverbi di tempo come contrari"
        },
        {
          kind: "words",
          title: "Weitere Zeitwörter",
          note: "adesso und ora sind gleichbedeutend; adesso ist im Alltag sehr häufig.",
          items: [
            { it: "oggi", de: "heute", level: "A1" },
            { it: "ora / adesso", de: "jetzt", level: "A1" },
            { it: "subito", de: "sofort", level: "A2" },
            { it: "poi", de: "dann, danach", level: "A1" },
            { it: "ancora", de: "noch; noch einmal", level: "A2" },
            { it: "fra poco", de: "gleich, bald", level: "A2" },
            { it: "finalmente", de: "endlich", level: "A2" },
            { it: "stamattina", de: "heute Morgen", level: "A2" },
            { it: "stasera", de: "heute Abend", level: "A2" },
            { it: "stanotte", de: "heute Nacht", level: "A2" }
          ],
          title_it: "Altre parole di tempo"
        },
        {
          kind: "clusters",
          title: "Satzwörter nach Bedeutung",
          note: "Gleiche Farbe = ähnliche Bedeutung.",
          items: [
            {
              label: "≈ eigentlich",
              words: [
                { it: "in realtà", de: "eigentlich, in Wirklichkeit", level: "A2" },
                { it: "veramente", de: "eigentlich (einschränkend)", note: "Veramente non ho tempo.", level: "A2" }
              ]
            },
            {
              label: "≈ jedoch / aber",
              words: [
                { it: "però", de: "aber, jedoch", level: "A2" },
                { it: "tuttavia", de: "jedoch (gehoben)", level: "B1" },
                { it: "ma", de: "aber", level: "A2" }
              ]
            },
            {
              label: "≈ trotzdem / jedenfalls",
              words: [
                { it: "comunque", de: "trotzdem, jedenfalls", level: "A2" },
                { it: "lo stesso", de: "trotzdem (nachgestellt)", level: "B1" }
              ]
            },
            {
              label: "≈ wirklich",
              words: [
                { it: "davvero", de: "wirklich", level: "A2" },
                { it: "veramente", de: "wirklich", level: "A2" },
                { it: "proprio", de: "genau, wirklich", level: "A2" }
              ]
            },
            {
              label: "≈ in der Tat / nämlich",
              words: [
                { it: "infatti", de: "in der Tat, nämlich", level: "A2" },
                { it: "in effetti", de: "tatsächlich", level: "B1" }
              ]
            },
            {
              label: "≈ stattdessen",
              words: [
                { it: "invece", de: "dagegen, stattdessen", level: "A2" }
              ]
            },
            {
              label: "≈ also / dann",
              words: [
                { it: "allora", de: "also, dann", level: "A2" },
                { it: "quindi", de: "also, deshalb", level: "A2" },
                { it: "dunque", de: "also (gehoben)", level: "B1" }
              ]
            },
            {
              label: "≈ vielleicht",
              words: [
                { it: "forse", de: "vielleicht", level: "A2" },
                { it: "magari", de: "vielleicht; schön wär's!", level: "A2" }
              ]
            },
            {
              label: "≈ kurz gesagt",
              words: [
                { it: "insomma", de: "kurz gesagt, na ja", level: "B1" },
                { it: "cioè", de: "das heißt", level: "A2" }
              ]
            },
            {
              label: "≈ natürlich",
              words: [
                { it: "certo", de: "sicher, klar", level: "A2" },
                { it: "naturalmente", de: "natürlich", level: "A2" },
                { it: "sicuramente", de: "sicherlich", level: "A2" }
              ]
            },
            {
              label: "≈ nur",
              words: [
                { it: "solo", de: "nur", level: "A2" },
                { it: "soltanto", de: "nur, lediglich", level: "A2" }
              ]
            },
            {
              label: "fast / außerdem",
              label_it: "quasi / inoltre",
              words: [
                { it: "quasi", de: "fast", level: "A2" },
                { it: "inoltre", de: "außerdem", level: "B1" }
              ]
            }
          ],
          title_it: "Parole di frase per significato",
          note_it: "Stesso colore = significato simile."
        },
        {
          kind: "pairs",
          title: "Kleine Gegensätze",
          items: [
            [
              { it: "purtroppo", de: "leider", level: "A2" },
              { it: "per fortuna", de: "zum Glück", level: "A2" }
            ],
            [
              { it: "molto", de: "viel, sehr", level: "A1" },
              { it: "poco", de: "wenig", level: "A1" }
            ],
            [
              { it: "più", de: "mehr", level: "A1" },
              { it: "meno", de: "weniger", level: "A1" }
            ],
            [
              { it: "tutto", de: "alles", level: "A1" },
              { it: "niente", de: "nichts", level: "A1" }
            ],
            [
              { it: "qualcuno", de: "jemand", level: "A2" },
              { it: "nessuno", de: "niemand", level: "A2" }
            ],
            [
              { it: "anche", de: "auch", level: "A2" },
              { it: "neanche", de: "auch nicht", level: "A2" }
            ],
            [
              { it: "sempre", de: "immer", level: "A1" },
              { it: "mai", de: "nie", level: "A1" }
            ]
          ],
          title_it: "Piccoli contrari"
        },
        {
          kind: "words",
          title: "Mengen",
          items: [
            { it: "troppo", de: "zu viel", level: "A2" },
            { it: "abbastanza", de: "genug, ziemlich", level: "A2" },
            { it: "tanto", de: "so viel, sehr viel", level: "A2" },
            { it: "un po'", de: "ein bisschen", level: "A1" },
            { it: "qualcosa", de: "etwas", level: "A2" }
          ],
          title_it: "Quantità"
        },
        {
          kind: "words",
          title: "Konnektoren B1",
          title_it: "Connettivi B1",
          note: "siccome steht am Satzanfang: Siccome piove, resto a casa.",
          note_it: "Weil, da e obwohl mandano il verbo alla fine: Da es regnet, bleibe ich zu Hause.",
          items: [
            { it: "eppure", de: "und doch, dennoch", level: "B1" },
            { it: "anzi", de: "im Gegenteil; sogar", level: "B1" },
            { it: "siccome", de: "da (am Satzanfang)", level: "B1" },
            { it: "poiché", de: "da, weil", level: "B1" },
            { it: "dato che", de: "da ja", level: "B1" },
            { it: "perciò", de: "deshalb, daher", level: "B1" },
            { it: "oltre a", de: "außer, zusätzlich zu", level: "B1" },
            { it: "invece di", de: "statt, anstatt", level: "B1" },
            { it: "a dire il vero", de: "allerdings, ehrlich gesagt", level: "B1" },
            { it: "per quanto riguarda", de: "was … betrifft", level: "B1" },
            { it: "da un lato … dall'altro", de: "einerseits … andererseits", level: "B1" },
            { it: "innanzitutto", de: "zuallererst", level: "B1" },
            { it: "infine", de: "schließlich", level: "B1" },
            { it: "in conclusione", de: "abschließend", level: "B1" }
          ]
        },
        {
          kind: "clusters",
          title: "Konnektoren B2 nach Bedeutung",
          title_it: "Connettivi B2 per significato",
          note: "sebbene, benché, nonostante (+ Satz), affinché, purché und a meno che verlangen den Congiuntivo.",
          note_it: "Stesso colore = significato simile. In tedesco obwohl manda il verbo alla fine; folglich e dennoch lo vogliono subito dopo: Folglich bleiben wir.",
          items: [
            {
              label: "≈ obwohl",
              words: [
                { it: "sebbene", de: "obwohl", note: "+ Congiuntivo", level: "B2" },
                { it: "benché", de: "obwohl", note: "+ Congiuntivo", level: "B2" },
                { it: "nonostante", de: "obwohl; trotz", note: "+ Congiuntivo bzw. + Nomen", level: "B2" },
                { it: "malgrado", de: "trotz; obwohl", level: "B2" }
              ]
            },
            {
              label: "≈ folglich",
              words: [
                { it: "pertanto", de: "folglich, deshalb", level: "B2" },
                { it: "di conseguenza", de: "folglich", level: "B2" },
                { it: "ne consegue che", de: "daraus folgt, dass", level: "B2" }
              ]
            },
            {
              label: "≈ dennoch",
              words: [
                { it: "ciononostante", de: "dennoch, trotzdem", level: "B2" },
                { it: "tuttavia", de: "jedoch, allerdings", level: "B2" },
                { it: "eppure", de: "und doch", level: "B2" }
              ]
            },
            {
              label: "Bedingung / Zweck",
              label_it: "Condizione / scopo",
              words: [
                { it: "purché", de: "vorausgesetzt, dass", note: "+ Congiuntivo", level: "B2" },
                { it: "a meno che (non)", de: "es sei denn", note: "+ Congiuntivo", level: "B2" },
                { it: "affinché", de: "damit", note: "+ Congiuntivo", level: "B2" },
                { it: "qualora", de: "falls", note: "gehoben, + Congiuntivo", level: "B2" }
              ]
            }
          ]
        }
      ],
      tab_it: "Connettivi",
      heading_it: "6 · Connettivi e parole piccole",
      intro_it: "Con weil, dass, obwohl, wenn il verbo va alla fine: …, weil ich müde bin. Con und, aber, oder, denn l'ordine non cambia. Dopo avverbi come deshalb, dennoch, trotzdem il verbo viene subito: Deshalb bleibe ich zu Hause.",
      tables: [
        {
          position: "after",
          level: "B2",
          title: "Konjunktionen mit Congiuntivo",
          columns: ["Konjunktion", "Bedeutung", "Beispiel"],
          rows: [
            ["sebbene", "obwohl", "Sebbene sia stanco, esce."],
            ["benché", "obwohl", "Benché piova, andiamo al mare."],
            ["nonostante", "obwohl", "Nonostante sia tardi, lavora ancora."],
            ["affinché", "damit", "Te lo dico affinché tu lo sappia."],
            ["purché", "vorausgesetzt, dass", "Vengo, purché tu guidi."],
            ["a meno che (non)", "es sei denn", "Esco, a meno che non piova."]
          ]
        }
      ],
      tables_de: [
        {
          position: "after",
          level: "B1",
          title: "Connettivi e posizione del verbo",
          columns: ["Connettivo", "Significato", "Esempio"],
          rows: [
            ["weil", "perché", "Ich bleibe zu Hause, weil ich krank bin."],
            ["obwohl", "sebbene", "Er geht spazieren, obwohl es regnet."],
            ["dass", "che", "Ich glaube, dass er recht hat."],
            ["wenn", "se, quando", "Wenn ich Zeit habe, komme ich."],
            ["damit", "affinché", "Ich erkläre es, damit du es verstehst."],
            ["deshalb", "perciò", "Es regnet, deshalb bleiben wir zu Hause."],
            ["dennoch", "tuttavia", "Es regnet, dennoch gehen wir spazieren."],
            ["folglich", "di conseguenza", "Er war krank, folglich fehlte er."]
          ],
          note: "weil, obwohl, dass, wenn, damit: verbo alla fine. deshalb, dennoch, folglich, allerdings: verbo subito dopo (2° posto)."
        }
      ]
    },
    {
      id: "fragen",
      tab: "Fragewörter",
      heading: "7 · Fragewörter",
      intro: "Die Satzstellung bleibt oft wie im Aussagesatz, nur die Betonung steigt.",
      blocks: [
        {
          kind: "words",
          title: "Die wichtigsten Fragewörter",
          items: [
            { it: "chi?", de: "wer?", note: "Chi è?", level: "A1" },
            { it: "che cosa? / cosa? / che?", de: "was?", note: "Che cosa fai?", level: "A1" },
            { it: "dove?", de: "wo? wohin?", note: "Dove abiti?", level: "A1" },
            { it: "di dove?", de: "woher?", note: "Di dove sei?", level: "A1" },
            { it: "quando?", de: "wann?", note: "Quando parti?", level: "A1" },
            { it: "come?", de: "wie?", note: "Come stai?", level: "A1" },
            { it: "perché?", de: "warum?", note: "Antwort: perché … = weil", level: "A1" },
            { it: "quanto? / quanta?", de: "wie viel?", note: "Quanto costa?", level: "A1" },
            { it: "quanti? / quante?", de: "wie viele?", note: "Quanti anni hai?", level: "A1" },
            { it: "quale? / quali?", de: "welche(r, s)?", note: "Qual è …? ohne Apostroph", level: "A1" },
            { it: "a che ora?", de: "um wie viel Uhr?", note: "A che ora apre?", level: "A2" },
            { it: "che ore sono?", de: "wie spät ist es?", note: "Sono le tre.", level: "A1" }
          ],
          title_it: "Le parole interrogative più importanti"
        },
        {
          kind: "words",
          title: "Weitere Fragen B1",
          title_it: "Altre domande B1",
          items: [
            { it: "in che modo?", de: "auf welche Weise?", level: "B1" },
            { it: "per quanto tempo?", de: "wie lange?", level: "B1" },
            { it: "da quanto tempo?", de: "seit wann?", note: "Da quanto tempo studi l'italiano?", level: "B1" },
            { it: "a chi?", de: "wem?", level: "B1" },
            { it: "di chi?", de: "wessen?", note: "Di chi è questo libro?", level: "B1" },
            { it: "con chi?", de: "mit wem?", level: "B1" },
            { it: "come mai?", de: "wieso denn?", level: "B1" },
            { it: "quante volte?", de: "wie oft?", level: "B1" }
          ]
        },
        {
          kind: "words",
          title: "Fragen B2",
          title_it: "Domande B2",
          items: [
            { it: "per quale motivo?", de: "aus welchem Grund?", level: "B2" },
            { it: "in che misura?", de: "inwiefern?", level: "B2" },
            { it: "fino a quando?", de: "bis wann?", level: "B2" },
            { it: "a che scopo?", de: "wozu?", level: "B2" },
            { it: "in base a che cosa?", de: "worauf gestützt?", level: "B2" },
            { it: "che ne pensi?", de: "was hältst du davon?", level: "B2" }
          ]
        }
      ],
      tab_it: "Domande",
      heading_it: "7 · Parole interrogative",
      intro_it: "Nelle domande con parola interrogativa il verbo viene subito dopo: Wo wohnst du? Senza parola interrogativa il verbo va al primo posto: Kommst du mit?"
    },
    {
      id: "orte",
      tab: "Präpositionen",
      heading: "8 · Präpositionen und Ortsangaben",
      intro: "Ortsangaben lernst du am leichtesten als Gegensatzpaare. Die kurzen Präpositionen verschmelzen mit dem Artikel (Tabelle unten).",
      blocks: [
        {
          kind: "pairs",
          title: "Ortsangaben als Gegensätze",
          items: [
            [
              { it: "sopra", de: "oben, über", level: "A1" },
              { it: "sotto", de: "unten, unter", level: "A1" }
            ],
            [
              { it: "su", de: "hinauf, oben", level: "A1" },
              { it: "giù", de: "hinunter, unten", level: "A1" }
            ],
            [
              { it: "davanti a", de: "vor", level: "A1" },
              { it: "dietro a", de: "hinter", note: "auch nur: dietro", level: "A1" }
            ],
            [
              { it: "dentro", de: "drinnen, in", level: "A1" },
              { it: "fuori", de: "draußen", level: "A1" }
            ],
            [
              { it: "vicino a", de: "nah bei", level: "A1" },
              { it: "lontano da", de: "weit weg von", level: "A1" }
            ],
            [
              { it: "a destra", de: "rechts", level: "A1" },
              { it: "a sinistra", de: "links", level: "A1" }
            ],
            [
              { it: "qui / qua", de: "hier", level: "A1" },
              { it: "lì / là", de: "dort", level: "A1" }
            ],
            [
              { it: "prima di", de: "vor (zeitlich)", level: "A2" },
              { it: "dopo", de: "nach (zeitlich)", level: "A2" }
            ],
            [
              { it: "con", de: "mit", level: "A1" },
              { it: "senza", de: "ohne", level: "A1" }
            ]
          ],
          title_it: "Luoghi come contrari"
        },
        {
          kind: "words",
          title: "Weitere Ortsangaben",
          items: [
            { it: "accanto a", de: "neben", level: "A2" },
            { it: "tra / fra", de: "zwischen", note: "fra due giorni = in zwei Tagen", level: "A2" },
            { it: "di fronte a", de: "gegenüber", level: "A2" },
            { it: "in mezzo a", de: "mitten in", level: "A2" },
            { it: "intorno a", de: "um … herum", level: "A2" },
            { it: "sempre dritto", de: "immer geradeaus", level: "A2" }
          ],
          title_it: "Altre indicazioni di luogo"
        },
        {
          kind: "words",
          title: "Die kurzen Präpositionen",
          items: [
            { it: "di", de: "von, aus", note: "la casa di Marco; sono di Roma", level: "A1" },
            { it: "a", de: "in, nach, zu (Städte)", note: "a Roma, a casa", level: "A1" },
            { it: "da", de: "von, bei, seit", note: "da Maria; da tre anni", level: "A1" },
            { it: "in", de: "in, nach (Länder)", note: "in Italia, in centro", level: "A1" },
            { it: "con", de: "mit", level: "A1" },
            { it: "su", de: "auf, über", level: "A1" },
            { it: "per", de: "für; um zu", level: "A2" },
            { it: "tra / fra", de: "zwischen; in (Zeit)", level: "A2" }
          ],
          title_it: "Le preposizioni brevi"
        },
        {
          kind: "words",
          title: "Präpositionen B1",
          title_it: "Preposizioni B1",
          items: [
            { it: "lungo", de: "entlang", note: "lungo il fiume", level: "B1" },
            { it: "attraverso", de: "durch", note: "attraverso il parco", level: "B1" },
            { it: "verso", de: "in Richtung; gegen (Uhrzeit)", note: "verso le otto", level: "B1" },
            { it: "contro", de: "gegen", level: "B1" },
            { it: "oltre", de: "über … hinaus, jenseits", level: "B1" },
            { it: "durante", de: "während", level: "B1" },
            { it: "entro", de: "innerhalb von, bis spätestens", note: "entro venerdì", level: "B1" },
            { it: "fino a", de: "bis", level: "B1" },
            { it: "al di sopra di / al di sotto di", de: "oberhalb / unterhalb von", level: "B1" },
            { it: "presso", de: "bei (gehoben)", level: "B1" }
          ]
        },
        {
          kind: "words",
          title: "Präpositionale Wendungen B2",
          title_it: "Locuzioni preposizionali B2",
          items: [
            { it: "nei confronti di", de: "gegenüber (Personen)", level: "B2" },
            { it: "a causa di", de: "wegen", level: "B2" },
            { it: "grazie a", de: "dank", level: "B2" },
            { it: "in base a", de: "aufgrund von, gemäß", level: "B2" },
            { it: "a favore di", de: "zugunsten von", level: "B2" },
            { it: "al posto di", de: "anstelle von", level: "B2" },
            { it: "al di là di", de: "jenseits von", level: "B2" },
            { it: "in seguito a", de: "infolge von", level: "B2" },
            { it: "a proposito di", de: "bezüglich, apropos", level: "B2" },
            { it: "a prescindere da", de: "unabhängig von", level: "B2" }
          ]
        }
      ],
      tab_it: "Preposizioni",
      heading_it: "8 · Preposizioni e luoghi",
      intro_it: "Ogni preposizione tedesca regge un caso: mit, bei, von, zu, aus + dativo; für, ohne, durch, gegen + accusativo. in, an, auf, über, unter, vor, hinter, neben, zwischen: dativo per lo stato (wo?), accusativo per il moto (wohin?).",
      tables: [
        {
          position: "after",
          level: "A2",
          title: "Präposition + Artikel verschmelzen",
          columns: ["", "+ il", "+ lo", "+ l'", "+ la", "+ i", "+ gli", "+ le"],
          rows: [
            ["di", "del", "dello", "dell'", "della", "dei", "degli", "delle"],
            ["a", "al", "allo", "all'", "alla", "ai", "agli", "alle"],
            ["da", "dal", "dallo", "dall'", "dalla", "dai", "dagli", "dalle"],
            ["in", "nel", "nello", "nell'", "nella", "nei", "negli", "nelle"],
            ["su", "sul", "sullo", "sull'", "sulla", "sui", "sugli", "sulle"]
          ],
          note: "Beispiele: il libro del ragazzo, vado al bar, la chiave è nella borsa, il gatto è sul tavolo."
        }
      ],
      tables_de: [
        {
          position: "after",
          level: "A2",
          title: "Preposizioni e casi",
          columns: ["Caso", "Preposizioni"],
          rows: [
            ["Dativo", "aus, bei, mit, nach, seit, von, zu, gegenüber"],
            ["Accusativo", "durch, für, gegen, ohne, um, bis"],
            ["Dativo (wo?) o accusativo (wohin?)", "an, auf, hinter, in, neben, über, unter, vor, zwischen"],
            ["Genitivo (B2)", "wegen, trotz, während, statt, innerhalb, aufgrund"]
          ],
          note: "Ich bin in der Küche (wo? → dativo). Ich gehe in die Küche (wohin? → accusativo)."
        },
        {
          position: "after",
          level: "A2",
          title: "Preposizione + articolo",
          columns: ["Forma lunga", "Forma breve", "Esempio"],
          rows: [
            ["an dem", "am", "am Montag, am Meer"],
            ["in dem", "im", "im Januar, im Kino"],
            ["bei dem", "beim", "beim Arzt"],
            ["von dem", "vom", "vom Bahnhof"],
            ["zu dem", "zum", "zum Bahnhof"],
            ["zu der", "zur", "zur Schule"],
            ["in das", "ins", "ins Kino"],
            ["an das", "ans", "ans Meer"]
          ]
        }
      ]
    },
    {
      id: "hoeflich",
      tab: "Höflichkeit",
      heading: "9 · Höflichkeit und Alltagsfloskeln",
      intro: "tu für Freunde, Familie, Kinder und junge Leute; Lei für Fremde und im Geschäft. Lei verwendet die 3. Person Singular, wie im Deutschen „er/sie“.",
      blocks: [
        {
          kind: "pairs",
          title: "Du (tu) und Sie (Lei)",
          sym: "tu ↔ Lei",
          items: [
            [
              { it: "Ciao!", de: "Hallo! / Tschüss!", level: "A1" },
              { it: "Buongiorno! / Salve!", de: "Guten Tag!", note: "Salve = neutral, passt fast immer", level: "A1" }
            ],
            [
              { it: "Come stai?", de: "Wie geht's dir?", level: "A1" },
              { it: "Come sta?", de: "Wie geht es Ihnen?", level: "A1" }
            ],
            [
              { it: "Come ti chiami?", de: "Wie heißt du?", level: "A1" },
              { it: "Come si chiama?", de: "Wie heißen Sie?", level: "A1" }
            ],
            [
              { it: "Di dove sei?", de: "Woher kommst du?", level: "A1" },
              { it: "Di dov'è?", de: "Woher kommen Sie?", level: "A1" }
            ],
            [
              { it: "E tu?", de: "Und du?", level: "A1" },
              { it: "E Lei?", de: "Und Sie?", level: "A1" }
            ],
            [
              { it: "Scusa!", de: "Entschuldige!", level: "A1" },
              { it: "Mi scusi!", de: "Entschuldigen Sie!", level: "A1" }
            ],
            [
              { it: "Puoi ripetere?", de: "Kannst du das wiederholen?", level: "A2" },
              { it: "Può ripetere?", de: "Können Sie das wiederholen?", level: "A2" }
            ],
            [
              { it: "Ciao! / Ci vediamo!", de: "Tschüss! / Bis dann!", level: "A1" },
              { it: "Arrivederci!", de: "Auf Wiedersehen!", note: "sehr förmlich: ArrivederLa", level: "A1" }
            ]
          ],
          title_it: "Tu e Lei (du und Sie)",
          sym_de: "du ↔ Sie"
        },
        {
          kind: "words",
          title: "Grüße und Abschied",
          note: "Ab wann man buonasera sagt, schwankt regional: im Süden oft schon ab dem frühen Nachmittag.",
          items: [
            { it: "buongiorno", de: "guten Morgen, guten Tag", level: "A1" },
            { it: "buonasera", de: "guten Abend", note: "ab ca. 16–17 Uhr", level: "A1" },
            { it: "buonanotte", de: "gute Nacht", level: "A1" },
            { it: "a presto", de: "bis bald", level: "A1" },
            { it: "a dopo", de: "bis später", level: "A1" },
            { it: "a domani", de: "bis morgen", level: "A1" },
            { it: "piacere!", de: "freut mich!", level: "A1" }
          ],
          title_it: "Saluti e congedi"
        },
        {
          kind: "words",
          title: "Bitte, danke, Entschuldigung",
          items: [
            { it: "per favore / per piacere", de: "bitte (wenn man bittet)", level: "A1" },
            { it: "grazie", de: "danke", level: "A1" },
            { it: "grazie mille", de: "vielen Dank", level: "A1" },
            { it: "prego", de: "bitte sehr, gern geschehen", level: "A1" },
            { it: "di niente / di nulla", de: "keine Ursache", level: "A2" },
            { it: "mi dispiace", de: "es tut mir leid", level: "A1" },
            { it: "permesso?", de: "darf ich vorbei / herein?", level: "A2" },
            { it: "volentieri", de: "gern", level: "A1" },
            { it: "va bene", de: "in Ordnung", level: "A1" },
            { it: "d'accordo", de: "einverstanden", level: "A2" }
          ],
          title_it: "Per favore, grazie, scusa"
        },
        {
          kind: "words",
          title: "Im Café, im Geschäft, unterwegs",
          items: [
            { it: "Vorrei …", de: "Ich hätte gern …", level: "A1" },
            { it: "Un caffè, per favore.", de: "Einen Espresso, bitte.", level: "A1" },
            { it: "Quanto costa?", de: "Wie viel kostet das?", level: "A1" },
            { it: "Il conto, per favore.", de: "Die Rechnung, bitte.", level: "A1" },
            { it: "Posso pagare con la carta?", de: "Kann ich mit Karte zahlen?", level: "A2" },
            { it: "Non capisco.", de: "Ich verstehe nicht.", level: "A1" },
            { it: "Più lentamente, per favore.", de: "Langsamer, bitte.", level: "A2" },
            { it: "Come si dice … in italiano?", de: "Wie sagt man … auf Italienisch?", level: "A2" },
            { it: "Sono tedesco / tedesca.", de: "Ich bin Deutscher / Deutsche.", level: "A1" }
          ],
          title_it: "Al bar, in negozio, in giro"
        },
        {
          kind: "words",
          title: "Höflich bitten B1",
          title_it: "Chiedere con cortesia B1",
          note: "Der Condizionale (potrebbe, vorrei, sarebbe) macht jede Bitte höflicher.",
          note_it: "In tedesco il Konjunktiv II rende la richiesta più cortese: Könnten Sie …? Ich hätte gern … Wäre es möglich …?",
          items: [
            { it: "Mi potrebbe aiutare?", de: "Könnten Sie mir helfen?", level: "B1" },
            { it: "Le dispiace se …?", de: "Stört es Sie, wenn …?", level: "B1" },
            { it: "Avrei bisogno di …", de: "Ich bräuchte …", level: "B1" },
            { it: "Sarebbe possibile …?", de: "Wäre es möglich …?", level: "B1" },
            { it: "Non si preoccupi.", de: "Machen Sie sich keine Sorgen.", level: "B1" },
            { it: "Buon appetito!", de: "Guten Appetit!", level: "B1" },
            { it: "Salute!", de: "Gesundheit! / Prost!", level: "B1" },
            { it: "Auguri!", de: "Herzlichen Glückwunsch!", level: "B1" },
            { it: "In bocca al lupo!", de: "Viel Glück!", note: "Antwort: Crepi!", level: "B1" },
            { it: "Che peccato!", de: "Wie schade!", level: "B1" }
          ]
        },
        {
          kind: "words",
          title: "Formelle Briefe und E-Mails B2",
          title_it: "Lettere ed e-mail formali B2",
          items: [
            { it: "Gentile signora / Gentile signore,", de: "Sehr geehrte Frau … / Sehr geehrter Herr …,", level: "B2" },
            { it: "Spettabile ditta,", de: "Sehr geehrte Damen und Herren, (an Firmen)", level: "B2" },
            { it: "Distinti saluti", de: "Mit freundlichen Grüßen", level: "B2" },
            { it: "Cordiali saluti", de: "Freundliche Grüße", level: "B2" },
            { it: "Resto in attesa di un Suo cortese riscontro.", de: "Ich freue mich auf Ihre Rückmeldung.", level: "B2" },
            { it: "La ringrazio in anticipo.", de: "Vielen Dank im Voraus.", level: "B2" },
            { it: "Mi scusi per il disturbo.", de: "Entschuldigen Sie die Störung.", level: "B2" },
            { it: "Le sarei grato / grata se …", de: "Ich wäre Ihnen dankbar, wenn …", level: "B2" },
            { it: "In allegato Le invio …", de: "Anbei sende ich Ihnen …", level: "B2" }
          ]
        }
      ],
      tab_it: "Cortesia",
      heading_it: "9 · Cortesia ed espressioni quotidiane",
      intro_it: "du per amici, famiglia e bambini; Sie (sempre maiuscolo) per estranei e al lavoro. Sie usa la 3ª persona plurale: Wie heißen Sie? Kommen Sie mit?"
    }
  ]
};
