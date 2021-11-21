import dynamic from "next/dynamic";
import { fetchCollections, fetchItem, fetchItemById } from "../lib/fetch";
import { Page, Section, Template } from "../lib/models";
import { app } from "../data/app.js";
import { global } from "../data/global.js";
const SectionModel = new Section();

export const transformPage = async (pageDoc) => {
  return new Promise(async (resolve) => {
    const page = new Page(pageDoc);
    let fullPage = {
      layout: {},
      sections: [],
    };
    if (pageDoc.layout) {
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
        // section.template = transformedSection;
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
    fullPage.app = app;
    console.log({fullPage});
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
      // if (template) {
      //   template.doc.item = item;
      // }
      content.item = item;
    }
    
    if (section.doc.collections) {
      //template.doc.collections = await fetchCollections(section.doc);
      content.collections = await fetchCollections(section.doc);
    }
    if (section.doc.variants) {
      template.doc.variants = section.doc.variants;
      transformedSection.variants = section.doc.variants;
    }
    let component = null;
    if (template) {
      //template.doc.attributes = section.doc.content;
      component = dynamic(() =>
        import(
          `../components/templates/${template.doc.category}/${template.doc.slug}/${template.doc.slug}`
        )
      );
    }
    if (section.doc.attributes) {
      content.attributes = section.doc.attributes;
    }
    if (content) {
      transformedSection.content = content;
    }
    if (component) {
      transformedSection.template = component;
    }
    console.log('global---', global)
    if(global){
      content.global = global;
    }

    resolve(transformedSection);
  });
};
