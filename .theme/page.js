import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import dynamic from "next/dynamic";

const { transformPage } = require("@builtjs/theme");

const Page = ({ config }) => {
  const [page, setPage] = useState({});
  const [layoutComps, setLayoutComps] = useState([]);
  const [sectionComps, setSectionComps] = useState([]);
  useEffect(() => {
    init();
  }, []);

  async function init() {
    if (!config) {
      return;
    }
    let page = await transformPage(config);
    setPage(page);
    let sectionComponentMap = await getComponentMap(page.sections);
    let sectionComponents = await getComponents(sectionComponentMap);
    setSectionComps(sectionComponents);
    if (!page) {
      return;
    }
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
            {sectionComps.length > 0 &&
              sectionComps.map((Section, i) => {
                return <Section key={i} content={page.sections[i].content} />;
              })}
          </>
        }
      </Layout>
    </>
  );
};

export default Page;

// import React, { useEffect, useState } from "react";
// import Layout from "../components/layout/layout";
// import { useRouter } from "next/router";
// import { getPage } from "../.theme/getPage";
// import TemplateMenuBtn from "./components/template-menu-btn";

// const Page = ({ config }) => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [page, setPage] = useState({});

//   useEffect(() => {
//     init();
//   }, []);

//   useEffect(() => {
//     init();
//   }, [slug]);

//   async function init() {
//     if (!config) {
//       return;
//     }
//     const page = await getPage(config);
//     setPage(page);
//   }

//   return (
//     <>
//       <Layout page={page}>
//         {
//           <>
//             {page.sections &&
//               page.sections.length > 0 &&
//               page.sections.map((section, i) => {
//                 return <section.component key={i} content={section.content} />;
//               })}
//           </>
//         }
//       </Layout>
//       <TemplateMenuBtn router={router} />
//     </>
//   );
// };

// export default Page;
