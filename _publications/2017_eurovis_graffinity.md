---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Graffinity: Visualizing Connectivity In Large Graphs"
key: 2017_eurovis_graffinity
type: paper

# The shortname is used for auto-generated titles
shortname: Graffinity
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2017_eurovis_graffinity.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2017_eurovis_graffinity_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- Ethan Kerzner
- Alexander Lex
- Crystal Lynn Sigulinsky
- Timothy Urness
- Bryan William Jones
- Robert E. Marc
- meyer

journal-short: EuroVis
year: 2017

bibentry: article
bib:
  journal: Computer Graphics Forum (EuroVis)
  doi: 10.1111/cgf.13184
  url: 
  volume: 36
  number: 3
  pages: 251-260
  pmcid: PMC5821473 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
#award: Honorable Mention Award

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website
#external-project: http://github.com/visdesignlab/graffinity

# The reference to the video entry
video: 2017_eurovis_graffinity_video
# The reference to the preview video entry
#preview-video: 2016_eurovis_clue_video_preview

# the prerint
pdf: 2017_eurovis_graffinity.pdf
# A supplement PDF
supplement: 2017_eurovis_graffinity_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: Vials Conference Talk Slides
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/visdesignlab/graffinity

abstract: "
<p>Multivariate graphs are prolific across many fields, including transportation and neuroscience. A key task in graph analysis is the exploration of connectivity, to, for example, analyze how signals flow through neurons, or to explore how well different cities are connected by flights. While standard node-link diagrams are helpful in judging connectivity, they do not scale to large networks. Adjacency matrices also do not scale to large networks and are only suitable to judge connectivity of adjacent nodes. A key approach to realize scalable graph visualization are queries: instead of displaying the whole network, only a relevant subset is shown. Query-based techniques for analyzing connectivity in graphs, however, can also easily suffer from cluttering if the query result is big enough. To remedy this, we introduce techniques that provide an overview of the connectivity and reveal details on demand.We have two main contributions: (1) two novel visualization techniques that work in concert for summarizing graph connectivity; and (2) Graffinity, an open-source implementation of these visualizations supplemented by detail views to enable a complete analysis workflow. Graffinity was designed in a close collaboration with neuroscientists and is optimized for connectomics data analysis, yet the technique is applicable across domains. We validate the connectivity overview and our open-source tool with illustrative examples using flight and connectomics data.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements
This work was supported in part by NSF grant IIS-1350896, NIH U01 CA198935, the DoD - Office of Economic Adjustment (OEA) ST1605-16-01, NIH EY015128, EY02576, and EY014800 Vision Core, an unrestricted grant from Research to Prevent Blindness to the Moran Eye Center.
