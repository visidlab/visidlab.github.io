---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Visually Comparing Weather Features in Forecasts"
key: 2015_infovis_weaver
type: paper

# The shortname is used for auto-generated titels
shortname: WeaVER
# add a 2:1 aspect ration (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2015_infovis_weaver.png
image_large: 2015_infovis_weaver_teaser.png


# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- quinan
- meyer

journal-short: InfoVis
year: 2016

bibentry: article
bib:
  journal: IEEE Transactions on Visualization and Computer Graphics (InfoVis ’15)
  doi: 10.1109/TVCG.2015.2467754
  volume: 22
  number: 1
  pages: 389--398
  month: jan

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions" 
award:

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website 
external-project: http://www.sci.utah.edu/~samquinan/software/WeaVER/

# The reference to the video entry
video: 2015_infovis_weaver_video
# The reference to the preview viedo entry 
preview-video: 2015_infovis_weaver_video_preview

# the prerint
pdf: 2015_infovis_weaver.pdf
# A supplement PDF
supplement:

# Extra supplements, such as talk slides, data sets, etc. 
supplements:
- name: Supplemental Materials
  # use link instead of abslink if you want to link to the master directory
  link: 2015_infovis_weaver_supplemental.tgz
  # defaults to a download icon, use this if you want a link-out icon
  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/samquinan/WeaVER

abstract: "
<p>Meteorologists process and analyze weather forecasts using visualization in order to examine the behaviors of and relationships among weather features. In this design study conducted with meteorologists in decision support roles, we identified and attempted to address two significant common challenges in weather visualization: the employment of inconsistent and often ineffective visual encoding practices across a wide range of visualizations, and a lack of support for directly visualizing how different weather features relate across an ensemble of possible forecast outcomes. In this work, we present a characterization of the problems and data associated with meteorological forecasting, we propose a set of informed default encoding choices that integrate existing meteorological conventions with effective visualization practice, and we extend a set of techniques as an initial step toward directly visualizing the interactions of multiple features over an ensemble forecast. We discuss the integration of these contributions into a functional prototype tool, and also reflect on the many practical challenges that arise when working with weather data.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---
