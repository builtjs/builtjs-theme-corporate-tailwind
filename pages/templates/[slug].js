import { withRouter } from "next/router";
import { getConfig, fetchData } from "@builtjs/theme";
import Page from "../../.theme/page";
import { pageTypes } from "../../.theme/constants";

export default withRouter(Page);

export async function getStaticPaths() {
  let pageData = await fetchData('/data/pages.json');
    return {
      paths: pageData.pages.templates.map(({ slug }) => `/templates/${slug}`) ?? [],
      fallback: true,
    };
  }

export async function getStaticProps(context) {
  const { slug } = context.params;
  const config = await getConfig(slug, pageTypes.TEMPLATES);
  return {
    props: { config }
  };
}