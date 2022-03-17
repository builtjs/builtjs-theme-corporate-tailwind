/** !
 * @fileOverview A Javascript library for Built.JS Themes.
 * @version 0.1.0
 * @license
 * Copyright (c) 2022 Richard Lovell
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function () {
  "use strict";
 
  const { 
    getPaths, 
    getProps 
  } = require("./lib/site/api");

  const { 
    getPage, 
    getConfig,
    getItems,
    getData
  } = require("./lib/theme/api");
  // const { transformPage } = require("./lib/theme/transform-page");
  

  // async function getPage(config) {
  //   return new Promise(async (resolve) => {
  //     let page = await transformPage(config);
  //     resolve(page);
  //   });
  // }

  // async function getConfig(pageSlug, type) {
  //   if (!type) {
  //     type = DEFAULT_TYPE;
  //   }
  //   if (!pageSlug) {
  //     //TODO error handling
  //   }
  //   let pagesData = await getData("/data/pages.json");
  //   let res = alasql(`SELECT * FROM ? WHERE slug = '${pageSlug}'`, [
  //     pagesData.pages[type],
  //   ]);
  //   if (res.length) {
  //     let layoutData = await getData(`/data/layout.json`);
  //     res[0].layout = layoutData.layout;
  //     return res[0];
  //   }
  //   return null;
  // }

  // async function getData(path) {
  //   const url = process.env.url || "http://localhost:3000";
  //   return new Promise(async (resolve) => {
  //     let res = await fetch(`${url}${path}`);
  //     let data = res.json();
  //     resolve(data);
  //   });
  // }

  // async function getItems(contentTypeSlug, filters) {
  //   if (!contentTypeSlug) {
  //     //TODO error handling
  //   }
  //   let contentTypeData = await getData(`/data/strapi/content-types.json`);
  //   const contentTypeRes = alasql(
  //     `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
  //     [contentTypeData.contentTypes]
  //   );

  //   const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  //   if (!contentType) {
  //     return;
  //   }

  //   let itemData = await getData(
  //     `/data/collections/${contentType.modelSettings.info.pluralName}.json`
  //   );
  //   let res = alasql(`SELECT * FROM ?`, [itemData.items]);
  //   return {
  //     items: res,
  //     contentTypeId: contentTypeSlug,
  //   };
  // }

  module.exports = {
    getConfig,
    getPage,
    getData,
    getItems,
    getPaths,
    getProps,
  };
})();
