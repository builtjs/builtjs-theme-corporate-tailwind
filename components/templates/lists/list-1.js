import Link from "next/link";
import getConfig from 'next/config';
import { Preheading } from "../../elements";

export default function List1({ content }) {
  let { collections } = content;
  const { publicRuntimeConfig } = getConfig();
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
    <section id="list-1" className="template bg-light">
      <div className="px-4 py-24 overflow-hidden lg:py-32">
        <div className="max-w-screen-xl xl:mx-auto">
          {items &&
            items.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col mb-24 lg:mb-40 
                ${
                  collection.list.direction &&
                  collection.list.direction === "alternating" ?
                  i % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse" 
                    : collection.list.direction === "row-reverse" 
                    ? 'lg:flex-row-reverse' 
                    : 'lg:flex-row'
                }`}
              >
                <div className="relative flex-1">
                  <img
                    className="relative z-10 object-cover object-top w-full h-full mb-12 bg-gray-100 rounded-lg shadow-2xl lg:mb-0"
                    src={`${publicRuntimeConfig.API_URL || ''}${item.image.url}`}
                  />
                  <div className="absolute w-1/2 h-full text-gray-300 dark:text-gray-300 pattern-dots one"></div>
                </div>
                <div
                  className={`relative z-10 flex-1 xl:py-20 
 
                  ${
                    collection.list.direction &&
                    collection.list.direction === "alternating" ?
                    i % 2 === 0
                      ? "lg:pl-20"
                      : "lg:pr-20" 
                      : collection.list.direction === "row-reverse" 
                      ? 'lg:pr-20'
                      : 'lg:pl-20'
                  }
                  
                  `}
                >
                  <Preheading attribute={item.preheading}></Preheading>
                  <h2 className="mb-8 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mb-12">
                    {item.excerpt}
                  </p>
                  {item.link && (
                    <Link href={item.link.url}>
                      <a className="flex items-center justify-center px-6 py-3 tracking-wide text-lightest transition duration-200 ease-in-out bg-secondary-light rounded-md sm:inline-flex hover:bg-secondary">
                        Learn More
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(currentColor 2px, transparent 2px);
          background-size: calc(10 * 2px) calc(10 * 2px);
          right: -10px;
          bottom: -110px;
        }

        @media (min-width: 1024px) {
          .pattern-dots.one {
            right: auto;
            left: -105px;
          }

          .pattern-dots.two {
            left: auto;
            right: -105px;
          }
        }
      `}</style>
    </section>
  );
}
