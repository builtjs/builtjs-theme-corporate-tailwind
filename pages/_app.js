import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.css";
<<<<<<< HEAD
import Head from "next/head";
import { setupCrumbs } from "./../lib";
=======
import { setupCrumbs } from './../lib';
import SiteApp from './_site-app';
>>>>>>> main

function ThemeApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Display crumb (label with template name) when template is hovered over
    setupCrumbs(router);
  }, [router]);

<<<<<<< HEAD
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
=======
  return SiteApp({ Component, pageProps });
>>>>>>> main
}

export default ThemeApp;
