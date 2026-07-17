# How to edit the homepage and about page

This file is a guide for lab members. It is **not** shown on the website.

There are two page files here:

| File | What it controls |
|---|---|
| `home.md` | Homepage: hero text, buttons, page title |
| `about.md` | About page: group photo, gallery, body text |

---

## home.md — fields explained

```markdown
---
title: VID Lab | ...          # Browser tab title
eyebrow: Linköping University # Small label above the hero heading
hero_text: >                  # Main hero paragraph (shown large)
  Your text here.
hero_note: >                  # Smaller secondary paragraph below hero
  Your text here.
hero_image: /mosaic.png       # Image shown beside the hero text
hero_image_alt: Alt text      # Accessibility description of the image
cta_primary_label: Meet the team    # First button label
cta_primary_href: /people           # First button link
cta_secondary_label: Our research   # Second button label
cta_secondary_href: /publications   # Second button link
---
```

The `>` after a field means the text continues on the next line(s) — keep the indentation.

---

## about.md — fields explained

```markdown
---
title: About Us               # Page title
eyebrow: Who we are           # Small label above the heading
group_photo: /photos/group2025.gif   # Main group photo at top of page
group_photo_alt: Alt text            # Accessibility description
location: >                          # Location blurb (supports **bold**)
  Based at...
gallery:                      # Photo grid — list of images
  - src: /photos/gallery/image.jpg
    alt: Description of image
  - src: /photos/gallery/image2.jpg
    alt: Description
---

The body text goes here, written in plain Markdown.
Paragraphs are separated by blank lines.
```

### Adding a gallery photo

1. Put the image in `astro/public/photos/gallery/`
2. Add an entry to the `gallery:` list in `about.md`:
   ```yaml
   - src: /photos/gallery/yourimage.jpg
     alt: A short description
   ```

---

## Done!

Save the file, commit, and push to `main`. The site deploys automatically.
