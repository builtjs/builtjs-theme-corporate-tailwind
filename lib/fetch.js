import alasql from "alasql";

export const fetchData = async (path) => {
  const url = process.env.url || "http://localhost:3000";
  return new Promise(async (resolve) => {
    let res = await fetch(`${url}${path}`);
    let data = res.json();
    resolve(data);
  });
};

export const fetchItem = async (contentTypeSlug, entrySlug) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  let contentTypeData = await fetchData(`/data/strapi/content-types.json`);
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypeData.contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  // const collectionName = contentType.pluralDisplayName
  //   .replace(/\s+/g, "-")
  //   .toLowerCase();
  let itemData = await fetchData(`/data/collections/${contentTypeSlug}.json`);
  let res = alasql(`SELECT * FROM ? WHERE slug='${entrySlug}'`, [
    itemData.items,
  ]);
  return res.length ? res[0] : null;
};

export const fetchItemById = async (contentTypeSlug, entryId) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  let contentTypeData = await fetchData(`/data/strapi/content-types.json`);
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypeData.contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  // const collectionName = contentType.pluralDisplayName
  //   .replace(/\s+/g, "-")
  //   .toLowerCase();
  let itemData = await fetchData(`/data/collections/${contentTypeSlug}.json`);
  let res = alasql(`SELECT * FROM ? WHERE id=${entryId}`, [itemData.items]);
  return res.length ? res[0] : null;
};

export const fetchItems = async (contentTypeSlug, filters) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  let contentTypeData = await fetchData(`/data/strapi/content-types.json`);
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypeData.contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  // const collectionName = contentType.pluralDisplayName
  //   .replace(/\s+/g, "-")
  //   .toLowerCase();
  let itemData = await fetchData(`/data/collections/${contentTypeSlug}.json`);
  let res = alasql(`SELECT * FROM ?`, [itemData.items]);
  return {
    items: res,
    contentTypeId: contentTypeSlug,
  };
};

export const fetchCollections = async (section) => {
  if (!section) {
    //TODO error handling
  }
  if (!section.collections) {
    return [];
  }
  let newCollections = {};
  const collections = Object.entries(section.collections);
  for (const [contentTypeSlug, collection] of collections) {
    // for (let i = 0; i < section.collections.length; i++) {
    // const collection = section.collections[i];
    let limit = collection.limit;
    let itemData = await fetchData(`/data/collections/${contentTypeSlug}.json`);
    let res = alasql(`SELECT * FROM ?` + (limit ? ` LIMIT ${limit}` : ""), [
      itemData.items,
    ]);
    let newCollection = { ...collection };
    if (collection.populate) {
      for (let i = 0; i < res.length; i++) {
        const item = res[i];
        for (let j = 0; j < collection.populate.length; j++) {
          const populateSlug = collection.populate[j];
          let contentTypeData = await fetchData(
            `/data/strapi/content-types.json`
          );
          const contentTypeRes = alasql(`SELECT * FROM ?`, [
            contentTypeData.contentTypes,
          ]);
          const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
          if (!contentType) {
            return;
          }
          // const collectionName = contentType.pluralDisplayName
          //   .replace(/\s+/g, "-")
          //   .toLowerCase();
          debugger
          const populateItem = await fetchItemById(
            contentTypeSlug,
            item[populateSlug].id
          );
          item[populateSlug] = populateItem;
        }
      }
    }
    newCollection.items = res;
    newCollections[contentTypeSlug] = newCollection;
  }
  return newCollections;
};

export const fetchPage = async (pageSlug, type) => {
  if (!pageSlug) {
    //TODO error handling
  }
  let pagesData = await fetchData("/data/pages.json");

  let res = alasql(`SELECT * FROM ? WHERE slug = '${pageSlug}'`, [
    pagesData.pages[type],
  ]);
  if (res.length) {
    let layoutData = await fetchData(`/data/layout.json`);
    res[0].layout = layoutData.layout;
    return res[0];
  }
  return null;
};


export const fetchSection = async (sectionSlug) => {
  if (!sectionSlug) {
    //TODO error handling
  }

  let sectionData = await fetchData(`/data/sections.json`);
  let res = alasql(`SELECT * FROM ? WHERE slug = ${sectionSlug}`, [
    sectionData.sections,
  ]);
  return res.length ? res[0] : null;
};

export const fetchTemplate = async (templateSlug) => {
  if (!templateSlug) {
    //TODO error handling
  }
  let templateData = await fetchData(`/data/templates/body.json`);
  let res = alasql(`SELECT * FROM ? WHERE slug = ${templateSlug}`, [
    templateData.templates,
  ]);
  return res.length ? res[0] : null;
};
