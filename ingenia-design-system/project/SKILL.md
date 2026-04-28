---
name: ingenia-design
description: Use this skill to generate well-branded interfaces and assets for Ingenia Latam — a LatAm business, brand & growth consultancy with an editorial voice — either for production or throwaway prototypes/mocks/slides. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and `fonts/` and create static HTML files for the user to view. Link `colors_and_type.css` from the root — it provides every brand token as CSS variables.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, language, deliverable format, length), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Defaults:
- Content is in **Spanish (neutro LatAm)**. Never switch to English unless asked.
- Editorial hero words ALWAYS use DM Serif Display UPPERCASE; body uses Space Grotesk.
- Warm paper `#f4f2ee` is the preferred page background, not pure white.
- One `#ff110a` red accent per view — never multiple red surfaces fighting.
- Blobs and backgrounds are real photographs in `assets/bg-*.{jpg,png}` — do not recreate with CSS gradients.
