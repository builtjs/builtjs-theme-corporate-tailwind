import Head from "next/head";

export default function Seo({ content }) {
  let { attributes } = content;
  return (<Head>
      {attributes.title && (
        <>
          <title>{attributes.title}</title>
          <meta property="og:title" content={attributes.title} />
          <meta name="twitter:title" content={attributes.title} />
        </>
      )}
      {attributes.description && (
        <>
          <meta name="description" content={attributes.description} />
          <meta property="og:description" content={attributes.description} />
          <meta name="twitter:description" content={attributes.description} />
        </>
      )}
      {attributes.shareImage && (
        <>
          <meta property="og:image" content={attributes.shareImage} />
          <meta name="twitter:image" content={attributes.shareImage} />
          <meta name="image" content={attributes.shareImage} />
        </>
      )}
      {attributes.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
      </Head>
  );
}
