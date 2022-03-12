# Built.JS Theme: Corporate Tailwind

A Built.JS theme for small business websites with basic Tailwind styling.

## Installation

```
npm install
```
NOTE: bjs-theme library is not an NPM package yet so to run the project, you'll need to run:

````
cd bjs-theme
````

````
npm link
````

## Pages
- About
- Blog
- Contact
- Home
- Services

## Content Types
### Blog Item
Attributes:
- title: Text
- content: RichText
- image: File
- tags: Array<Tag>
- createdAt: Date
- author: Author

### Feature
Attributes:
- title: Text
- blurb: LongText
- image: File

### Service
Attributes:
- title: Text
- blurb: LongText
- image: File

### Benefit
Attributes:
- title: Text
- blurb: LongText
- image: File

### Primary Menu Item
Attributes:
- label: Text
- url: Text

## Templates
Templates specify the UI design of a section. In this theme, they fall under the following categories:
#### Articles
An article displays the content of a single entry, such as a blog entry.
#### Banners
A banner is an attention section
#### Covers
A cover is a full height attention section
#### Lists
A list displays a collection of items
#### Forms
A form is a collection of inputs
#### Footers
A footer is a section at the bottom of a page
#### Headers
A header is a section at the top of a page that includes the main menu
#### Head
Head components are included in the head section of a page. For example: SEO, Analytics

### articles.article-1
#### Content
A single Strapi entry that includes these attributes:
- title: Text
- content: RichText
- image: File
- tags: Array<Tag>
- createdAt: Date
- author: Author

### cover-1
#### Content
A Strapi component with the following attributes:
- preheading1: Text
- heading1: Text
- blurb1: Text
- buttonLinks: Array<Button>

### footers.footer-1
#### Content
A collection of Strapi items that include these attributes:
- label: Text
- url: Text

### headers.headers-1
#### Content
A collection of Strapi items that include these attributes:
- label: Text
- url: Text