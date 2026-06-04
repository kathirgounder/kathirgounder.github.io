# Kathir Gounder — Portfolio

Personal portfolio site. Static HTML/CSS/JS, no build step.

**Live:** https://kathirgounder.github.io

## Structure
- `index.html` — landing page (hero video cluster, projects, photography collage)
- `project.html` — data-driven project write-up page (`?id=<project>`)
- `projects.js` — single source of truth for projects + photos
- `style.css` — shared theme
- `media/` — web-optimized `.mp4` videos and processed `.jpg` photos

## Editing
- **Add a project:** add an object to `PROJECTS` in `projects.js`.
- **Add photos:** drop processed images in `media/photos/` and list them in `PHOTOS`.

## Local preview
Serve over HTTP (cache-busting and media behave correctly):

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Large source videos (`*.mov`) and raw photo folders are kept local only — see `.gitignore`.
