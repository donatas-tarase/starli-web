# Starli website agent notes

Purpose: maintain a fast, static, bilingual website for the live Starli iOS app and the broader Starli Labs portfolio.

## Constraints

- Work only inside this website directory.
- Keep the site fully static and GitHub Pages compatible.
- Do not add React, Next.js, Vue, CMS, server code, databases, API keys, or a build system unless the owner explicitly requests it.
- Do not push, publish, deploy, or modify files outside this directory.
- Preserve legal pages and Digital Downloads URLs.
- Do not invent product, privacy, pricing, security, clinical, rating, testimonial, user-count, or subscription claims.

## URL structure

- `/` — English Starli product landing page.
- `/lt/` — Lithuanian Starli product landing page.
- `/labs/` — Starli Labs company and product portfolio page.
- `/blog/` — English blog index.
- `/lt/blog/` — Lithuanian blog index.
- `/privacy.html`, `/terms.html`, `/contact.html` — company pages.
- `/digital-downloads.html`, `/digital-downloads-privacy.html`, `/digital-downloads-terms.html` — Digital Downloads pages.
- `/starli.html` — noindex compatibility redirect to `/`.
- `/app-store.html` — centralized App Store redirect and fallback.
- `/404.html` — static error page.

## Language conventions

- English is the default root language.
- Lithuanian pages live under `/lt/`.
- Bilingual equivalents should use reciprocal `hreflang` tags for `en`, `lt`, and `x-default`.
- Lithuanian copy should be natural Lithuanian, not word-for-word translation.

## Visual principles

- Use the Starli palette: forest, moss, sage, warm white, ivory, mist, gold, honey, and soft blue.
- Keep the site calm, premium but not luxurious, warm, private, and focused.
- Avoid loud gradients, stock-couple tropes, excessive decoration, and medical or therapy-coded visual claims.
- Use system fonts and existing assets only unless the owner asks otherwise.

## Verification commands

Useful local checks:

```bash
python3 -m http.server 8000
find . -name '*.html' -print
rg -n "in development|href=\"#\"|localhost|REPLACE_WITH|starli\\.html" .
```

Also verify links, metadata, App Store CTAs, language switchers, and mobile widths before handoff.
