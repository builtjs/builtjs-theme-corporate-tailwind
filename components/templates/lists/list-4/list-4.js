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
      <div className="container py-32 mx-auto mb-20">
        {items &&
          items.map((item) => {
            return (
              <div className="flex items-center p-2 mb-12" key={item.slug}>
                <div className="mr-6">
                  <Link className="w-24" href={`/${collectionName}/${item.slug}`}>
                    <a>
                      <div className="relative h-48 w-72">
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
                  <Link href={`/${collectionName}/${item.slug}`}>
                    <a>
                      <h2 className="mb-0 text-2xl hover:underline">{item.title}</h2>
                    </a>
                  </Link>
                  <p className="mb-1 text-sm text-gray-600">
                    date goes here
                    {/* TODO: Get article publish date */}
                    {/* {format(new Date(item.createdAt), "d LLLL yyyy")} */}
                  </p>
                  {item.tags &&
                    item.tags.map((tag) => {
                      return (
                        <Link href={`/${collectionName}-archive?tag=${tag}`} key={tag}>
                          <a className="inline-flex items-center justify-center px-2 py-1 mb-4 mr-2 text-xs font-bold leading-none rounded-full bg-secondary-light text-lightest">
                            {tag}
                          </a>
                        </Link>
                      );
                    })}
                  <p className="text-lg">{item.excerpt}</p>
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
    </section>
  );
}
