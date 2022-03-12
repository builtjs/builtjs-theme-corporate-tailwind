import { withRouter } from "next/router";
import { fetchPage, fetchItems } from "../../lib/fetch";
import Page from "../../page";
import { getConfig, getItems } from "bjs-theme";
import { pages, pageTypes, contentTypes } from "../../constants";

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