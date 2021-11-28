import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";

// TODO: Exclude current blog from related list
export default function Cards4({ content }) {
  let { collections } = { ...content };
  let data = null;
  const { publicRuntimeConfig } = getConfig();
  const DEFAULT_COLS = 3;
  const cols = (data && data.columns) || DEFAULT_COLS;
  if (!collections) {
    throw new Error("No template collections");
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  let limit;
  if (collection) {
    items = collection.items;
    limit = collection.limit || items.length;
  }

  return (
    <section id="cards-5" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className={`grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-${cols}`}>
          {items &&
            items.slice(0, limit).map((item, i) => (
              <div key={i}>
                <Link href={`/${collectionName}/${item.slug}`}>
                  <a>
                    <div className="relative w-full h-56 mb-6 transition-opacity hover:opacity-80">
                      <Image
                        src={`${publicRuntimeConfig.API_URL || ""}${item.image.url}`}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  </a>
                </Link>
                <Link href={`/${collectionName}/${item.slug}`}>
                  <a className="no-underline">
                    <h3 className="mb-4 hover:text-gray-700 dark:hover:text-gray-200">{item.title}</h3>
                  </a>
                </Link>
                <p>{item.excerpt}</p>
                <Link href={`/${collectionName}/${item.slug}`}>
                  <a>Read Article</a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
