import { withRouter } from "next/router";
import { getConfig } from "./../builtjs-theme";
import Page from "../.theme/page";
import { pages } from "../.theme/constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig(pages.HOME);
  return {
    props: { config }
  };
}