import { withRouter } from "next/router";
import Page from "../.theme/page";
import { getConfig } from "./../builtjs-theme";
import { pages } from "../.theme/constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig(pages.BLOG);
  return {
    props: { config }
  };
}