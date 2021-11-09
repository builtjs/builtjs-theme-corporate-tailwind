import { withRouter } from "next/router";
import { fetchPage } from "../../lib/fetch";
import Page from "../../page";
import { pageTypes } from "../../constants";
import { templates } from "../../data/templates.json";

export default withRouter(Page);

export async function getStaticPaths() {
    return {
      paths: templates.map(({ slug }) => `/templates/${slug}`) ?? [],
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