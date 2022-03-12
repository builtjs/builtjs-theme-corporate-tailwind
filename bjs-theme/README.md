# building-blox.js

> building-blox.js is a lightweight Javascript library for the rapid development of static websites. It was built with a focus on ease of use for developers and working seamlessly with headless APIs and static website hosting.

## How does it work?
Building Blox leverages Mozilla's rich and powerful [Nunjucks](https://mozilla.github.io/nunjucks/) templating language together with Webpack to manage project template files and generate a public "dist" directory. Data for the application is retrieved from a JSON data file in the project, making it especially suitable for building API driven websites. The data file can be populated on-demand during development or on-build for in-production static websites.

Right now, Building Blox only works with the Appyay headless content management system. Aside from the use of Nunjucks, Webpack and Appyay, Building Blox is completely unopinionated about what technologies are used, putting the control in the hands of the developer. 

This library features:
* Data loading
* Connection of blocks, including styles, scripts and images
* HTML templating
* Master-detail pattern with pagination

## Installation
Install the dependencies:
````
npm install
````
## Usage
The starter project for building-blox.js can be found at [Building Blox](https://github.com/Building-Blox/building-blox).