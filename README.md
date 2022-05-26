# Built.JS Theme: Corporate Tailwind

[![Built.JS Corporate Tailwind Theme](https://raw.githubusercontent.com/builtjs/builtjs-theme-corporate-tailwind/main/public/images/theme.png)](https://builtjs-theme-corporate-tailwind.vercel.app/)

A [Built.JS](https://builtjs.com) theme for small business websites, with basic Tailwind styling.

## Demo
The demo for the site can be found here: [https://builtjs-theme-corporate-tailwind.vercel.app/](https://builtjs-theme-corporate-tailwind.vercel.app/)

## Installation
```
npm install
```
Then you can run the app using:
```
npm run dev
```

### Pages
- Home
- About
- Blog
- Contact
- Services

### Content Types
#### Blog Item
Attributes:
- title: Text
- content: RichText
- image: File
- tags: Array<Tag>
- createdAt: Date
- author: Author

#### Feature
Attributes:
- title: Text
- blurb: LongText
- image: File

#### Service
Attributes:
- title: Text
- blurb: LongText
- image: File

#### Benefit
Attributes:
- title: Text
- blurb: LongText
- image: File

#### Primary Menu Item
Attributes:
- label: Text
- url: Text

### Templates
Templates specify the UI design of a section. In this theme, they fall under the following categories:
##### Articles
An article displays the content of a single entry, such as a blog entry.
##### Banners
A banner is an attention section
##### Covers
A cover is a full height attention section
##### Lists
A list displays a collection of items
##### Forms
A form is a collection of inputs
##### Footers
A footer is a section at the bottom of a page
##### Headers
A header is a section at the top of a page that includes the main menu
##### Head
Head components are included in the head section of a page. For example: SEO, Analytics