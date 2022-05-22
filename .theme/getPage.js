import dynamic from "next/dynamic";
const { transformPage } = require("@builtjs/theme");

async function getPage(config) {
  return new Promise(async (resolve) => {
    let page = await transformPage(config);
    page = await createComponents(page, page.layout.sections, true);
    page = await createComponents(page, page.sections, false);
    resolve(page);
  });
}

async function createComponents(page, sections, isLayout) {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    let template = section.template;
    let component = null;
    if (template) {
      component = await getComponent(template);
    }
    if (component) {
      section.component = component;
      if (isLayout) {
        page.layout[`_${i}`] = section;
      }
    }
  }
  return page;
}

function getComponent(template) {
  return new Promise(async (resolve) => {
    let component = await dynamic(() =>
      import(
        `../components/templates/${template.doc.category}/${template.doc.slug}/${template.doc.slug}`
      )
    );
    return resolve(component);
  });
}

module.exports = {
  getPage,
};
