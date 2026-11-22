/* Italienisch Wortschatz – PWA ohne Build-Schritt. Daten: data.js (window.VOCAB) */
(function () {
  "use strict";
  var V = window.VOCAB;
  var LEVELS = V.levels || ["A1", "A2", "B1", "B2"];
  var app = document.getElementById("app");
  var LS_SETTINGS = "iw.settings.v1";
  var LS_PROGRESS = "iw.progress.v1.";

  // ---------- storage ----------
  function load(key, def) { try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? def : v; } catch (e) { return def; } }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  var S = Object.assign({ learn: "it", level: "A2", hide: "none", dir: "t2n", group: "alle" }, load(LS_SETTINGS, {}));
  function saveSettings() { save(LS_SETTINGS, S); }
  function progress() { return load(LS_PROGRESS + S.learn, {}); }
  function saveProgress(p) { save(LS_PROGRESS + S.learn, p); }

  // ---------- UI texts ----------
  var TXT = {
    it: { // Oberfläche Deutsch, Ziel Italienisch
      appTitle: "Italienisch Wortschatz", browse: "Stöbern", cards: "Karteikarten", settings: "Einstellungen",
      all: "Alle", showAll: "Alles zeigen", hideNative: "Deutsch verdecken", hideTarget: "Italienisch verdecken",
      rehide: "Alles wieder verdecken", tapHint: "Im Selbsttest tippst du auf ein Wort, um die Lösung aufzudecken.",
      level: "Niveau", upTo: "bis", words: "Wörter", known: "gewusst", again: "Nochmal", gotIt: "Gewusst",
      tapToFlip: "Tippen zum Umdrehen", deckAll: "Alle Gruppen gemischt", start: "Starten", back: "Zurück",
      dirT2N: "Italienisch → Deutsch", dirN2T: "Deutsch → Italienisch", direction: "Abfragerichtung",
      done: "Runde geschafft!", doneSub: "Falsche Karten kamen so lange wieder, bis du sie wusstest.",
      againRound: "Neue Runde", toDecks: "Zur Übersicht", cardsLeft: "übrig", firstTry: "auf Anhieb", repeats: "Wiederholungen",
      decksIntro: "Pro Runde bis zu 20 Karten. Neue und schwierige Karten kommen zuerst, „Nochmal“-Karten kommen gleich wieder.",
      learnDir: "Lernrichtung", learnIt: "Italienisch lernen", learnItSub: "Oberfläche Deutsch, Vorlesen auf Italienisch",
      learnDe: "Deutsch lernen", learnDeSub: "Interfaccia in italiano, lettura in tedesco",
      levelHint: "Es werden alle Wörter bis einschließlich des gewählten Niveaus gezeigt.",
      lv: { A1: "Einstieg", A2: "Grundlagen", B1: "Mittelstufe", B2: "Fortgeschritten" },
      speech: "Vorlesen", speechTest: "Vorlesen testen", speechNone: "Dein Browser bietet keine Sprachausgabe an.",
      speechVoice: "Stimme", speechNoVoice: "Keine italienische Stimme gefunden, es wird die Standardstimme verwendet.",
      reset: "Lernfortschritt zurücksetzen", resetQ: "Lernfortschritt für diese Lernrichtung wirklich löschen?", resetDone: "Fortschritt gelöscht.",
      install: "Auf dem iPhone installieren", installText: "In Safari öffnen, unten auf „Teilen“ tippen und „Zum Home-Bildschirm“ wählen. Danach startet die App im Vollbild und funktioniert auch offline.",
      tip: "So bleibt es hängen:", tipText: "Lerne immer ein ganzes Paar oder einen ganzen Farbblock auf einmal, sprich die Wörter laut mit Artikel und baue einen kleinen Satz daraus, zum Beispiel: La casa è grande, ma la cucina è piccola.",
      plural: "Pl.", noPlural: "kein Plural", sample: "Ciao! Come stai?", offline: "Offline bereit", progressOf: "von",
      empty: "Auf diesem Niveau gibt es hier noch keine Wörter.", target: "Italienisch", native: "Deutsch"
    },
    de: { // Oberfläche Italienisch, Ziel Deutsch
      appTitle: "Vocabolario tedesco", browse: "Sfoglia", cards: "Flashcard", settings: "Impostazioni",
      all: "Tutti", showAll: "Mostra tutto", hideNative: "Nascondi italiano", hideTarget: "Nascondi tedesco",
      rehide: "Nascondi di nuovo", tapHint: "Nell'autoverifica tocca una parola per vedere la soluzione.",
      level: "Livello", upTo: "fino a", words: "parole", known: "sapute", again: "Ancora", gotIt: "Lo so",
      tapToFlip: "Tocca per girare", deckAll: "Tutti i gruppi misti", start: "Inizia", back: "Indietro",
      dirT2N: "Tedesco → Italiano", dirN2T: "Italiano → Tedesco", direction: "Direzione",
      done: "Giro completato!", doneSub: "Le carte sbagliate sono tornate finché non le hai sapute.",
      againRound: "Nuovo giro", toDecks: "Panoramica", cardsLeft: "rimaste", firstTry: "al primo colpo", repeats: "ripetizioni",
      decksIntro: "Fino a 20 carte per giro. Le carte nuove e difficili vengono prima, quelle con „Ancora“ tornano subito.",
      learnDir: "Lingua da imparare", learnIt: "Italienisch lernen", learnItSub: "Oberfläche Deutsch, Vorlesen auf Italienisch",
      learnDe: "Imparare il tedesco", learnDeSub: "Interfaccia in italiano, lettura in tedesco",
      levelHint: "Vengono mostrate tutte le parole fino al livello scelto incluso.",
      lv: { A1: "principiante", A2: "elementare", B1: "intermedio", B2: "avanzato" },
      speech: "Lettura ad alta voce", speechTest: "Prova la lettura", speechNone: "Il browser non offre la sintesi vocale.",
      speechVoice: "Voce", speechNoVoice: "Nessuna voce tedesca trovata, si usa la voce predefinita.",
      reset: "Azzera i progressi", resetQ: "Cancellare davvero i progressi per questa lingua?", resetDone: "Progressi cancellati.",
      install: "Installare su iPhone", installText: "Apri in Safari, tocca „Condividi“ e scegli „Aggiungi alla schermata Home“. L'app si avvia a schermo intero e funziona anche offline.",
      tip: "Per ricordare meglio:", tipText: "Impara sempre una coppia intera o un blocco di colore, ripeti le parole ad alta voce con l'articolo e costruisci una piccola frase, per esempio: Das Haus ist groß, aber die Küche ist klein.",
      plural: "Pl.", noPlural: "senza plurale", sample: "Hallo! Wie geht es dir?", offline: "Pronta offline", progressOf: "di",
      empty: "A questo livello qui non ci sono ancora parole.", target: "Tedesco", native: "Italiano"
    }
  };
  function t(k) { return TXT[S.learn][k]; }
  function L() { return S.learn === "de"; } // Deutsch lernen?

  // ---------- helpers ----------
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function lvOk(e) { return LEVELS.indexOf(e.level) <= LEVELS.indexOf(S.level); }
  function targetOf(e) { return L() ? e.de : e.it; }
  function nativeOf(e) { return L() ? e.it : e.de; }
  function gTab(g) { return L() ? (g.tab_it || g.tab) : g.tab; }
  function gHead(g) { return L() ? (g.heading_it || g.heading) : g.heading; }
  function gIntro(g) { return L() ? (g.intro_it || "") : g.intro; }
  function bTitle(b) { return L() ? (b.title_it || b.title) : b.title; }
  function bNote(b) { return L() ? b.note_it : b.note; }
  function pluralLine(e) { if (!e.pl) return ""; return e.pl === "–" ? t("noPlural") : (/^(nur )?Pl\./.test(e.pl) ? e.pl.replace("nur Pl.", L() ? "solo plurale" : "nur Plural") : t("plural") + " " + e.pl); }
  function entryNote(e) { return L() ? "" : (e.note || ""); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  var COLORS = 6;

  // filter a block by level → returns null if empty
  function filterBlock(b) {
    var c = Object.assign({}, b);
    if (b.kind === "pairs") c.items = b.items.filter(function (p) { return lvOk(p[0]) && lvOk(p[1]); });
    else if (b.kind === "clusters") c.items = b.items.map(function (cl) { return Object.assign({}, cl, { words: cl.words.filter(lvOk) }); }).filter(function (cl) { return cl.words.length; });
    else c.items = b.items.filter(lvOk);
    return c.items.length ? c : null;
  }
  function entriesOf(b) { return b.kind === "pairs" ? [].concat.apply([], b.items) : b.kind === "clusters" ? [].concat.apply([], b.items.map(function (c) { return c.words; })) : b.items; }
  function groupCards(g) {
    var seen = {}, out = [];
    g.blocks.forEach(function (b) {
      var fb = filterBlock(b); if (!fb) return;
      entriesOf(fb).forEach(function (e) {
        var id = g.id + "|" + e.it + "|" + e.de;
        if (seen[id]) return; seen[id] = 1; out.push({ id: id, e: e, g: g });
      });
    });
    return out;
  }

  // ---------- speech ----------
  var synth = window.speechSynthesis;
  var hasSpeech = !!(synth && window.SpeechSynthesisUtterance);
  if (!hasSpeech) document.documentElement.classList.add("no-speech");
  function speechLang() { return L() ? "de-DE" : "it-IT"; }
  function pickVoice() {
    if (!hasSpeech) return null;
    var lang = speechLang(), pre = lang.slice(0, 2), vs = synth.getVoices() || [];
    return vs.filter(function (v) { return v.lang === lang || v.lang === lang.replace("-", "_"); })[0] || vs.filter(function (v) { return (v.lang || "").toLowerCase().indexOf(pre) === 0; })[0] || null;
  }
  if (hasSpeech && synth.addEventListener) synth.addEventListener("voiceschanged", function () {});
  function speak(text) {
    if (!hasSpeech || !text) return;
    var clean = String(text).replace(/…/g, " ").replace(/\s\/\s/g, ", ").replace(/\(.*?\)/g, "").trim();
    synth.cancel();
    var u = new SpeechSynthesisUtterance(clean);
    u.lang = speechLang(); u.rate = 0.9;
    var v = pickVoice(); if (v) u.voice = v;
    synth.speak(u);
  }
  function speakBtn(text, cls) {
    if (!hasSpeech) return "";
    return '<button class="speak ' + (cls || "") + '" data-act="speak" data-text="' + esc(text) + '" aria-label="' + esc(t("speech")) + '">🔊</button>';
  }

  // ---------- browse ----------
  var revealed = {};
  function wordHTML(e, id, cls) {
    var hideT = S.hide === "target" && !revealed[id];
    var hideN = S.hide === "native" && !revealed[id];
    var tap = S.hide !== "none";
    var chip = '<span class="hidden-chip">?</span>';
    var pl = L() ? pluralLine(e) : "";
    var note = entryNote(e);
    return '<div class="w ' + (cls || "") + (tap ? " tappable" : "") + '" data-act="reveal" data-id="' + id + '">' +
      '<div class="wtop"><span class="it" lang="' + (L() ? "de" : "it") + '">' + (hideT ? chip : esc(targetOf(e))) + "</span>" + (hideT ? "" : speakBtn(targetOf(e))) + "</div>" +
      (pl && !hideT ? '<div class="wn">' + esc(pl) + "</div>" : "") +
      '<div class="de">' + (hideN ? chip : esc(nativeOf(e))) + "</div>" +
      (note && !hideT && !hideN ? '<div class="wn">' + esc(note) + "</div>" : "") +
      "</div>";
  }
  function tableHTML(tb) {
    return '<div class="block"><h3>' + esc(tb.title) + '</h3><div class="table-wrap"><table><thead><tr>' +
      tb.columns.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      tb.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") +
      "</tbody></table></div>" + (tb.note ? '<p class="note">' + esc(tb.note) + "</p>" : "") + "</div>";
  }
  function blockHTML(b, gi, bi) {
    var key = gi + "-" + bi, h = "";
    if (b.kind === "pairs") {
      var sym = (L() ? (b.sym_de || b.sym) : b.sym) || "↔";
      h = '<div class="grid pairs">' + b.items.map(function (p, i) {
        return '<div class="card pair">' + wordHTML(p[0], key + "-" + i + "-a", "a") + '<div class="sym">' + esc(sym) + "</div>" + wordHTML(p[1], key + "-" + i + "-b", "b") + "</div>";
      }).join("") + "</div>";
    } else if (b.kind === "words") {
      h = '<div class="grid words">' + b.items.map(function (e, i) { return '<div class="card">' + wordHTML(e, key + "-" + i) + "</div>"; }).join("") + "</div>";
    } else if (b.kind === "clusters") {
      h = '<div class="grid clusters">' + b.items.map(function (c, i) {
        var n = (i % COLORS) + 1;
        return '<div class="cluster" style="background:var(--t' + n + ')"><div class="label" style="color:var(--c' + n + ')">' + esc(L() ? (c.label_it || c.label) : c.label) + '</div><div class="cwords">' +
          c.words.map(function (e, j) { return '<div class="cw">' + wordHTML(e, key + "-" + i + "-" + j) + "</div>"; }).join("") + "</div></div>";
      }).join("") + "</div>";
    } else {
      var n = b.items.length;
      h = '<div class="scale">' + b.items.map(function (e, i) {
        var pct = n > 1 ? 100 - Math.round(i * 100 / (n - 1)) : 100;
        return '<div class="step"><div class="bar" style="opacity:' + (0.25 + 0.75 * pct / 100) + '"></div><div class="step-in"><div class="pct">' + pct + " %</div>" + wordHTML(e, key + "-" + i) + "</div></div>";
      }).join("") + "</div>";
    }
    var note = bNote(b);
    return '<section class="block"><h3>' + esc(bTitle(b)) + "</h3>" + h + (note ? '<p class="note">' + esc(note) + "</p>" : "") + "</section>";
  }
  function groupHTML(g) {
    var gi = V.groups.indexOf(g);
    var color = "var(--c" + ((gi % COLORS) + 1) + ")";
    var tables = (L() ? g.tables_de : g.tables) || [];
    tables = tables.filter(function (tb) { return !tb.level || LEVELS.indexOf(tb.level) <= LEVELS.indexOf(S.level); });
    var blocks = g.blocks.map(function (b, bi) { var fb = filterBlock(b); return fb ? blockHTML(fb, gi, bi) : ""; }).join("");
    return '<section class="group" id="g-' + g.id + '" style="--gc:' + color + '"><h2>' + esc(gHead(g)) + '</h2><p class="intro">' + esc(gIntro(g)) + "</p>" +
      tables.filter(function (x) { return x.position === "before"; }).map(tableHTML).join("") +
      (blocks || '<p class="note">' + esc(t("empty")) + "</p>") +
      tables.filter(function (x) { return x.position !== "before"; }).map(tableHTML).join("") + "</section>";
  }
  function seg(name, opts, val) {
    return '<div class="segmented" role="group">' + opts.map(function (o) {
      return '<button data-act="set" data-k="' + name + '" data-v="' + o[0] + '" class="' + (o[0] === val ? "active" : "") + '" aria-pressed="' + (o[0] === val) + '">' + esc(o[1]) + "</button>";
    }).join("") + "</div>";
  }
  function levelSeg() { return seg("level", LEVELS.map(function (l) { return [l, l]; }), S.level); }
  function renderBrowse(gid) {
    if (gid) S.group = gid;
    if (S.group !== "alle" && !V.groups.some(function (g) { return g.id === S.group; })) S.group = "alle";
    saveSettings();
    var chips = '<div class="chips" role="tablist">' + [["alle", t("all")]].concat(V.groups.map(function (g) { return [g.id, gTab(g)]; })).map(function (c) {
      return '<button class="chip ' + (S.group === c[0] ? "active" : "") + '" data-act="group" data-v="' + c[0] + '" role="tab" aria-selected="' + (S.group === c[0]) + '">' + esc(c[1]) + "</button>";
    }).join("") + "</div>";
    var controls = '<div class="controls">' + chips +
      seg("hide", [["none", t("showAll")], ["native", t("hideNative")], ["target", t("hideTarget")]], S.hide) +
      '<div class="row"><span class="hint" style="margin:0">' + esc(t("level")) + ' ' + esc(t("upTo")) + ':</span><div style="flex:1">' + levelSeg() + "</div></div>" +
      (S.hide !== "none" ? '<div class="row"><button class="btn small" data-act="rehide">' + esc(t("rehide")) + '</button><span class="hint">' + esc(t("tapHint")) + "</span></div>" : "") +
      "</div>";
    var groups = V.groups.filter(function (g) { return S.group === "alle" || g.id === S.group; });
    app.innerHTML = controls + groups.map(groupHTML).join("") +
      (S.group === "alle" ? '<div class="callout"><b>' + esc(t("tip")) + "</b> " + esc(t("tipText")) + "</div>" : "");
  }

  // ---------- flashcards ----------
  var session = null;
  function deckStats(cards, p) { var k = 0; cards.forEach(function (c) { if ((p[c.id] || 0) > 0) k++; }); return k; }
  function renderDecks() {
    session = null;
    var p = progress();
    var all = [];
    var decks = V.groups.map(function (g, gi) {
      var cards = groupCards(g); all = all.concat(cards);
      return deckHTML(g.id, gTab(g), cards, p, "var(--c" + ((gi % COLORS) + 1) + ")");
    }).join("");
    app.innerHTML = '<div class="block"><h3>' + esc(t("direction")) + "</h3>" + seg("dir", [["t2n", t("dirT2N")], ["n2t", t("dirN2T")]], S.dir) +
      '<div class="row"><span class="hint" style="margin:0">' + esc(t("level")) + " " + esc(t("upTo")) + ':</span><div style="flex:1">' + levelSeg() + "</div></div>" +
      '<p class="hint">' + esc(t("decksIntro")) + '</p></div><div class="deck-list">' + deckHTML("alle", t("deckAll"), all, p, "var(--accent)") + decks + "</div>";
  }
  function deckHTML(id, name, cards, p, color) {
    var k = deckStats(cards, p), n = cards.length, pct = n ? Math.round(k * 100 / n) : 0;
    return '<button class="deck" style="--gc:' + color + '" data-act="deck" data-v="' + id + '"><div class="dt">' + esc(name) + '</div><div class="ds">' + k + " " + esc(t("progressOf")) + " " + n + " " + esc(t("known")) + " · " + pct + ' %</div><div class="progress"><div style="width:' + pct + '%"></div></div></button>';
  }
  function startSession(id) {
    var p = progress();
    var cards = id === "alle" ? [].concat.apply([], V.groups.map(groupCards)) : groupCards(V.groups.filter(function (g) { return g.id === id; })[0] || V.groups[0]);
    shuffle(cards);
    cards.sort(function (a, b) { return (p[a.id] || 0) - (p[b.id] || 0); });
    var queue = cards.slice(0, 20);
    session = { id: id, queue: queue, total: queue.length, firstOk: 0, repeats: 0, wrong: {}, flipped: false };
    renderStudy();
  }
  function cardFace(e, showTarget, isBack) {
    var lang = showTarget ? (L() ? "de" : "it") : (L() ? "it" : "de");
    var word = showTarget ? targetOf(e) : nativeOf(e);
    var label = showTarget ? t("target") : t("native");
    var extra = "";
    if (isBack) {
      if (L() && showTarget) extra = pluralLine(e) ? '<div class="fn">' + esc(pluralLine(e)) + "</div>" : "";
      if (!L() && entryNote(e)) extra += '<div class="fn">' + esc(entryNote(e)) + "</div>";
    } else if (L() && showTarget && pluralLine(e)) extra = "";
    return '<div class="face' + (isBack ? " back" : " front") + '"><div class="lang">' + esc(label) + "</div>" +
      (showTarget ? speakBtn(word, "big-speak") : (isBack ? speakBtn(targetOf(e), "big-speak") : "")) +
      '<div class="big" lang="' + lang + '">' + esc(word) + "</div>" + extra +
      (isBack ? '<div class="sub">' + esc(showTarget ? nativeOf(e) : targetOf(e)) + "</div>" : '<div class="tapme">' + esc(t("tapToFlip")) + "</div>") + "</div>";
  }
  function renderStudy() {
    if (!session) return renderDecks();
    if (!session.queue.length) {
      app.innerHTML = '<div class="done"><div class="big">🎉</div><h2>' + esc(t("done")) + '</h2><p class="hint">' + esc(t("doneSub")) + '</p><div class="stats"><div class="stat"><b>' + session.firstOk + "/" + session.total + "</b>" + esc(t("firstTry")) + '</div><div class="stat"><b>' + session.repeats + "</b>" + esc(t("repeats")) + '</div></div><div class="row" style="justify-content:center"><button class="btn primary" data-act="deck" data-v="' + session.id + '">' + esc(t("againRound")) + '</button><button class="btn" data-act="decks">' + esc(t("toDecks")) + "</button></div></div>";
      return;
    }
    var c = session.queue[0], e = c.e;
    var gi = V.groups.indexOf(c.g);
    var frontTarget = S.dir === "t2n";
    var known = session.total - session.queue.filter(function (x, i, a) { return a.indexOf(x) === i; }).length;
    app.innerHTML = '<div class="study" style="--gc:var(--c' + ((gi % COLORS) + 1) + ')">' +
      '<div class="study-head"><button class="backbtn" data-act="decks">‹ ' + esc(t("back")) + '</button><span style="align-self:center">' + esc(gTab(c.g)) + " · " + session.queue.length + " " + esc(t("cardsLeft")) + "</span></div>" +
      '<div class="progress"><div style="width:' + Math.round(known * 100 / session.total) + '%"></div></div>' +
      '<div class="flip' + (session.flipped ? " flipped" : "") + '" data-act="flip" role="button" aria-label="' + esc(t("tapToFlip")) + '"><div class="flip-inner">' +
      cardFace(e, frontTarget, false) + cardFace(e, !frontTarget, true) + "</div></div>" +
      '<div class="answer"><button class="btn again" data-act="answer" data-v="0" ' + (session.flipped ? "" : "disabled style=\"opacity:.45\"") + '>↺ ' + esc(t("again")) + '</button><button class="btn ok" data-act="answer" data-v="1" ' + (session.flipped ? "" : "disabled style=\"opacity:.45\"") + '>✓ ' + esc(t("gotIt")) + "</button></div></div>";
  }
  function answer(ok) {
    var c = session.queue.shift(), p = progress();
    if (ok) {
      p[c.id] = Math.min(5, (p[c.id] || 0) + 1);
      if (!session.wrong[c.id]) session.firstOk++;
    } else {
      p[c.id] = 0; session.wrong[c.id] = 1; session.repeats++;
      session.queue.splice(Math.min(3, session.queue.length), 0, c);
    }
    saveProgress(p);
    session.flipped = false;
    renderStudy();
  }

  // ---------- settings ----------
  function renderSettings() {
    var v = pickVoice();
    app.innerHTML = '<div class="info">' +
      '<div class="block"><h3>' + esc(t("learnDir")) + '</h3><div class="deck-list">' +
      '<button class="deck" style="--gc:var(--green)" data-act="learn" data-v="it" aria-pressed="' + (!L()) + '"><div class="dt">🇮🇹 ' + esc(TXT.it.learnIt) + (L() ? "" : " ✓") + '</div><div class="ds">' + esc(TXT.it.learnItSub) + "</div></button>" +
      '<button class="deck" style="--gc:#d4a017" data-act="learn" data-v="de" aria-pressed="' + L() + '"><div class="dt">🇩🇪 ' + esc(TXT.de.learnDe) + (L() ? " ✓" : "") + '</div><div class="ds">' + esc(TXT.de.learnDeSub) + "</div></button></div></div>" +
      '<div class="block"><h3>' + esc(t("level")) + "</h3>" + levelSeg() + '<p class="hint">' + esc(S.level + " · " + t("lv")[S.level] + ". " + t("levelHint")) + "</p></div>" +
      '<div class="block"><h3>' + esc(t("speech")) + "</h3>" + (hasSpeech ? '<button class="btn" data-act="speak" data-text="' + esc(t("sample")) + '">🔊 ' + esc(t("speechTest")) + '</button><p class="hint">' + esc(v ? t("speechVoice") + ": " + v.name + " (" + v.lang + ")" : t("speechNoVoice")) + "</p>" : '<p class="hint">' + esc(t("speechNone")) + "</p>") + "</div>" +
      '<div class="block"><h3>' + esc(t("install")) + '</h3><p>' + esc(t("installText")) + "</p></div>" +
      '<div class="block"><button class="btn block" data-act="reset">' + esc(t("reset")) + "</button></div>" +
      '<p class="hint" style="text-align:center">Italiano · v' + esc(V.version) + "</p></div>";
  }

  // ---------- router ----------
  function route() {
    var parts = (location.hash || "#/stoebern").replace(/^#\/?/, "").split("/");
    var view = parts[0] || "stoebern";
    document.documentElement.lang = L() ? "it" : "de";
    document.getElementById("title").textContent = t("appTitle");
    document.title = t("appTitle");
    var labels = { stoebern: t("browse"), karten: t("cards"), einstellungen: t("settings") };
    Array.prototype.forEach.call(document.querySelectorAll(".tabbar a"), function (a) {
      var k = a.getAttribute("data-nav"); a.classList.toggle("active", k === view); a.querySelector("span:last-child").textContent = labels[k];
      if (k === view) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var pill = document.getElementById("pill");
    pill.textContent = (L() ? "DE" : "IT") + " · " + S.level;
    if (view === "karten") { if (parts[1]) startSession(parts[1]); else renderDecks(); }
    else if (view === "einstellungen") renderSettings();
    else renderBrowse(parts[1]);
  }
  function rerender() { var y = window.scrollY; route(); window.scrollTo(0, y); }

  app.addEventListener("click", function (ev) {
    var el = ev.target.closest("[data-act]"); if (!el || !app.contains(el)) return;
    var act = el.getAttribute("data-act"), v = el.getAttribute("data-v");
    if (act === "speak") { ev.stopPropagation(); speak(el.getAttribute("data-text")); return; }
    if (act === "reveal") { if (S.hide === "none") return; var id = el.getAttribute("data-id"); revealed[id] = !revealed[id]; var y = window.scrollY; renderBrowse(); window.scrollTo(0, y); return; }
    if (act === "rehide") { revealed = {}; rerender(); return; }
    if (act === "set") { S[el.getAttribute("data-k")] = v; if (el.getAttribute("data-k") === "hide") revealed = {}; saveSettings(); rerender(); return; }
    if (act === "group") { revealed = {}; S.group = v; saveSettings(); history.replaceState(null, "", "#/stoebern/" + v); route(); window.scrollTo(0, 0); return; }
    if (act === "deck") { history.replaceState(null, "", "#/karten"); startSession(v); window.scrollTo(0, 0); return; }
    if (act === "decks") { renderDecks(); window.scrollTo(0, 0); return; }
    if (act === "flip") { session.flipped = !session.flipped; el.classList.toggle("flipped", session.flipped); el.classList.toggle("unflipped", !session.flipped); Array.prototype.forEach.call(app.querySelectorAll(".answer .btn"), function (b) { b.disabled = !session.flipped; b.style.opacity = session.flipped ? "" : ".45"; }); return; }
    if (act === "answer") { if (session && session.flipped) answer(v === "1"); return; }
    if (act === "learn") { S.learn = v; revealed = {}; saveSettings(); if (hasSpeech) synth.cancel(); rerender(); return; }
    if (act === "reset") { if (confirm(t("resetQ"))) { saveProgress({}); alert(t("resetDone")); } return; }
  });
  document.addEventListener("keydown", function (ev) {
    if (!session || !app.querySelector(".flip")) return;
    if (ev.key === " " || ev.key === "Enter") { ev.preventDefault(); app.querySelector(".flip").click(); }
    else if (session.flipped && (ev.key === "ArrowRight" || ev.key === "1")) answer(true);
    else if (session.flipped && (ev.key === "ArrowLeft" || ev.key === "0")) answer(false);
  });
  window.addEventListener("hashchange", route);
  route();

  // ---------- service worker ----------
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", function () { navigator.serviceWorker.register("./sw.js").catch(function (e) { console.warn("SW", e); }); });
  }
})();
