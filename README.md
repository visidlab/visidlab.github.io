# VID Lab Website

The lab website for the [Visualization & Interaction Design Lab](https://visidlab.github.io) at Linköping University.

Built with [Astro](https://astro.build) and deployed automatically to GitHub Pages on every push to `main`.

---

## For lab members: how to update the website

You don't need to install anything to add content. Just edit or create Markdown files and push to `main`.

### Where to find things

```
astro/src/content/
├── publications/    ← one .md file per paper
│   └── _README.md  ← how to add a publication ← START HERE
├── news/            ← one .md file per news post
│   └── _README.md  ← how to add a news post
├── people/          ← one .md file per person
│   └── alumni/      ← people who have left the lab
└── pages/
    ├── home.md      ← homepage hero text and links
    └── about.md     ← about page text and photo
```

Open the `_README.md` file inside the folder you want to update — it contains a full template and field-by-field explanation.

### Workflow

1. Pull the latest `main` branch
2. Create or edit a `.md` file in the right folder
3. Commit and push to `main`
4. GitHub Actions will build and deploy the site automatically (takes ~1 minute)

### Images

| Image type | Where to put it |
|---|---|
| Publication thumbnails | `astro/public/publication-images/` |
| News post images | `astro/public/assets/photos/news/` |
| People photos | `astro/public/photos/people/` (filename = person's key, e.g. `meyer.jpg`) |

---

## For developers: running locally

```bash
cd astro
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

