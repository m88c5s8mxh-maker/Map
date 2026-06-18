/**
 * Branchen-Referenz- & Design-DNA-Bibliothek (Mittelstand).
 * Kuratiert aus echten Top-Tier-Seiten (Awwwards / Siteinspire / Best-of-Listen).
 * Pro Branche: Leitreferenzen, Farb-/Font-DNA, Layout-Struktur, Motion, Hero-Typ.
 * Wird in den Web-Designer-Prompt injiziert → "bau auf diesem Niveau, kein Template".
 */

const PROFILES = {
  gastronomie: {
    label: "Gastronomie / Restaurant / Bar / Café",
    keywords: ["restaurant", "bar", "café", "cafe", "bistro", "gastro", "küche", "cocktail", "wein", "brauerei", "pizzeria", "imbiss", "catering", "theke"],
    refs: "Eleven Madison Park, Noma (noma.dk), Casper's Caviar, Kettner's Townhouse — Fine-Dining-Editorial.",
    aesthetic: "Ivory/Off-White ODER tiefes Dark + EIN Akzent (Bordeaux, Forest, Gold). Editorial-Serif (Canela/Cormorant) + neutrales Grotesque. Großzügige Bild-Reveals.",
    layout: "Cinematic Hero (1 Foto/Video, KEIN Text-Overlay) → Mood-Statement (1-2 Zeilen groß) → Speisekarte/Drinks als editorial Foto-Grid → Story/Chef → Reservierung-CTA → Öffnungszeiten/Location.",
    motion: "Langsame Bild-Reveals, Hover zeigt Gericht-Foto neben Menüpunkt, Custom Cursor. Sanft, sensorisch.",
    hero: "Großes Food-/Interieur-Foto, atmosphärisch, minimaler Text.",
  },
  handwerk: {
    label: "Handwerk / Bau / Elektro / Sanitär / Maler / KFZ",
    keywords: ["handwerk", "bau", "elektr", "sanitär", "heizung", "maler", "dach", "tischler", "schreiner", "kfz", "garten", "garten-", "installateur", "fliesen", "zimmerei", "metallbau"],
    refs: "Solide B2B-Handwerks-Sites mit Vertrauens-Fokus; Bold Stats, klare Leistungs-Cards (Stil: Stripe-Klarheit trifft Bau-Robustheit).",
    aesthetic: "Kräftig, vertrauenswürdig: dunkles Anthrazit/Stahlblau ODER sauberes Weiß + kräftiger Akzent (Orange/Gelb = Handwerk-Energie, oder Firmen-Farbe). Robuste Grotesk (Inter/Geist). Keine verspielten Serifs.",
    layout: "Hero mit klarem Nutzenversprechen + starke Kennzahl (z.B. '500+ Projekte', '25 Jahre') → Leistungen als Card-Grid mit Icons → Referenz-Projekte/Vorher-Nachher → Bewertungen → Ablauf (3 Schritte) → Kontakt/Angebot-CTA (Telefon prominent!).",
    motion: "Minimal, funktional: Counter für Stats, sanfte Fade-ins, Hover-Lift auf Cards. KEINE Spielerei — Seriosität.",
    hero: "Team/Projekt-Foto oder kräftige Typo + Stat. Telefon-Button sichtbar.",
  },
  arztpraxis: {
    label: "Arztpraxis / Gesundheit / Therapie / Zahnarzt",
    keywords: ["arzt", "praxis", "zahn", "ärzt", "therapie", "physio", "heilpraktik", "klinik", "medizin", "gesundheit", "ortho", "derma", "psycho"],
    refs: "Moderne Praxis-Sites: ruhig, hell, vertrauensbildend (Stil: clean healthcare, viel Weißraum).",
    aesthetic: "Hell, beruhigend: Weiß/Off-White + sanftes Blau/Grün/Teal als Akzent. Freundliche, gut lesbare Sans (Inter/DM Sans), evtl. weicher Serif für Überschriften. Viel Luft.",
    layout: "Hero: freundliches Versprechen + Termin-CTA → Leistungen/Fachgebiete (Card-Grid) → Team mit Fotos (People-forward) → Praxis-Eindrücke (Galerie) → Anfahrt/Öffnungszeiten/Kassen → Online-Termin-CTA.",
    motion: "Sehr dezent: sanfte Fade-ups, keine aggressiven Effekte. Ruhe = Vertrauen.",
    hero: "Helles Praxis-/Team-Foto, freundlicher Ton, Termin-Button.",
  },
  kanzlei: {
    label: "Kanzlei / Beratung / Steuerberater / Versicherung",
    keywords: ["kanzlei", "anwalt", "rechts", "steuer", "berat", "consulting", "versicher", "notar", "wirtschaftsprüf", "finanz"],
    refs: "Kingsley Napley, Harper James — Credibility-first, editorial Typography, Trust-Led.",
    aesthetic: "Seriös, edel: Navy/Deep Charcoal/Warm White + gedämpftes Gold oder Teal. Serif mit Gravitas (Canela/Tiempos) + Neue Haas/Inter Body. Bewusste Reduktion.",
    layout: "Hero: Credibility-Statement + starke Kennzahl ('30 Jahre', '€X erstritten') → Leistungsbereiche (klares Card-Grid) → Auszeichnungen/Rankings → Team (Foto + Spezialisierung) → Mandanten/Cases → Beratungsgespräch-CTA.",
    motion: "Maximal 1 Motion-Highlight, Counter für Stats. Kein Custom-Cursor, kein Scroll-Jacking. Stille schafft Vertrauen.",
    hero: "Ruhige Typo + Kennzahl, evtl. Architektur-/Portrait-Foto.",
  },
  immobilien: {
    label: "Immobilien / Makler / Bauträger",
    keywords: ["immobil", "makler", "wohnung", "haus verkauf", "bauträger", "real estate", "grundstück", "vermietung", "hausverwaltung"],
    refs: "SHVO, The Agency (theagencyre.com), Elyse Residence — Architektur-Foto-Qualität, luxuriös-minimal.",
    aesthetic: "Schwarz/Weiß + EIN Brand-Akzent; Architektur-Fotografie dominiert. Geometrisches Sans / Tracked Caps für Luxury, sauberes Grotesque für Brokerage.",
    layout: "Cinematic Hero (Architektur-Render/Drohnen-Foto) → Objekt-Highlights mit Kennzahlen (m², Zimmer, Lage) → Lifestyle/Neighborhood → Objekt-Galerie (Full-Screen) → Leistungen (Verkauf/Vermietung/Bewertung) → Kontakt/Besichtigung-CTA.",
    motion: "Pinned Scroll (Bild bleibt, Text scrollt), Parallax-Tiefe auf Immobilien-Fotos, horizontales Magazin-Scroll. Edel.",
    hero: "Großes Architektur-/Immobilienfoto, tracked Caps, premium.",
  },
  agentur: {
    label: "Agentur / Studio / Marketing / IT-Dienstleister",
    keywords: ["agentur", "studio", "marketing", "werbung", "design", "software", "it-", "webdesign", "media", "kreativ", "digital"],
    refs: "Locomotive, Immersive Garden, Resn — die Arbeit IST der Hero, experimentell.",
    aesthetic: "Near-Black + EIN elektrischer Akzent (Acid Green, Violet, Orange). Mega-Display-Font (Druk/Monument/Editorial New, 10-20vw), kondensiert.",
    layout: "Hero: Cases direkt sichtbar (kein Willkommens-Intro) → Selected Work (3-6 groß, nummeriert) → Services/Approach (Manifesto) → About/Team knapp → Client-Logos → 'Start a Project'-CTA.",
    motion: "Custom Cursor (Form-Wechsel), Page Transitions, Text-Scramble/Glitch, Bild folgt Cursor auf Portfolio-Items. Experimentell erlaubt.",
    hero: "Cases/Showreel als Hero, mutige Mega-Typo.",
  },
  produkt: {
    label: "Einzelhandel / Produkt / E-Commerce / Manufaktur",
    keywords: ["shop", "produkt", "store", "manufaktur", "marke", "mode", "möbel", "schmuck", "kosmetik", "lebensmittel", "brennerei", "rösterei", "handel"],
    refs: "Polène (polene-paris.com), Hopaal, Crescente Sicily — ultra-minimal, Material-Culture sells.",
    aesthetic: "Warm White/Sand/Stone Grey/Schwarz — Produkt-Fotografie setzt die Farbe. Clean Grotesque + gelegentlicher kursiver Serif.",
    layout: "Hero: Produkt dramatisch freigestellt/im Lifestyle + 1 Satz Brand-Claim → Produkt-Fokus/Kategorien → Brand Story/Craft/Materialien (editorial Scroll) → Bestseller-Grid → Werte/About → Newsletter + Footer.",
    motion: "Smooth Varianten-Hover, editorial Scroll (Text/Bild verschiedene Speeds), taktil. Premium-Ruhe.",
    hero: "Produkt freigestellt oder Lifestyle-Foto, knapper Claim.",
  },
  beauty: {
    label: "Beauty / Friseur / Kosmetik / Fitness / Wellness",
    keywords: ["friseur", "beauty", "kosmetik", "nagel", "wellness", "spa", "fitness", "studio fitness", "yoga", "massage", "barber", "make-up", "makeup"],
    refs: "kholodovamakeup.com (Fotos sind das Produkt) — minimal, Foto-Grid, unsichtbare Nav.",
    aesthetic: "Bei Foto-fokussierten (Friseur/Make-up): minimal, Fotos im Vordergrund, warme Monochrome ODER edel-dark. Bei Fitness: energetisch, dark + kräftiger Akzent.",
    layout: "Foto-fokus: Hero text-only ODER full-bleed Foto, transparente Nav, Justified-Foto-Galerie, Lightbox. Fitness: Hero mit Energie-Claim → Angebote/Kurse → Trainer → Mitgliedschaft-CTA.",
    motion: "Foto-Portfolio: NUR img-Hover-transform + IntersectionObserver-Fade — KEIN GSAP/Canvas/Cursor-Glow (lenkt von Fotos ab). Fitness: dynamischer.",
    hero: "Foto-Portfolio: Bild im Vordergrund, minimaler Text.",
  },
};

function detect(text) {
  const t = (text || "").toLowerCase();
  let best = null, bestScore = 0;
  for (const [key, p] of Object.entries(PROFILES)) {
    const score = p.keywords.filter(k => t.includes(k)).length;
    if (score > bestScore) { bestScore = score; best = key; }
  }
  return best;
}

// Liefert den injizierbaren Referenz-Block (oder "" wenn keine Branche erkannt)
function industryProfile(text) {
  const key = detect(text);
  if (!key) return "";
  const p = PROFILES[key];
  return `

=== BRANCHEN-REFERENZ & DESIGN-DNA: ${p.label} (ZWINGEND als Qualitätsmaßstab nutzen) ===
Orientiere dich am Niveau dieser Top-Referenzen (kein Klon, gleiche Liga): ${p.refs}
ÄSTHETIK: ${p.aesthetic}
LAYOUT-DNA (Sektion-Reihenfolge): ${p.layout}
MOTION: ${p.motion}
HERO: ${p.hero}
Wähle Farben/Fonts/Motion exakt passend zu dieser Branche — NICHT den generischen Dark-Default, wenn die Branche etwas anderes verlangt (z.B. Arztpraxis = hell & ruhig, Handwerk = robust & vertrauensvoll).`;
}

module.exports = { industryProfile, detect, PROFILES };
