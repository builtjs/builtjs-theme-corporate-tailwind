import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";
// import { format } from "date-fns";

export default function List4({ content, router }) {
  const { collections } = content;
  const { publicRuntimeConfig } = getConfig();
  if (!collections) {
    throw new Error("No template collections");
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  let tag = router && router.query ? router.query.tag : null;
  return (
    <section id="list-4" className="template">
      <div className="max-w-screen-xl py-32 mx-auto">
        <div className="flex flex-col lg:flex-row">
          {items &&
            items.map((item) => {
              return (
                <div className="flex-1 mx-4 mb-16" key={item.slug}>
                  <div className="">
                    <Link className="w-24" href={`/${collectionName}/${item.slug}`}>
                      <a>
                        <div className="relative w-full h-56 mb-6 transition-shadow duration-200 hover:shadow-xl">
                          <Image
                            className="object-cover bg-gray-100 rounded-lg"
                            src={`${publicRuntimeConfig.API_URL || ""}${item.image.url}`}
                            width={item.image.width}
                            height={item.image.height}
                            layout="fill"
                            alt=""
                          />
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-gray-600">
                      date goes here
                      {/* TODO: Get article publish date */}
                      {/* {format(new Date(item.createdAt), "d LLLL yyyy")} */}
                    </p>
                    <Link href={`/${collectionName}/${item.slug}`}>
                      <a>
                        <h2 className="mb-4 text-2xl hover:underline">{item.title}</h2>
                      </a>
                    </Link>
                    {item.tags &&
                      item.tags.map((tag) => {
                        return (
                          <Link href={`/${collectionName}-archive?tag=${tag}`} key={tag}>
                            <a className="inline-flex items-center justify-center px-2 py-1 mb-4 mr-2 text-xs font-bold leading-none rounded-full bg-secondary-light text-lightest">
                              {item.tag}
                            </a>
                          </Link>
                        );
                      })}
                    <p className="leading-normal">{item.excerpt}</p>
                    <Link href={`/${collectionName}/${item.slug}`}>
                      <a className="text-secondary-light hover:underline hover:text-secondary">Read Article</a>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>

        {!items.length && (
          <div>
            <p>No posts</p>
          </div>
        )}
      </div>
    </section>
  );
}
