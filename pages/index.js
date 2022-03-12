import { withRouter } from "next/router";
import { getConfig } from "bjs-theme";
import Page from "../page";
import { pages } from "../constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig(pages.HOME);
  return {
    props: { config }
  };
}