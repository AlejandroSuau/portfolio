---
name: add-project
description: Interview the user to add a new project card to this portfolio (src/data/projects.js) as a featured or secondary project. Use this whenever the user wants to add, create, showcase, or feature a new project on the portfolio site — phrases like "add a project", "add a featured project", "I want to showcase X", "add Candy Crush as a project", "create a secondary project for Y", or naming a specific game/tool/repo they want on the site — even if they don't mention the file name, the word "skill", or the exact field names. Also use it when the user wants to edit or replace an existing project entry's content.
---

# Add a portfolio project

This skill turns a conversation into a new entry in `src/data/projects.js`. The goal is to
gather exactly what that file needs, in the order that's easiest for a human to answer, and
leave the codebase in a working state when you're done.

## 1. Look at the current shape first

Before asking anything, read `src/data/projects.js` to confirm the schema hasn't drifted
from what's documented here. As of this writing, each entry looks like:

```js
{
  id: "kebab-case-slug",       // unique, derived from the title
  title: "Display Title",
  tier: "featured" | "secondary",
  year: 2025,
  tech: ["C++", "SDL2"],       // short tag strings, shown as pills
  short: "One or two sentences describing what it is and the interesting part.",
  ctaLabel: "Code (GitHub)",   // optional — button text. Omit both ctaLabel/ctaUrl if there's no link.
  ctaUrl: "https://...",       // optional — button target
  cover: "https://... or a local path",   // optional — used as the thumbnail / non-carousel image
  images: ["https://...", "..."]          // optional — if 2+, renders as a carousel with a lightbox
}
```

`featuredProjects` and `secondaryProjects` at the bottom of the file are just `.filter()`
derivations — you never edit those, only the `projects` array. The components
(`ProjectCard.jsx` for featured, the secondary-card block in `Projects.jsx`) already handle
missing `cover`/`images` (no media renders) and missing `ctaUrl` (no button renders), so you
do not need to touch component code for a normal addition — only the data file.

## 2. Interview the user

Ask for these one at a time (or in a small batch if the user clearly wants to move fast) —
don't make them guess the schema:

1. **Title** — what the project/feature is called.
2. **One-line description** — what it is and the one detail that makes it interesting
   (an achievement, a technique, a scale of impact). This becomes `short`.
3. **Tags** — the technologies, techniques, or tools worth surfacing (e.g. `C++`, `OpenGL`,
   `Live ops`). These render as small pills, so keep each one short.
4. **Tier** — explain the real difference so the choice is informed: *featured* gets a full
   card with an image carousel + lightbox in the main grid; *secondary* gets a smaller card
   in the "Other projects" strip with a single image. Ask which fits, or suggest one based on
   what they've told you (e.g. a flagship, polished piece of work → featured).
5. **Year** — when it happened or shipped.

Then handle the two fields that vary the most — don't assume either:

### Images

Ask whether they have actual image files to use, or want to skip images for now. Two cases:

- **They have local files** (a screenshot, a photo, etc.): copy them into
  `public/projects/<id>/` (create the folder). Keep filenames simple (`cover.jpg`,
  `demo-1.jpg`...). Reference them in the data file as:

  ```js
  cover: `${import.meta.env.BASE_URL}projects/<id>/cover.jpg`
  ```

  **Why the template string and not a plain `"/projects/<id>/cover.jpg"` string:** this site
  deploys to GitHub Pages under a sub-path (see `base` in `vite.config.js`, currently
  `/portfolio/`). A hardcoded root-relative path resolves against the domain root and 404s
  once deployed (it can even 404 in `npm run dev` too, since Vite's dev server also serves
  under that same base). `import.meta.env.BASE_URL` always equals the configured `base`, so
  the path stays correct no matter what the base is set to. This file is processed by Vite
  like any other module under `src/`, so `import.meta.env` works fine here even though
  `projects.js` isn't a component.

  Mention briefly that very large images slow the page down — if a screenshot is multiple MB,
  suggest the user compress/resize it before handing it over, but don't block on this.

- **They don't have a public repo to link images from, and no local file either** (e.g. work
  on someone else's closed-source codebase): it's fine to omit `cover`/`images` entirely. The
  card will render without a media block rather than a broken image. Encourage getting at
  least one image if at all possible — visuals are most of what makes a card land — but don't
  force it.

- **Existing convention worth knowing**: today's entries hotlink screenshots from
  `raw.githubusercontent.com` URLs of the user's own public repos. That only works because
  those repos are public and the images already live there — don't suggest it for a project
  that doesn't have a public repo.

### Call-to-action (the button on the card)

Don't assume every project links to GitHub. Ask: does this have a public repo you can link
to? If yes, that's `ctaUrl` with `ctaLabel: "Code (GitHub)"` (the existing convention). If
no — e.g. commercial/closed-source work — ask what, if anything, it should link to instead:
an official game/store page, a video, an article, or genuinely nothing. Set `ctaLabel` to
match whatever it links to (`"Play"`, `"Watch demo"`, `"Learn more"`...). If there's truly
nothing to link to, omit both `ctaLabel` and `ctaUrl` — the button simply won't render.

## 3. Write the entry

- Derive `id` from the title: lowercase, spaces → hyphens, strip punctuation.
- Insert the new object as the last entry among existing entries that share the same `tier`
  value (e.g. a new featured project goes after the last `tier: "featured"` entry, before the
  first secondary one), so the array stays grouped and the new card appears last in its
  section rather than jumbled into the middle.
- Match the existing formatting style in the file (same key order, same quoting) so the diff
  reads cleanly.
- Show the user the entry you're about to write and get a quick confirmation before saving,
  especially for the short description — it's the part most worth getting right.

## 4. Wrap up

After saving, tell the user to run `npm run dev` and check the new card in both the
featured grid / secondary strip and, if it has multiple images, the lightbox. Run
`npm run lint` if you touched anything beyond the data file.
