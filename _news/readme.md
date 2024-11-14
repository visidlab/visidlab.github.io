Easiest way to create a news post is to duplicate and modify an existing news file.
Each post must have a unique file name following this pattern: YYYY-MM-DD-title.md

## Please upload the picture that you want to use in your post here (/assets/photos/YOURIMAGE.IMG)

You need to change the following:

goes between the ```---``` lines
- title: *Title of your poste*
- lead-image: /assets/photos/*name of the picture file*
- lead-image-alt-text: *alt text for the picturee*

goes below the ```---``` lines
- content

## Markdown cheatsheet
*IMAGES*
```![alt text!](/assets/photos/YOURIMAGE.IMG)```

*LINKS*
```[link text](https://www.example.com)```

*MORE INFO ABOUT MARKDOWN*
https://www.markdownguide.org/basic-syntax/#overview


Example post:
```
---
layout: post
title: A descriptive title
lead-image: /assets/photos/lead-logo.png
lead-image-alt-text: Lead image alt text
---

![lead image alt text](/assets/photos/2020_lead-image.png)

Add content here.
```
