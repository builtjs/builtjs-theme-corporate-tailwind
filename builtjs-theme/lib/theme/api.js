const alasql = require("alasql");
const { transformPage } = require("./transform-page");
const DEFAULT_TYPE = "site";

async function getPage(config) {
  return new Promise(async (resolve) => {
    let page = await transformPage(config);
    resolve(page);
  });
}

async function getConfig(pageSlug, type) {
  if (!type) {
    type = DEFAULT_TYPE;
  }
  if (!pageSlug) {
    //TODO error handling
  }
  let pagesData = await getData("/data/pages.json");
  let res = alasql(`SELECT * FROM ? WHERE slug = '${pageSlug}'`, [
    pagesData.pages[type],
  ]);
  let page = res[0];
  if (!page) {
    return null;
  }
  if (page.demoSections) {
    page.sections = page.demoSections;
  }
  let layoutData = await getData(`/data/layout.json`);
  page.layout = layoutData.layout;
  return page;
}

async function getData(path) {
  const url = process.env.url || "http://localhost:3000";
  return new Promise(async (resolve) => {
    let res = await fetch(`${url}${path}`);
    let data = res.json();
    resolve(data);
  });
}

async function getItems(contentTypeSlug, filters) {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  let contentTypeData = await getData(`/data/strapi/content-types.json`);
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypeData.contentTypes]
  );

  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }

  let itemData = await getData(
    `/data/collections/${contentType.modelSettings.info.pluralName}.json`
  );
  let res = alasql(`SELECT * FROM ?`, [itemData.items]);
  return {
    items: res,
    contentTypeId: contentTypeSlug,
  };
}

module.exports = {
  getPage,
  getConfig,
  getItems,
  getData,
};
