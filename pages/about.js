import { withRouter } from "next/router";
import { fetchPage } from "../lib/fetch";
import Page from "../page";
import { pages, pageTypes } from "../constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await fetchPage(pages.ABOUT, pageTypes.SITE);
  return {
    props: { config }
  };
}