import { withRouter } from "next/router";
import Page from "../page";
import { getConfig } from "bjs-theme";
import { pages } from "../constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig(pages.SERVICES);
  return {
    props: { config }
  };
}