import alasql from "alasql";
import { pages } from "../content/data/pages.json";
import { sections } from "../content/data/sections.json";
import { templates } from "../content/data/templates.json";
import { layout } from "../content/data/layout.json";
import { contentTypes } from "../content/settings/strapi/content-types.json";

export const fetchItem = async (contentTypeSlug, entrySlug) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  const collectionName = contentType.pluralDisplayName
    .replace(/\s+/g, "-")
    .toLowerCase();

  let { items } = await import(`../content/data/items/${collectionName}.json`);
  let res = alasql(`SELECT * FROM ? WHERE slug='${entrySlug}'`, [items]);
  return res.length ? res[0] : null;
};

export const fetchItemById = async (contentTypeSlug, entryId) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  const collectionName = contentType.pluralDisplayName
    .replace(/\s+/g, "-")
    .toLowerCase();
  let { items } = await import(`../content/data/items/${collectionName}.json`);
  let res = alasql(`SELECT * FROM ? WHERE __id=${entryId}`, [items]);
  return res.length ? res[0] : null;
};

export const fetchItems = async (contentTypeSlug, filters) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  const collectionName = contentType.pluralDisplayName
    .replace(/\s+/g, "-")
    .toLowerCase();
  let { items } = await import(`../content/data/items/${collectionName}.json`);
  let res = alasql(`SELECT * FROM ?`, [items]);
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
    let limit = collection.limit;
    let { items } = await import(
      `../content/data/items/${contentTypeSlug}.json`
    );
    let res = alasql(`SELECT * FROM ?` + (limit ? ` LIMIT ${limit}` : ""), [
      items,
    ]);
    let newCollection = { ...collection };
    if (collection.populate) {
      for (let i = 0; i < res.length; i++) {
        const item = res[i];
        for (let j = 0; j < collection.populate.length; j++) {
          const populateSlug = collection.populate[j];
          const contentTypeRes = alasql(`SELECT * FROM ?`, [contentTypes]);
          const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
          if (!contentType) {
            return;
          }
          const collectionName = contentType.pluralDisplayName
            .replace(/\s+/g, "-")
            .toLowerCase();
          const populateItem = await fetchItemById(
            collectionName,
            item[populateSlug].__id
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
  let res = alasql(`SELECT * FROM ? WHERE slug = '${pageSlug}'`, [pages[type]]);
  if (res.length) {
    res[0].layout = layout;
    return res[0];
  }
  return null;
};

export const fetchSection = async (sectionSlug) => {
  if (!sectionSlug) {
    //TODO error handling
  }
  let res = alasql(`SELECT * FROM ? WHERE slug = ${sectionSlug}`, [sections]);
  return res.length ? res[0] : null;
};

export const fetchTemplate = async (templateSlug) => {
  if (!templateSlug) {
    //TODO error handling
  }
  let res = alasql(`SELECT * FROM ? WHERE slug = ${templateSlug}`, [templates]);
  return res.length ? res[0] : null;
};
