import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Layout from "../components/layout/layout";
import TemplateMenuBtn from "./components/template-menu-btn";
import { setupCrumbs } from "./";

const { transformPage } = require("@builtjs/theme");

const Page = ({ config }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [page, setPage] = useState({});
  const [layoutComps, setLayoutComps] = useState([]);
  const [sectionComps, setSectionComps] = useState([]);
  let [isSetUpCrumbs, setIsSetupCrumbs] = useState(false);

  useEffect(() => {
    if (!isSetUpCrumbs) {
      setupCrumbs(router);
      setIsSetupCrumbs(true);
    }
    setPage(null);
    setLayoutComps([]);
    init();
  }, [slug]);

  async function init() {
    if (!config) {
      return;
    }
    let page = await transformPage(config);
    if (!page) {
      return;
    }
    setPage(page);
    let sectionComponentMap = await getComponentMap(page.sections);
    let sectionComponents = await getComponents(sectionComponentMap);
    setSectionComps(sectionComponents);
    let layoutComponentMap = await getComponentMap(page.layout.sections);
    let layoutComponents = await getComponents(layoutComponentMap);
    setLayoutComps(layoutComponents);
  }

  async function getComponentMap(sections) {
    return new Promise(async (resolve) => {
      const map = {};
      for (let i = 0; i < sections.length; i++) {
        const template = sections[i].template.doc;
        map["section" + i] = import(
          `../components/templates/${template.category}/${template.slug}/${template.slug}.js`
        );
      }
      resolve(map);
    });
  }

  function getComponents(map) {
    return new Promise((resolve) => {
      let comps = [];
      for (const key of Object.keys(map)) {
        let comp = dynamic(() => map[key], {
          suspense: false,
        });
        comps.push(comp);
      }
      resolve(comps);
    });
  }

  return (
    <>
      <Layout layoutComps={layoutComps} page={page}>
        {
          <>
            {page &&
              sectionComps.length > 0 &&
              sectionComps.map((Section, i) => {
                return (
                  page.sections[i] && (
                    <Section key={i} content={page.sections[i].content} />
                  )
                );
              })}
          </>
        }
      </Layout>
      <TemplateMenuBtn router={router} />
    </>
  );
};

export default Page;
