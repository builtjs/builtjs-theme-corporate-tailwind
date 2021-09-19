import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.css";
import { setupCrumbs } from "./../lib";
import SiteApp from "./_site-app";

function ThemeApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Display crumb (label with template name) when template is hovered over
    setupCrumbs(router);
  }, [router]);

  return SiteApp({ Component, pageProps });
}

export default ThemeApp;
