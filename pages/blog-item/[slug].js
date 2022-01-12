import { withRouter } from "next/router";
import { fetchPage, fetchItems } from "../../lib/fetch";
import Page from "../../page";
import { pages, pageTypes, contentTypes } from "../../constants";

export default withRouter(Page);

export async function getStaticPaths() {
  const allItems = await fetchItems(contentTypes.BLOG_ITEM);
  return {
    paths: allItems.items.map(({ slug }) => `/blog-item/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const page = await fetchPage(pages.BLOG_ARTICLE, pageTypes.SITE);
  page.params = params;
  return {
    props: { page }
  };
}