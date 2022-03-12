import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.css";
import { setupCrumbs } from "./../lib";

function ThemeApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Display crumb (label with template name) when template is hovered over
    setupCrumbs(router);
  }, [router]);

  return <Component {...pageProps} />
}

export default ThemeApp;
