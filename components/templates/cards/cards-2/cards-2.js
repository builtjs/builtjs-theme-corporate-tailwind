import Link from "next/link";

export default function Cards2({ content }) {
  let { attributes, collections } = content;
  if (!collections) {
    throw new Error(
      `No collections attribute provided in sections.json for template`
    );
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  return (
    <section id="cards-2" className="template">
      <div className="px-4 py-16 mx-auto max-w-screen-xl md:py-24 xl:py-32">
        {attributes && attributes.heading && (
          <h1 className="max-w-2xl mx-auto mb-12 text-4xl font-bold leading-none text-center text-gray-900 lg:mb-28">
            {attributes.heading}
          </h1>
        )}
        <div className="flex flex-col lg:flex-row">
          {items &&
            items.map((item, i) => (
              <div key={i} className="flex flex-col flex-1 p-8 shadow-xl">
                <h2 className="mb-4 text-2xl font-bold leading-none text-gray-900">
                  {item.title}
                </h2>
                <p>{item.excerpt}</p>
                <Link href="/">
                  <a className="mt-auto text-secondary hover:text-secondary-dark">
                    Learn More
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
