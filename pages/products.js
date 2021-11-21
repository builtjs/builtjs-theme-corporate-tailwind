import { withRouter } from "next/router";
import { fetchPage } from "../lib/fetch";
import Page from "../page";
import { pages, pageTypes } from "../constants";

export default withRouter(Page);

export async function getStaticProps() {
  const page = await fetchPage(pages.PRODUCTS, pageTypes.SITE);
  return {
    props: { page },
  };
}
