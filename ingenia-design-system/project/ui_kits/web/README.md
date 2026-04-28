# Ingenia Latam — Web UI Kit

Recreation of the current live Ingenia site (the "en CONSTRUCCIÓN / CAMBIÓ" editorial landing), plus three mock sub-pages that extend the same visual vocabulary (Método, Casos, Contacto) and a Mobile variant.

## Files
- `index.html` — interactive preview with tab switcher (Home / Método / Casos / Contacto / Mobile)
- `Chrome.jsx` — TopBar, Ticker, Logo, SocialCluster, CountryLockup, ConsultoraTagline
- `Hero.jsx` — HeroStatement + EditorialAnchor (the DM-Serif-inside-SG pattern)
- `Sections.jsx` — SiteNav, SectionHeader, PillarCard, ManifestoLine, ContactBlock, Blob
- `styles.css` — all component styles (imports `../../colors_and_type.css`)

## Source truth
- `uploads/Web_1920x1080.jpg` — desktop at 1920
- `uploads/Web_Ingenia_Mobile.jpg` — mobile at ~430

Only the Home page was given. Método / Casos / Contacto are extensions in the same style — they use only tokens already in the system (no invented components or colors).
