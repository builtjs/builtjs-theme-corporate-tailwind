import { withRouter } from "next/router";
import Page from "../../.theme/page";
import { getConfig, getItems } from "./../../builtjs-theme";
import { pages } from "../../.theme/constants";

export default withRouter(Page);

export async function getStaticPaths() {
  const allItems = await getItems('blog-item');
  return {
    paths: allItems.items.map(({ slug }) => `/blog-items/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const config = await getConfig(pages.BLOG_ARTICLE);
  config.params = params;
  return {
    props: { config }
  };
}