import { withRouter } from "next/router";
import { fetchPage, fetchData } from "../../lib/fetch";
import Page from "../../page";
import { pageTypes } from "../../constants";

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
  const page = await fetchPage(slug, pageTypes.TEMPLATES);
  return {
    props: { page }
  };
}