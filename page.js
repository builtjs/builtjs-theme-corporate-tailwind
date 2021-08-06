import React, { useEffect, useState } from "react";
import { transformPage } from "./lib/transform-page";
import Layout from "./components/layout/layout";
// import TemplateMenuBtn from "./components/_external/template-menu-btn";
// import ModeToggleBtn from "./components/_external/mode-toggle-btn";
import { useRouter } from "next/router";
import ThemeBtns from "./components/_external/theme-btns";

const Page = ({ page }) => {
  const router = useRouter();
  const [fullPage, setFullPage] = useState({});
  const { slug } = router.query;

  useEffect(() => {
    (async () => {
      init();
    })();
  }, []);

  async function init() {
    const newFullPage = await transformPage(page);
    setFullPage(newFullPage);
  }

  useEffect(() => {
    if (slug) init();
  }, [slug]);

  return (
    <Layout fullPage={fullPage}>
      {page && (
        <>
        <ThemeBtns router={router} />
          {/* <TemplateMenuBtn router={router} />
          <ModeToggleBtn /> */}
          {fullPage.sections && (
            <>
              {fullPage.sections &&
                fullPage.sections.length &&
                fullPage.sections.map((section, i) => {
                  return (
                    <section.template
                      key={i}
                      content={section.content}
                      app={fullPage.app}
                    />
                  );
                })}
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default Page;
