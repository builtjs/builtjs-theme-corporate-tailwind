import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.css";
import Head from "next/head";
import { setupCrumbs } from "./../lib";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Display crumb (label with template name) when template is hovered over
    setupCrumbs(router);
  }, [router]);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
