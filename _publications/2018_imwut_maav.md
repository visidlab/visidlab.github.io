---
layout: publication
# Quotes make the : possible, otherwise you can type this without quotes
title: "Managing In-home Environments through Sensing, Annotating, and Visualizing Air Quality Data"
# Keys must be unique to each paper, see section below for more details
key: 2018_imwut_maav
# Select one of the options below
type: paper 
order: 2018-09

# Auto-generates titles and alt-descriptors
shortname: maav
# Add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/publications/
image: 2018_imwut_maav_thumbnail.png
# Add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/publications/
image_large: 2018_imwut_maav_teaser.png

# Authors in the "database" can be used with just their person "key"
authors:
- Jimmy Moore
- Pascal Goffin
- meyer
- Philip Lundrigan
- Neal Patwari
- Katherine Sward
- Jason Wiese

# Include a shortened name for the journal or conference/proceedings
journal-short: IMWUT
year: 2018

# Create BibTeX info, using one of the entry choices
# Articles have a "journal", and inproceedings have a "booktitle"
# Preprints are articles with the location of preprint mentioned in "journal"
# You can remove fields you don't need, or else leave them blank
# Try to include a DOI, or use the publisher URL below
# Specify new BibTeX fields by adding a new key and value inside "bib:"
bibentry: article 
bib:
  
  journal: Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)(Ubicomp)
  issue_date: September 2018
  numpages: 28
  publisher: ACM
  address: 
  doi: 10.1145/3264938
  url: 
  volume: 2
  number: 3
  pages: 
  month: Sept

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
# award: EuroVis 2016 Honorable Mention Award

# Provide a link to the publisher's webpage if no DOI is available




# Provide a preprint and supplement pdf
pdf: https://sci.utah.edu/~vdl/papers/2018_imwut_maav.pdf
supplement: https://sci.utah.edu/~vdl/papers/2018_imwut_maav_supplement.zip


abstract: "<p>
Air quality is important, varies across time and space, and is largely invisible. Pioneering past work deploying air quality
monitors in residential environments found that study participants improved their awareness of and engagement with air
quality. However, these systems fielded a single monitor and did not support user-specified annotations, inhibiting their
utility. We developed MAAV– a system to <b>M</b>easure <b>A</b>ir quality, <b>A</b>nnotate data streams, and <b>V</b>isualize real-time PM<sub>2.5</sub> levels –
to explore how participants engage with an air quality system addressing these challenges. MAAV supports collecting data
from multiple air quality monitors, annotating that data through multiple modalities, and sending text message prompts
when it detects a PM<sub>2.5</sub> spike. MAAV also features an interactive tablet interface for displaying measurement data and
annotations. Through six long-term field deployments (20-47 weeks, mean 37.7 weeks), participants found these system
features important for understanding the air quality in and around their homes. Participants gained new insights from
between-monitor comparisons, reflected on past PM<sub>2.5</sub> spikes with the help of their annotations, and adapted their system
usage as they familiarized themselves with their air quality data and MAAV. These results yield important insights for
designing residential sensing systems that integrate into users’ everyday lives.
</p>"

# After the ---, you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Acknowledgements
This research was supported by the National Institute of Biomedical Imaging and Bioengineering of the National Institutes of Health under Award Number U54EB021973. 
