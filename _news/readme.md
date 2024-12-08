# Instructions for Creating a News Post

## 1. Create a New News Post File
- Navigate to the `/ _news` folder.
- Copy the file named `template.md` and save it with a new name in the following format:

YYYY-MM-DD-short-title.md

**Example**:  
2024-12-08-weekly-update.md

---

## 2. Edit the Front Matter
In the newly created file, update the following fields at the top of the file (called the “front matter”):

### Title
Replace `YOUR TITLE` with your desired title for the post.

**Example**:  
title: Weekly News

### Lead Image
1. Upload your main image (the lead image) to:  
   `/assets/photos/news/`
2. Update the `lead-image` field with your uploaded image’s file name.  

**Example**:  
lead-image: /assets/photos/news/my-news-image.png  

3. Update the `lead-image-alt-text` with a short description of the image for accessibility.

**Example**:  
lead-image-alt-text: A scenic view of the mountains

### Author
Add your author key in the `author` field.

**Example**:  
author: person.yourkey

If no author is needed, remove the entire `author` line.

### Published
Set `published` to `true` if the post is ready to go live.  
If you’re still working on it or want it reviewed first, keep `published` as `false`.

**Example**:  
published: true

---

## 3. Write Your Content
Below the front matter section, replace `CONTENT` with the body of your news post. You can include text, additional images, links, and more.

---

## 4. Uploading Additional Images
- Upload any extra images to:  
  `/assets/photos/news/`
- Add them to your post using this Markdown syntax:
`![Alt text](/assets/photos/news/additional-image.png)`

## 5. Adding Links
- Use the following Markdown syntax to include links:
`[Link text](https://example.com)`

## Markdown Resources
- For more details on formatting your post using Markdown, visit:
https://www.markdownguide.org/basic-syntax/#overview 
 
