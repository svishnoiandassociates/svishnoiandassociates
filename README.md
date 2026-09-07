# S Vishnoi & Associates — Website

A single-page, fully responsive website for S Vishnoi & Associates (Chartered
Accountants). Plain HTML/CSS/JS — no build step, no frameworks, no forms.

## Structure
```
index.html        All sections (Home, Services, About, Team, Industries, Process, Contact)
css/style.css      All styling — blue/green/white palette, card layout
js/main.js         Mobile menu toggle only (no forms, no popups)
netlify.toml       Netlify build config
```

## Deploy via GitHub + Netlify

1. Create a new GitHub repository and push this folder's contents to it:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Build settings: leave **Build command** blank and **Publish directory** as `.`
   (already set in `netlify.toml`). Click **Deploy**.
4. Netlify will give you a live URL immediately; add a custom domain under
   **Site settings → Domain management** if you have one.

## Editing content
Everything is in `index.html` — firm name, phone numbers, addresses, team
bios and service text are plain text/HTML, no CMS needed. Colors and spacing
are controlled from the `:root` variables at the top of `css/style.css`.
