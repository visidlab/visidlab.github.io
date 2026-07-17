# How to add a publication

This file is a guide for lab members. It is **not** shown on the website.

---

## 1. Create a new file

Add a new `.md` file in this folder (`astro/src/content/publications/`).

**File naming convention:**
```
YYYY_shortname.md
```

Examples:
- `2025_chi_color_perception.md`
- `2025_vis_uncertainty.md`
- `2024_eurovis_multivariate.md`

Keep it lowercase, use underscores, no special characters.

---

## 2. Copy this template into your new file

```markdown
---
title: "Full Title of Your Paper"
key: 2025_chi_color_perception
type: paper

order: 2025-04

shortname: Short Display Name
image: 2025_chi_color_perception.png
image_large: 2025_chi_color_perception_large.png

authors:
  - authorkey1
  - authorkey2
  - Firstname Lastname

journal-short: CHI
year: 2025

bibentry: inproceedings
bib:
  booktitle: "Proceedings of the ACM Conference on Human Factors in Computing Systems"
  publisher: ACM
  doi: 10.1145/xxxxxxx.xxxxxxx
  pages: 1-12
  month: April

publisherURL: https://doi.org/10.1145/xxxxxxx.xxxxxxx
preprint_server: https://arxiv.org/abs/xxxx.xxxxx
code: https://github.com/viscollective/yourrepo

abstract: "<p>Write your abstract here as a single HTML paragraph. You can use <strong>bold</strong> and <em>italic</em>.</p>"
---
```

---

## 3. Fields explained

| Field | Required | Description |
|---|---|---|
| `title` | **Yes** | Full paper title. Wrap in quotes if it contains colons |
| `key` | No | Unique identifier, usually matches the filename without `.md` |
| `type` | No | One of: `paper`, `thesis`, `abstract`, `poster`, `preprint`, `commentary`. Defaults to `paper` |
| `order` | No | Used for sorting — use `YYYY-MM` format |
| `shortname` | No | Short display name for thumbnails |
| `image` | No | Thumbnail image filename (no path). Store in `astro/public/publication-images/` |
| `image_large` | No | Larger version of the image, same folder |
| `authors` | No | List of author keys (for lab members) or full names (for external authors) |
| `journal-short` | No | Abbreviated venue name, e.g. `CHI`, `IEEE VIS`, `EuroVis` |
| `year` | No | Publication year as a number (no quotes) |
| `bibentry` | No | BibTeX entry type: `article`, `inproceedings`, `phdthesis`, etc. |
| `bib` | No | BibTeX fields — fill in what you know, leave the rest blank |
| `publisherURL` | No | Link to the paper on the publisher's site (DOI link preferred) |
| `abstract` | No | Full abstract wrapped in `<p>` tags, as a quoted string |

### Link fields (shown in the Resources sidebar)

**Do not store PDF files in this repository.** Instead, link to where the paper is hosted externally.

| Field | Description |
|---|---|
| `preprint_server` | Link to a preprint (arXiv, OSF, etc.). Shown prominently as "Preprint (open access)" |
| `pdf` | Direct link to a PDF hosted elsewhere (not in this repo) |
| `publisherURL` | Publisher or DOI page. Shown as "Publisher page" |
| `code` | GitHub or other repository link. Shown as "Source code" |
| `supplement` | Link to supplementary materials |
| `external-project` | Link to a dedicated project site |

Leave any unused link fields out of the file entirely.

---

## 4. Author keys vs. full names

For **lab members**, use their key (lowercase surname or the key defined in their people file):
```yaml
authors:
  - meyer
  - akbaba
  - ronnberg
```

The website will automatically resolve these to full names and link them to the person's profile page.

For **external collaborators**, write their full name:
```yaml
authors:
  - akbaba
  - Jane Smith
  - John Doe
  - meyer
```

---

## 5. Adding images

Put image files in:
```
astro/public/publication-images/
```

Then reference just the filename (no path) in the frontmatter:
```yaml
image: 2025_chi_color_perception.png
image_large: 2025_chi_color_perception_large.png
```

Typical sizes:
- `image` (thumbnail): ~300×200 px
- `image_large`: ~800×500 px

---

## 6. Publication types

| Type value | Badge label |
|---|---|
| `paper` | Paper |
| `thesis` | Thesis |
| `abstract` | Abstract |
| `poster` | Poster |
| `preprint` | Preprint |
| `commentary` | Commentary |

---

## 7. Done!

Save the file, commit, and push to `main`. GitHub Actions will build and deploy automatically within a minute or two.
