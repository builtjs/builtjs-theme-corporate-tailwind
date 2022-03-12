import { withRouter } from "next/router";
import { fetchPage } from "../lib/fetch";
import { getConfig } from "bjs-theme";
import Page from "../page";
import { pages, pageTypes } from "../constants";

export default Page;

export async function getStaticProps() {
  const config = await getConfig(pages.HOME);
  return {
    props: { config }
  };
}