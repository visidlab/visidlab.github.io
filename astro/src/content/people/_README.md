# How to manage people

This file is a guide for lab members. It is **not** shown on the website.

---

## Adding a new person

Create a new `.md` file in this folder (`astro/src/content/people/`).

**File naming — use the person's last name (lowercase):**
```
meyer.md
blomgren.md
```

For alumni, put the file in the `alumni/` subfolder instead:
```
alumni/akbaba.md
```

---

## Template

```markdown
---
first_name: Firstname
last_name: Lastname
key: lastname
role: phdstudent
title: PhD Student in Media and Information Technology
email: firstname.lastname@liu.se
personal-site: https://yourwebsite.com
year_joined: 2025
gs: https://scholar.google.com/citations?user=XXXXXXX
orcid: 0000-0000-0000-0000
keywords: data visualisation, interaction design, sound
---
```

---

## Fields explained

| Field | Required | Description |
|---|---|---|
| `first_name` | **Yes** | First name |
| `last_name` | **Yes** | Last name |
| `key` | No | Unique identifier used for linking authors in publications. Defaults to the filename. Use lowercase lastname (e.g. `meyer`) |
| `role` | No | See role options below. Defaults to `phdstudent` |
| `title` | No | Job title shown under the name (e.g. "Professor", "PhD Student in MIT") |
| `email` | No | LiU email address |
| `personal-site` | No | Link to personal website |
| `year_joined` | No | Year the person joined the lab (number, no quotes) |
| `graduated` | No | For alumni only: degree and year, e.g. `PhD '25` or `M.S. '23` |
| `year_left` | No | For alumni only: year they left (number, no quotes) |
| `gs` | No | Full Google Scholar profile URL |
| `orcid` | No | ORCID identifier (just the number, e.g. `0000-0001-2345-6789`) |
| `keywords` | No | 3–5 research keywords, comma-separated |

---

## Role options

| Value | Displayed as | Group |
|---|---|---|
| `faculty` | Faculty | 1st |
| `postdoc` | Postdoctoral Researcher | 1st |
| `researcher` | Researcher | 1st |
| `staff` | Staff | 1st |
| `phdstudent` | PhD Student | 2nd |
| `msstudent` | MS Student | 2nd |
| `guest` | Guest | 3rd |

People are ordered on the page by group (faculty first, then students, then guests), then alphabetically by last name within each group.

---

## Adding a photo

Put the photo in:
```
astro/public/photos/people/
```

Name it exactly the same as the person's `key` (or filename if no key):
```
meyer.jpg
blomgren.jpg
```

Supported formats: `.jpg`, `.png`, `.webp`

Recommended: square crop, at least 500×500 px. The photo is displayed at max 250×250 px.

If no photo is found, the website shows the person's initials instead.

---

## Moving someone to alumni

1. Move their `.md` file from `people/` into `people/alumni/`
2. Add `graduated: PhD '25` (or the appropriate degree) and `year_left: 2025`
3. Change their `role` to `alumnus` (optional — alumni are shown separately regardless)

---

## Done!

Save the file, commit, and push to `main`. The site deploys automatically.
