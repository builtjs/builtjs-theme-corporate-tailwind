import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";
import { format } from "date-fns";
import { Tag } from "@/elements";

export default function List5({ content, router }) {
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
    <section id="list-5" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {items &&
            items.map((item) => {
              return (
                <div key={item.attributes.slug}>
                  <div>
                    <Link className="w-24" href={`/${collectionName}/${item.attributes.slug}`}>
                      <a>
                        <div className="relative mb-6 transition-opacity h-96 lg:h-56 hover:opacity-80">
                          <Image
                            className="bg-gray-100 rounded-lg"
                            src={`${publicRuntimeConfig.BACKEND_URL || ""}${item.attributes?.image?.data.attributes.url}`}
                            layout="fill"
                            objectFit="cover"
                            alt={item.attributes.title}
                          />
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div>
                    {/* TODO: Implement Tag functionality */}
                    {item.attributes.tags && (
                      <div className="grid grid-flow-col gap-2 mb-4 auto-cols-max">
                        {item.attributes.tags.map((tag) => {
                          return <Tag key={tag.tag} item={tag}></Tag>;
                        })}
                      </div>
                    )}
                    <div className="flex items-center mb-2">
                      <p className="mb-0 text-sm capitalize preheading">{format(new Date(item.attributes.date), "dd LLLL yyyy")}</p>
                      <span className="mx-3 text-gray-400">|</span>
                      {/* TODO: Implement Category functionality */}
                      {item.attributes.category && (
                        <Link href={`/`}>
                          <a className="no-underline hover:underline">
                            <p className="mb-0 text-sm capitalize">{item.attributes.category}</p>
                          </a>
                        </Link>
                      )}
                    </div>
                    <Link href={`/${collectionName}/${item.attributes.slug}`}>
                      <a className="no-underline">
                        <h3 className="mb-2 hover:text-gray-700 dark:hover:text-gray-200">{item.attributes.title}</h3>
                      </a>
                    </Link>
                    <p>{item.blurb}</p>
                    <Link href={`/${collectionName}/${item.attributes.slug}`}>
                      <a>Read Article</a>
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
