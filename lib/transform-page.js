import dynamic from "next/dynamic";
import { fetchCollections, fetchItem, fetchItemById } from "../lib/fetch";
import { Page, Section, Template } from "../lib/models";
const SectionModel = new Section();

export const transformPage = async (pageDoc) => {
  return new Promise(async (resolve) => {
    const page = new Page(pageDoc);
    let fullPage = {
      layout: {},
      sections: [],
    };
    if (pageDoc && pageDoc.layout) {
      //TODO loop though sections
      if(pageDoc.layout.sections){
        let header = await getSection(pageDoc.layout.sections[0], pageDoc);
        fullPage.layout['_0'] = await transformSection(
          header,
          pageDoc
        );
        let footer = await getSection(pageDoc.layout.sections[1], pageDoc);
        fullPage.layout['_1'] = await transformSection(
          footer,
          pageDoc
        );
      }
    }

    await page.populate("sections");
    for (let i = 0; i < page.doc.sections.length; i++) {
      const section = page.doc.sections[i];
      if (section) {
        let transformedSection = await transformSection(section, pageDoc);
        if (transformedSection.template) {
          fullPage.sections.push(transformedSection);
        } else {
          fullPage.sections.push(transformedSection);
        }
      }
    }
    if (pageDoc.layout && pageDoc.layout.footerSection) {
      let footerSection = await getSection(
        pageDoc.layout.footerSection,
        pageDoc
      );
      fullPage.sections.layout.footer = await transformSection(
        footerSection,
        pageDoc
      );
    }
    let appData = await fetchData(`/data/app.json`);
    fullPage.app = appData.app;
    resolve(fullPage);
  });
};

let getSection = (sectionDoc, pageDoc) => {
  return new Promise(async (resolve) => {
    let section = await SectionModel.findOne(sectionDoc.slug);
    const TemplateModel = new Template();
    let template = await TemplateModel.findOne(sectionDoc.template.slug);
    section.template = template;
    resolve(section);
  });
};

let transformSection = async (section, pageDoc) => {
  return new Promise(async (resolve) => {
    let template = section.template;
    let transformedSection = {};
    let content = {};
    if (
      section.doc.item &&
      pageDoc.params &&
      pageDoc.params.slug &&
      Object.keys(section.doc.item).length
    ) {
      let contentTypeSlug = Object.keys(section.doc.item)[0];
      let item = await fetchItem(contentTypeSlug, pageDoc.params.slug);
      if (section.doc.item[contentTypeSlug].populate) {
        for (
          let j = 0;
          j < section.doc.item[contentTypeSlug].populate.length;
          j++
        ) {
          const populateSlug = section.doc.item[contentTypeSlug].populate[j];
          let populateItem = await fetchItemById(
            populateSlug,
            item[populateSlug].__id
          );
          item[populateSlug] = populateItem;
        }
      }
      content.item = item;
    }
    
    if (section.doc.collections) {
      content.collections = await fetchCollections(section.doc);
    }
    if (section.doc.variants) {
      template.doc.variants = section.doc.variants;
      transformedSection.variants = section.doc.variants;
    }
    let component = null;
    if (template) {
      component = dynamic(() =>
        import(
          `../components/templates/${template.doc.category}/${template.doc.slug}/${template.doc.slug}`
        )
      );
    }
    if (section.doc.data) {
      content.data = section.doc.data;
    }
    if (content) {
      transformedSection.content = content;
    }
    if (component) {
      transformedSection.template = component;
    }
    if(global){
      let globalData = await fetchData(`/data/global.json`);
      content.global = globalData.global;
    }

    resolve(transformedSection);
  });
};

const fetchData = async (path) => {
  const url = process.env.url || "http://localhost:3000";
  return new Promise(async (resolve) => {
    let res = await fetch(`${url}${path}`);
    let data = res.json();
    resolve(data);
  });
};


