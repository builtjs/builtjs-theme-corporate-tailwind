import { withRouter } from "next/router";
import Page from "../page";
import { fetchPage } from "../lib/fetch";
import { getConfig } from "bjs-theme";
import { pages, pageTypes } from "../constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig(pages.BLOG);
  return {
    props: { config }
  };
}