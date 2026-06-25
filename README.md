# Starli static website

Static GitHub Pages website for Starli and Starli labs, MB.

## Structure

- `index.html` — English Starli product landing page.
- `lt/index.html` — Lithuanian Starli product landing page.
- `labs/index.html` — Starli Labs company and product portfolio page.
- `blog/index.html` — English blog index.
- `blog/reflect-after-difficult-conversation.html` — English pillar article.
- `lt/blog/index.html` — Lithuanian blog index.
- `lt/blog/refleksija-po-sunkaus-pokalbio.html` — Lithuanian article.
- `privacy.html`, `terms.html`, `contact.html` — company legal and contact pages.
- `digital-downloads.html`, `digital-downloads-privacy.html`, `digital-downloads-terms.html` — preserved Digital Downloads pages.
- `starli.html` — compatibility redirect to the root Starli homepage.
- `app-store.html` — centralized App Store redirect and fallback link.
- `404.html` — GitHub Pages error page.
- `style.css` — shared visual system and layout CSS.
- `sitemap.xml`, `robots.txt`, `CNAME`, `.nojekyll` — GitHub Pages and SEO support files.

## Preview locally

From this directory:

```bash
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

## App Store URL

The Starli App Store CTA is centralized in:

- `app-store.html`

All visible App Store CTA buttons link to this local redirect page. Update the official Apple URL there if the App Store listing URL ever changes.

Verified listing at time of update:

```text
https://apps.apple.com/us/app/starli-mind/id6768002791
```

## Language versions

English pages live at the root or under `/blog/`.

Lithuanian pages live under `/lt/`.

Each major bilingual page should include:

- `lang` attribute;
- canonical URL;
- reciprocal `hreflang` links for `en`, `lt`, and `x-default`;
- natural localized copy, not a literal machine translation.

## Adding a blog article

1. Create the English article under `blog/`.
2. Create the Lithuanian counterpart under `lt/blog/`.
3. Add both to their blog index pages.
4. Add reciprocal `hreflang` tags.
5. Add both URLs to `sitemap.xml`.
6. Use a real publication date.

Avoid thin placeholder posts, invented research citations, fake testimonials, or medical claims.

## Deploying to GitHub Pages

1. Review changes locally.
2. Commit the static files.
3. Push to the GitHub Pages branch or repository configured for `starli.app`.
4. Confirm `CNAME` still contains `starli.app`.
5. Open `https://starli.app/`, `https://starli.app/lt/`, and `https://starli.app/sitemap.xml`.

## Pre-deployment checklist

- No page says the live app is "in development".
- No internal links point to `starli.html` except the compatibility page itself.
- App Store CTAs open `app-store.html`, then the official Apple listing.
- `privacy.html`, `terms.html`, `contact.html`, and Digital Downloads URLs still work.
- No local development URLs, absolute local filesystem paths, `href="#"`, or placeholder URLs remain in production HTML.
- Metadata, canonical URLs, and `hreflang` tags match the public URL structure.
- All images have `alt` text or intentionally empty decorative `alt=""`.
- Mobile widths around 320, 375, 768, 1024, and 1440 px have no horizontal scroll.
