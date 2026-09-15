# Archive

Files here are kept in the repository but are **not part of the published site**.

GitHub Pages builds with Jekyll, which skips any directory whose name starts with
an underscore, so nothing in `_archive/` is deployed to katrindesign.com.

## CivicsCoach (archived 2026-09-15)

- `civicscoach.html` — the standalone study app (self-contained, no external assets)
- `civicscoach-project.html` — the portfolio case-study page for it

Removed from the live site at the same time:

- the project card in `index.html`
- the "More projects" mini-card in `sam.html`, `mangrove-cnp-surveyor.html`,
  `planetwerx.html`, `seaglide.html`, `manuals.html`, `corporate-identity.html`,
  `avia-catering.html`, `book-design.html`

### How to bring it back

1. Move both HTML files back to the site root.
2. In `civicscoach-project.html`, drop the `../` prefix from `href`/`src` paths
   (`../styles.css` → `styles.css`, `../assets/…` → `assets/…`, etc.) — it was added
   only so the page still renders correctly from inside this folder.
3. Restore the project card and the mini-cards (see the commit that archived it).
