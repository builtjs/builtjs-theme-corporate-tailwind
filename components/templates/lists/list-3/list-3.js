import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

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
  const url = `/${collectionName}/${heroPost.slug}`;

  return (
    <article id="list-3" className="template">
      <div className="max-w-screen-xl px-4 mx-auto">
        {heroPost && (
          <div className="flex flex-col pb-24 pt-28 xl:pt-32 lg:flex-row-reverse">
            <div className="flex-1 lg:w-2/3">
              <Link href={url}>
                <a>
                  <div className="relative w-full mb-8 transition-shadow duration-200 rounded-lg h-96 lg:h-full lg:py-56 hover:shadow-xl">
                    <Image
                      layout="fill"
                      className="object-cover bg-gray-100 rounded-lg"
                      src={`${publicRuntimeConfig.API_URL || ""}${heroPost.image.url}`}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="flex-none lg:w-1/3 lg:mr-10 xl:mt-8">
              <div className="flex">
                {/* <p className="text-gray-600">
                  {format(new Date(heroPost.createdAt), "d LLLL yyyy")}
                  <span className="mx-3 text-sm text-gray-600">|</span>
                  {heroPost.fields.tags &&
                    heroPost.fields.tags.map((tag) => {
                      return (
                        <Link href={`/${contentTypeId}-archive?tag=${tag}`}>
                          <a className="text-sm text-blue-500 hover:underline hover:text-blue-600">
                            {tag}
                          </a>
                        </Link>
                      );
                    })}
                </p> */}
                <p className="mb-2 text-sm">
                  date goes here
                  {/* {format(new Date(heroPost.createdAt), "d LLLL yyyy")} */}
                  <span className="mx-3 text-sm">|</span>
                  {heroPost.category && (
                    <Link href={`/`}>
                      {/* <Link href={`/${contentTypeId}-archive?tag=${tag}`}> */}
                      <a className="text-sm text-secondary hover:underline hover:text-secondary-dark">{heroPost.category}</a>
                    </Link>
                  )}
                </p>
              </div>
              <Link href={url}>
                <a>
                  <h2 className="mb-6 text-4xl font-bold leading-none hover:underline">{heroPost.title}</h2>
                </a>
              </Link>
              <p className="mb-6 font-light leading-loose">{heroPost.excerpt}</p>
              <Link href={url}>
                <a className="text-secondary-light hover:underline hover:text-secondary">Read Article</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
