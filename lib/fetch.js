import alasql from "alasql";
import {site} from "../data/pages/site.json";
import {templates} from "../data/pages/templates.json";
import * as sectionData from "../data/sections.json";
import * as templateData from "../data/templates/body.json";
import * as layoutData from "../data/templates/layout.json";
import * as contentTypeData from "../data/strapi/content-types.json";
import { pageTypes } from "../constants";

export const fetchItem = async (contentTypeSlug, entrySlug) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypeData.contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  const collectionName = contentType.pluralDisplayName
    .replace(/\s+/g, "-")
    .toLowerCase();

  let { items } = await import(`../data/collections/${collectionName}.json`);
  let res = alasql(`SELECT * FROM ? WHERE slug='${entrySlug}'`, [items]);
  return res.length ? res[0] : null;
};

export const fetchItemById = async (contentTypeSlug, entryId) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypeData.contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  const collectionName = contentType.pluralDisplayName
    .replace(/\s+/g, "-")
    .toLowerCase();
  let { items } = await import(`../data/collections/${collectionName}.json`);
  let res = alasql(`SELECT * FROM ? WHERE __id=${entryId}`, [items]);
  return res.length ? res[0] : null;
};

export const fetchItems = async (contentTypeSlug, filters) => {
  if (!contentTypeSlug) {
    //TODO error handling
  }
  const contentTypeRes = alasql(
    `SELECT * FROM ? WHERE slug = '${contentTypeSlug}'`,
    [contentTypeData.contentTypes]
  );
  const contentType = contentTypeRes[0] ? contentTypeRes[0] : null;
  if (!contentType) {
    return;
  }
  const collectionName = contentType.pluralDisplayName
    .replace(/\s+/g, "-")
    .toLowerCase();
  let { items } = await import(`../data/collections/${collectionName}.json`);
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
    let { items } = await import(`../data/collections/${contentTypeSlug}.json`);
    let res = alasql(`SELECT * FROM ?` + (limit ? ` LIMIT ${limit}` : ""), [
      items,
    ]);
    let newCollection = { ...collection };
    if (collection.populate) {
      for (let i = 0; i < res.length; i++) {
        const item = res[i];
        for (let j = 0; j < collection.populate.length; j++) {
          const populateSlug = collection.populate[j];
          const contentTypeRes = alasql(`SELECT * FROM ?`, [
            contentTypeData.contentTypes,
          ]);
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
  let data;
  if (type === pageTypes.SITE) {
    data = site;
  }
  if (type === pageTypes.TEMPLATES) {
    data = templates;
  }
  let res = alasql(`SELECT * FROM ? WHERE slug = '${pageSlug}'`, [data]);
  if (res.length) {
    res[0].layout = layoutData.layout;
    return res[0];
  }
  return null;
};

export const fetchSection = async (sectionSlug) => {
  if (!sectionSlug) {
    //TODO error handling
  }
  let res = alasql(`SELECT * FROM ? WHERE slug = ${sectionSlug}`, [
    sectionData.sections,
  ]);
  return res.length ? res[0] : null;
};

export const fetchTemplate = async (templateSlug) => {
  if (!templateSlug) {
    //TODO error handling
  }
  let res = alasql(`SELECT * FROM ? WHERE slug = ${templateSlug}`, [
    templateData.templates,
  ]);
  return res.length ? res[0] : null;
};
