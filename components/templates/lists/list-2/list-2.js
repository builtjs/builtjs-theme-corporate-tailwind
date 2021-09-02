import Image from "next/image";

export default function List2({ content }) {
  let { attributes, collections } = content;
  if (!collections) {
    throw new Error(`No collections attribute provided in sections.json for template`);
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  return (
    <section id="list-2" className="template">
      <div className="max-w-screen-xl px-4 py-32 mx-auto">
        {attributes && attributes.heading && (
          <h1 className="max-w-2xl mx-auto mb-12 text-4xl font-bold leading-none text-center text-gray-900 lg:mb-28">{attributes.heading}</h1>
        )}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:order-1">
            <div className="relative w-full mb-20 h-96 lg:h-full">
              <Image layout="fill" className="object-cover bg-gray-100 rounded-lg" src="https://source.unsplash.com/vbxyFxlgpjM" alt="" />
            </div>
          </div>
          <div className="flex-1 lg:mr-12">
            <div className="flex flex-col lg:py-20">
              {items &&
                items.map((item, i) => (
                  <div key={i} className="flex-1 mb-10 lg:mb-20">
                    <div className="flex items-start">
                      <div className="mr-5 text-lightest">
                        <svg
                          className="w-12 p-3 rounded-lg bg-secondary-light"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="100%"
                          width="100%"
                          viewBox="0 0 22 27"
                        >
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M17.2 9.6H16v-.287A3.196 3.196 0 0 0 13.682 4 5.55 5.55 0 0 0 10.517.422 5.43 5.43 0 0 0 8.4 0C6.904 0 5.51.614 4.45 1.734a2.8 2.8 0 0 0-3.376 3.877A3.196 3.196 0 0 0 1.6 10.77V21.2A2.803 2.803 0 0 0 4.4 24h8.8a2.803 2.803 0 0 0 2.8-2.8v-.4h1.2a3.604 3.604 0 0 0 3.6-3.6v-4a3.604 3.604 0 0 0-3.6-3.6zM6.4 20a.8.8 0 1 1-1.6 0v-8a.8.8 0 0 1 1.6 0v8zm3.2 0A.8.8 0 1 1 8 20v-8a.8.8 0 0 1 1.6 0v8zm3.2 0a.8.8 0 1 1-1.6 0v-8a.8.8 0 0 1 1.6 0v8zm.8-11.2c-.417 0-1.028-.259-1.335-.565A.8.8 0 0 0 11.7 8H5.6a.8.8 0 0 0-.75.527C4.508 9.46 3.67 9.6 3.2 9.6a1.6 1.6 0 0 1 0-3.2c.004 0 .456.017.82.29a.8.8 0 1 0 .96-1.28A3.184 3.184 0 0 0 3.2 4.8c-.236 0-.47.027-.7.079a1.2 1.2 0 0 1 2.069-1.187c.09.124.169.257.235.395A.8.8 0 0 0 6.4 4c0-.338-.18-.758-.538-1.25-.023-.031-.05-.062-.073-.093C6.52 1.972 7.432 1.6 8.4 1.6a3.843 3.843 0 0 1 2.762 1.159 4.011 4.011 0 0 1 1.07 3.541.798.798 0 0 0 .786.95.8.8 0 0 0 .785-.65c.06-.32.094-.646.098-.971a1.6 1.6 0 0 1-.3 3.171zm5.6 8.4a2 2 0 0 1-2 2H16v-8h1.2a2 2 0 0 1 2 2v4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="my-4 text-xl font-bold leading-none text-gray-900">{item.title}</h2>
                        <p>{item.excerpt}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
