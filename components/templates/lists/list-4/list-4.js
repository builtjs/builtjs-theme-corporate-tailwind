import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import getConfig from "next/config";
import { Tag } from "@/elements";

export default function List3({ content }) {
  let { collections } = content;
  const { publicRuntimeConfig } = getConfig();
  if (!collections) {
    throw new Error("No collections");
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  const heroPost = items[0];
  const url = `/${collectionName}/${heroPost.attributes.slug}`;

  return (
    <section id="list-4" className="template">
      <div className="max-w-screen-xl mx-auto">
        {heroPost && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="h-full col-span-3 lg:order-last">
              <Link href={url}>
                <a>
                  <div className="relative transition-opacity rounded-lg h-96 lg:h-full hover:opacity-80">
                    <Image
                      className="bg-gray-100 rounded-lg"
                      src={`${publicRuntimeConfig.BACKEND_URL || ""}${heroPost.attributes?.image?.data.attributes.url}`}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-span-2 lg:py-20">
              {/* TODO: Implement Tag functionality */}
              {heroPost.attributes.tags && (
                <div className="grid grid-flow-col gap-2 mb-4 auto-cols-max">
                  {heroPost.attributes.tags.map((tag) => {
                    return <Tag key={tag.tag} item={tag}></Tag>;
                  })}
                </div>
              )}
              <div className="flex items-center mb-4">
                <p className="mb-0 text-sm capitalize preheading">
                  {format(new Date(heroPost.attributes.date), "dd LLLL yyyy")}
                </p>
                <span className="mx-3 text-gray-400">|</span>
                {/* TODO: Implement Category functionality */}
                {heroPost.attributes.category && (
                  <Link href={`/`}>
                    <a className="no-underline hover:underline">
                      <p className="mb-0 text-sm capitalize">{heroPost.attributes.category}</p>
                    </a>
                  </Link>
                )}
              </div>
              <Link href={url}>
                <a className="no-underline">
                  <h2 className="hover:text-gray-700 dark:hover:text-gray-200">{heroPost.attributes.title}</h2>
                </a>
              </Link>
              <p className="mb-10 text-lg">{heroPost.attributes.blurb}</p>
              <Link href={url}>
                <a>Read Article</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
