# Biscuit — Discord Developer Bio Page

A single-page, pink-themed bio/link site for **Biscuit**, a Discord server developer. Built as a plain static site — no framework, no build step.

## What's here

- `index.html` — page markup: profile card, bio, best friends list, and social/server links
- `style.css` — pink glassmorphism theme, light/dark mode, gradient title animation, entrance and hover animations, responsive layout
- `script.js` — dark/light theme toggle (persisted in `localStorage`) and the background-video seamless-loop fix
- `avatar.png`, `alpha.png`, `kartona.jpg` — AI-generated artwork (Biscuit's avatar and the two Discord server icons), kept as plain static files since the page references them by exact relative path
- `netlify.toml` — publishes the project root as-is, no build command

## Running locally

Any static file server works, for example:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed URL in a browser.

## Background video

The page expects a looping background clip at `./video.mp4` (referenced exactly as `<video id="bg-video" autoplay muted loop playsinline>`). No video file is bundled — drop your own `video.mp4` into the project root and it will play automatically. Until then, the page still looks complete: the body background color matches the intended video theme (light pastel pink / deep plum in dark mode), which is also what prevents any black-frame flash when the clip loops.

## Theme toggle

The sun/moon button in the top-right corner switches between the light (pastel pink) and dark (deep magenta/plum) themes, with the choice remembered on return visits and a smooth color-transition animation on toggle.
