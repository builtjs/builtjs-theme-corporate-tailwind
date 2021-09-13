import React from "react";
import Head from "next/head";

function SiteApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default SiteApp;
