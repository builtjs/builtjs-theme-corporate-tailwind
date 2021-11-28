import Head from "next/head";

export default function Seo({ content }) {
  let { data } = content;
  return (
    <Head>
      {data.title && (
        <>
          <title>{data.title}</title>
          <meta property="og:title" content={data.title} />
          <meta name="twitter:title" content={data.title} />
        </>
      )}
      {data.description && (
        <>
          <meta name="description" content={data.description} />
          <meta property="og:description" content={data.description} />
          <meta name="twitter:description" content={data.description} />
        </>
      )}
      {data.shareImage && (
        <>
          <meta property="og:image" content={data.shareImage} />
          <meta name="twitter:image" content={data.shareImage} />
          <meta name="image" content={data.shareImage} />
        </>
      )}
      {data.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
