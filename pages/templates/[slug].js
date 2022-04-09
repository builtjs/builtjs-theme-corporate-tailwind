import { withRouter } from "next/router";
import Page from "../../.theme/page";
import { getConfig, getData } from "./../../builtjs-theme";
import { pageTypes } from "../../.theme/constants";

export default withRouter(Page);

export async function getStaticPaths() {
  let pageData = await getData('/data/pages.json');
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