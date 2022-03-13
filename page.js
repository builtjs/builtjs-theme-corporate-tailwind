import React, { useEffect, useState } from "react";
import Layout from "./components/layout/layout";
import { useRouter } from "next/router";
import { getPage } from "bjs-theme";
import TemplateMenuBtn from "./lib/components/template-menu-btn";

const Page = ({ config }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [page, setPage] = useState({});

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (slug) init();
  }, [slug]);

  async function init() {
    const page = await getPage(config);
    setPage(page);
  }

  return (
    <>
      <Layout page={page}>
        {config && (
          <>
            {page.sections && (
              <>
                {page.sections &&
                  page.sections.length &&
                  page.sections.map((section, i) => {
                    return (
                      <section.template key={i} content={section.content} />
                    );
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
