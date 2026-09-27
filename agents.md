# AGENTS.md

## Project

Static, single-page bio/link site for a Discord developer persona named "Biscuit". No frontend framework, no bundler, no build step — plain HTML/CSS/JS served as-is.

## Files

- `index.html` — all markup lives here in one file (profile card, bio copy, links grid)
- `style.css` — theme variables (`:root`), light mode is default, `body.dark` overrides for dark mode; all animations (gradient title, pulsing avatar ring, floating hearts, card/link entrance, hover effects) are plain CSS keyframes/transitions
- `script.js` — two independent pieces: (1) theme toggle that reads/writes `localStorage['biscuit-theme']` and toggles `body.dark`, (2) a `timeupdate` listener on `#bg-video` that seeks back to `0` ~0.15s before the clip ends, to avoid a black-frame flash on loop
- `netlify.toml` — `publish = "."`, no build command; this deploys as a pure static site

## Conventions / non-obvious decisions

- The gradient animation on the "BISCUIT" title uses only the five pink hex values the product spec called out (`#ffb6c1`, `#ff69b4`, `#ff1493`, `#f472b6`, `#ec4899`) plus a repeat of the first color at the end of the gradient stops, so the `background-position` animation loops seamlessly. Do not introduce other hues here — it's a strict requirement, not a starting palette.
- `avatar.png`, `alpha.png`, `kartona.jpg` are checked-in generated images, referenced by exact relative path (`./avatar.png` etc.) — the page intentionally does not route them through `/.netlify/images`, since the spec requires literal local `src` attributes.
- `video.mp4` is **not** included (no video-generation tooling was available). The `<video>` tag and loop-fix script are wired up and ready — dropping a `video.mp4` file into the project root is all that's needed for the background video to appear. The CSS background-color-matching fix (`--bg-light-alt` / `--bg-dark`) is independent of whether the file exists, so the page never shows a black flash either way.
- Font Awesome (for the TikTok/Instagram/heart icons) and Google Fonts (Baloo 2, Quicksand) are loaded from CDN with SRI hashes — the only external network dependencies.

## Where to go next

There's no PLAN.md — this is a complete, single-surface deliverable, not a staged product. Any future work (e.g. a contact form, analytics, more link entries) can be added directly to `index.html`/`style.css` without restructuring anything.
