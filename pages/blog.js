import { withRouter } from "next/router";
import Page from "../page";
import { fetchPage } from "../lib/fetch";
import { pages, pageTypes } from "../constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await fetchPage(pages.BLOG, pageTypes.SITE);
  return {
    props: { config }
  };
}