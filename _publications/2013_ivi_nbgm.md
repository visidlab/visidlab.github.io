---
layout: publication
title: "The Nested Blocks and Guidelines Model"
key: 2013_ivi_nbgm
type: paper

# The shortname is used for auto-generated titels
shortname: NBGM
# add a 2:1 aspect ration (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2013_ivi_nbgm.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- meyer
- Michael Sedlmair
- quinan
- Tamara Munzner

journal-short: IVI
year: 2015

bibentry: article
bib:
  journal: Information Visualization
  doi: 10.1177/1473871613510429
  volume: 14
  number: 3
  pages: 234--249

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions" 
award:
note: extended journal version of 2012 BELIV article, available online 2013

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website 
external-project: 

# The reference to the video entry
video: 
# The reference to the preview viedo entry 
preview-video: 

# the prerint
pdf: 2013_ivi_nbgm.pdf
# A supplement PDF
supplement:

# Extra supplements, such as talk slides, data sets, etc. 
supplements:
- name: HighRes Figures
  # use link instead of abslink if you want to link to the master directory
  abslink: http://www.cs.ubc.ca/labs/imager/tr/2013/NBGM/#figures
  # defaults to a download icon, use this if you want a link-out icon
  linksym: true

# Link to the repository where the code is hostet
code: 

abstract: "
<p>We propose the nested blocks and guidelines model (NBGM) for the design and validation of visualization systems. The NBGM extends the previously proposed four-level nested model by adding finer grained structure within each level, providing explicit mechanisms to capture and discuss design decision rationale. Blocks are the outcomes of the design process at a specific level, and guidelines discuss relationships between these blocks. Blocks at the algorithm and technique levels describe design choices, as do data blocks at the abstraction level, whereas task abstraction blocks and domain situation blocks are identified as the outcome of the designer's understanding of the requirements. In the NBGM, there are two types of guidelines: <em>within-level</em> guidelines provide comparisons for blocks within the same level, while <em>between-level</em> guidelines provide mappings between adjacent levels of design. We analyze several recent papers using the NBGM to provide concrete examples of how a researcher can use blocks and guidelines to describe and evaluate visualization research. We also discuss the NBGM with respect to other design models to clarify its role in visualization design. Using the NBGM, we pinpoint two implications for visualization evaluation. First, comparison of blocks at the domain level must occur implicitly downstream at the abstraction level; and second, comparison between blocks must take into account both upstream assumptions and downstream requirements. Finally, we use the model to  analyze two open problems: the need for mid-level task taxonomies to fill in the task blocks at the abstraction level, as well as the need for more guidelines mapping between the algorithm and technique levels.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---
