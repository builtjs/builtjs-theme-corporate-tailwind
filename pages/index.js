import { withRouter } from "next/router";
import { fetchPage } from "../lib/fetch";
import Page from "../page";
import { pages, pageTypes } from "../constants";

export default Page;

export async function getStaticProps() {
  const config = await fetchPage(pages.HOME);
  return {
    props: { config }
  };
}