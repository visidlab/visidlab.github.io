# How to add a news post

This file is a guide for lab members. It is **not** shown on the website.

---

## 1. Create a new file

Add a new `.md` file in this folder (`src/content/news/`).

**File naming — this is important!**
The filename determines the date and the URL slug. Use the format:

```
YYYY-MM-DD-short-title.md
```

Examples:
- `2025-09-01-new-phd-student.md`
- `2025-11-15-VIS-best-paper.md`

Keep it lowercase, use hyphens instead of spaces, no special characters.

---

## 2. Copy this template into your new file

```markdown
---
title: Your Post Title Here
lead-image: /assets/photos/news/your-image.png
lead-image-alt-text: A short description of the image for accessibility
---

Write your news content here using Markdown.

You can use **bold**, *italic*, and [links](https://example.com).

- Bullet lists work too
- Like this

Add as many paragraphs as you like.
```

---

## 3. Fields explained

| Field | Required | Description |
|---|---|---|
| `title` | **Yes** | The headline shown on the news page and in cards |
| `lead-image` | No | Path to an image. Store images in `/public/assets/photos/news/`. If omitted, no image is shown |
| `lead-image-alt-text` | No (but recommended) | Describes the image for screen readers |

---

## 4. Adding images

Put your image file in:
```
astro/public/assets/photos/news/
```

Then reference it in the frontmatter as:
```yaml
lead-image: /assets/photos/news/your-image.png
```

Supported formats: `.png`, `.jpg`, `.gif`, `.webp`

---

## 5. Writing the body

Everything below the closing `---` is the post body. Write in plain Markdown:

```markdown
This is a paragraph.

**Bold text**, *italic text*, [a link](https://liu.se).

## A subheading

Another paragraph with more detail.
```

---

## 6. Done!

Save the file, commit, and push to `main`. GitHub Actions will build and deploy automatically within a minute or two.
