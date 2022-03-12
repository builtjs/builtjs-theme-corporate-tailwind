import { withRouter } from "next/router";
import { fetchPage } from "../lib/fetch";
import Page from "../page";
import { getConfig } from "bjs-theme";
import { pages, pageTypes } from "../constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig(pages.CONTACT);
  return {
    props: { config }
  };
}