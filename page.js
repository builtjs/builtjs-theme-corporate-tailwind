import React, { useEffect, useState } from "react";
import { transformPage } from "./lib/transform-page";
import Layout from "./components/layout/layout";
import { useRouter } from "next/router";
import TemplateMenuBtn from "./components/_external/template-menu-btn";

const Page = ({ config }) => {
  const router = useRouter();
  const [fullPage, setFullPage] = useState({});
  const { slug } = router.query;

  useEffect(() => {
    (async () => {
      init();
    })();
  }, []);

  async function init() {
    const newFullPage = await transformPage(config);
    setFullPage(newFullPage);
  }

  useEffect(() => {
    if (slug) init();
  }, [slug]);

  return (
    <>
      <Layout fullPage={fullPage}>
        {config && (
          <>
            {fullPage.sections && (
              <>
                {fullPage.sections &&
                  fullPage.sections.length &&
                  fullPage.sections.map((section, i) => {
                    return <section.template key={i} content={section.content} />;
                  })}
              </>
            )}
          </>
        )}
      </Layout>
      <TemplateMenuBtn router={router} />
    </>
  );
};

export default Page;
