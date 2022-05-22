import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import { getPage } from "../.theme/getPage";
import TemplateMenuBtn from "./components/template-menu-btn";

const Page = ({ config }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [page, setPage] = useState({});

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    init();
  }, [slug]);

  async function init() {
    if (!config) {
      return;
    }
    const page = await getPage(config);
    setPage(page);
  }

  return (
    <>
      <Layout page={page}>
        {
          <>
            {page.sections &&
              page.sections.length > 0 &&
              page.sections.map((section, i) => {
                return <section.component key={i} content={section.content} />;
              })}
          </>
        }
      </Layout>
      <TemplateMenuBtn router={router} />
    </>
  );
};

export default Page;
